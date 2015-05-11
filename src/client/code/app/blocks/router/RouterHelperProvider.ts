/* Help configure the state-base ui.router */
export default class RouterHelperProvider {
    static $inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    private config;
    public $get;
    
    constructor(
        private $locationProvider,
        private $stateProvider,
        private $urlRouterProvider) {
        this.config = {
            docTitle: undefined,
            resolveAlways: {}
        };

        $locationProvider.html5Mode(true);
        
        let provider = this;

        this.$get = ($location, $rootScope, $state, logger) => {
            var handlingStateChangeError = false;
            var hasOtherwise = false;
            var stateCounts = {
                errors: 0,
                changes: 0
            };

            var service = {
                configureStates: configureStates,
                getStates: getStates,
                stateCounts: stateCounts
            };

            init();

            return service;

            ///////////////

            function configureStates(states, otherwisePath) {
                states.forEach(function(state) {
                    state.config.resolve =
                    angular.extend(state.config.resolve || {}, provider.config.resolveAlways);
                    provider.$stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    provider.$urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function handleRoutingErrors() {
                // Route cancellation:
                // On routing error, go to the dashboard.
                // Provide an exit clause if it tries to do it twice.
                $rootScope.$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams, error) {
                        if (handlingStateChangeError) {
                            return;
                        }
                        stateCounts.errors++;
                        handlingStateChangeError = true;
                        var destination = (toState &&
                            (toState.title || toState.name || toState.loadedTemplateUrl)) ||
                            'unknown target';
                        var msg = 'Error routing to ' + destination + '. ' +
                            (error.data || '') + '. <br/>' + (error.statusText || '') +
                            ': ' + (error.status || '');
                        logger.warning(msg, [toState]);
                        $location.path('/');
                    }
                    );
            }

            function init() {
                handleRoutingErrors();
                updateDocTitle();
            }

            function getStates() { return $state.get(); }

            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {
                        stateCounts.changes++;
                        handlingStateChangeError = false;
                        var title = provider.config.docTitle + ' ' + (toState.title || '');
                        $rootScope.title = title; // data bind to <title>
                    });
            }
        }
        this.$get.$inject = ['$location', '$rootScope', '$state', 'logger'];
    }

    public configure(cfg) {
        angular.extend(this.config, cfg);
    }
}

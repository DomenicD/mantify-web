/* @ngInject */
export function htTopNav() {
    var directive = {
        bindToController: true,
        controller: TopNavController,
        controllerAs: 'vm',
        restrict: 'EA',
        scope: {
            'navline': '='
        },
        templateUrl: 'code/app/layout/ht-top-nav.html'
    };

    /* @ngInject */
    function TopNavController() {
        var vm = this;
    }

    return directive;
}

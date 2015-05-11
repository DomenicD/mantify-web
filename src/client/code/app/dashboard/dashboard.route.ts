configRoutesFn.$inject = ['routerHelper'];
/* @ngInject */
export function configRoutesFn(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'dashboard',
            config: {
                url: '/',
                templateUrl: 'code/app/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                title: 'dashboard',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-dashboard"></i> Dashboard'
                }
            }
        }
    ];
}
    

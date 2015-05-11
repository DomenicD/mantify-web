import AdminController from './AdminController';
import {coreModule} from '../core/core.module';
import {widgetsModule} from '../widgets/widgets.module';

export var adminModule = angular
    .module('app.admin', [
        coreModule.name,
        widgetsModule.name
    ])
    .controller('AdminController', AdminController)
    .run(appRun);


appRun.$inject = ['routerHelper'];
/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'admin',
            config: {
                url: '/admin',
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminController',
                controllerAs: 'vm',
                title: 'Admin',
                settings: {
                    nav: 2,
                    content: '<i class="fa fa-lock"></i> Admin'
                }
            }
        }
    ];
}
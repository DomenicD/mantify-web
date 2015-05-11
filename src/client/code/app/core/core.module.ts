import { blocksModule } from "../blocks/blocks.module";
import DataService from "DataService";

export var coreModule = angular.module('app.core', 
    [
        'ngAnimate',
        'ngSanitize',
        blocksModule.name,
        'ui.router', 
        'ngplus'
    ])
    .constant('toastr', toastr)
    .constant('moment', moment)
    .service('dataservice', DataService)
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    var otherwise = '/404';
    routerHelper.configureStates(getStates(), otherwise);
}

function getStates() {
    return [
        {
            state: '404',
            config: {
                url: '/404',
                templateUrl: 'app/core/404.html',
                title: '404'
            }
        }
    ];
}
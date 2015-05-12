/// <reference path="../../../../../typings/tsd.d.ts" />
import { blocksModule } from '../blocks/blocks.module';
import {config, coreConfigFn, toastrConfigFn} from './config';
import DataService from './DataService';

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
    .value('config', config)
    .config(toastrConfigFn)
    .config(coreConfigFn)
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
                templateUrl: 'code/app/core/404.html',
                title: '404'
            }
        }
    ];
}
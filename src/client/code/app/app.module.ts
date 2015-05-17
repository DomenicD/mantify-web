/// <reference path="../../../../typings/tsd.d.ts" />
import { adminModule } from './admin/admin.module';
import { coreModule } from './core/core.module';
import { dashboardModule } from './dashboard/dashboard.module';
import { layoutModule } from './layout/layout.module';
import { widgetsModule } from './widgets/widgets.module';

let thirdPartyModules = [
    'ngMaterial'
];

let internalModules = [
    adminModule.name,
    coreModule.name,
    dashboardModule.name,
    layoutModule.name,
    widgetsModule.name
];

angular.module('app', [].concat(
    thirdPartyModules,
    internalModules
    ))
    .config(ngMaterialConfig);

angular.bootstrap(document, ['app']);


function ngMaterialConfig($mdThemingProvider: angular.material.MDThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('blue');    
}
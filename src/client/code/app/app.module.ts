/// <reference path="../../../../typings/tsd.d.ts" />
import { adminModule } from './admin/admin.module';
import { coreModule } from './core/core.module';
import { dashboardModule } from './dashboard/dashboard.module';
import { layoutModule } from './layout/layout.module';
import { widgetsModule } from './widgets/widgets.module';

import { AppController } from './app';
import { componentsModule } from './components/components.module';

let thirdPartyModules = [
    'ngMaterial',
    'ngNewRouter'
];

let internalModules = [
    componentsModule.name
];

let dependencyModules = thirdPartyModules.concat(internalModules);

angular.module('app', dependencyModules)
    .controller('AppController', AppController)
    .config(ngMaterialConfig)
    .config(newRouterConfig);

angular.bootstrap(document.body, ['app']);

function ngMaterialConfig($mdThemingProvider: angular.material.MDThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('blue');    
}

function newRouterConfig($componentLoaderProvider) {
    $componentLoaderProvider
        .setTemplateMapping(name => {            
            let dashName = dashCase(name); 
            return `./src/client/code/app/components/${dashName}/${dashName}.html`;
        });
}

function dashCase(str) {
  return str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
}
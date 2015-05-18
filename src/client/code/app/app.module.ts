/// <reference path="../../../../typings/tsd.d.ts" />
import { AppController } from './app';
import { componentsModule } from './components/components.module';

let thirdPartyModules = [
    'ngFileUpload',
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
        .primaryPalette('indigo')
        .accentPalette('purple');    
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
import { coreModule } from 'core.module'; 

coreModule.config(toastrConfig);

toastrConfig.$inject = ['toastr'];
/* @ngInject */
function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
}

var config = {
    appErrorPrefix: '[orangePortal Error] ',
    appTitle: 'orangePortal'
};

coreModule.value('config', config);

coreModule.config(configure);

configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
/* @ngInject */
function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
        $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
}

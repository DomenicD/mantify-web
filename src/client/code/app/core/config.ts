toastrConfigFn.$inject = ['toastr'];
/* @ngInject */
export function toastrConfigFn(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
}

export const config = {
    appErrorPrefix: '[orangePortal Error] ',
    appTitle: 'orangePortal'
}; 

coreConfigFn.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
/* @ngInject */
export function coreConfigFn($logProvider, routerHelperProvider, 
        exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
        $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
}

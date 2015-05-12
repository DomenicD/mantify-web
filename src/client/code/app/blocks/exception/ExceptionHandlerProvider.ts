/// <reference path="../../../../../../typings/tsd.d.ts" />
// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
export default class ExceptionHandlerProvider implements angular.IServiceProvider {
    config: { appErrorPrefix: string };
    
    constructor() {
        this.config = { appErrorPrefix: undefined };
    }
    
    configure(appErrorPrefix : string) {
        this.config.appErrorPrefix = appErrorPrefix;
    }
    
    $get() {
        return { config: this.config }
    }
}

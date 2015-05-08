// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
var ExceptionHandlerProvider = (function () {
    function ExceptionHandlerProvider() {
        this.config = { appErrorPrefix: undefined };
    }
    ExceptionHandlerProvider.prototype.configure = function (appErrorPrefix) {
        this.config.appErrorPrefix = appErrorPrefix;
    };
    ExceptionHandlerProvider.prototype.$get = function () {
        return { config: this.config };
    };
    return ExceptionHandlerProvider;
})();
exports.default = ExceptionHandlerProvider;
//# sourceMappingURL=ExceptionHandlerProvider.js.map
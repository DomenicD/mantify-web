var ExceptionService = (function () {
    function ExceptionService(_logger) {
        this._logger = _logger;
    }
    ExceptionService.prototype.catcher = function (message) {
        return function (reason) {
            this._logger.error(message, reason);
        };
    };
    ExceptionService.$inject = ['logger'];
    return ExceptionService;
})();
exports.default = ExceptionService;
//# sourceMappingURL=ExceptionHandler.js.map
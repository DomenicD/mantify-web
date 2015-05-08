var ToastrLogger = (function () {
    function ToastrLogger($log, toastr) {
        this.$log = $log;
        this.toastr = toastr;
    }
    ToastrLogger.prototype.error = function (message, data, title) {
        this.toastr.error(message, title);
        this.$log.error('Error: ' + message, data);
    };
    ToastrLogger.prototype.info = function (message, data, title) {
        this.toastr.info(message, title);
        this.$log.info('Info: ' + message, data);
    };
    ToastrLogger.prototype.success = function (message, data, title) {
        this.toastr.success(message, title);
        this.$log.info('Success: ' + message, data);
    };
    ToastrLogger.prototype.warning = function (message, data, title) {
        this.toastr.warning(message, title);
        this.$log.warn('Warning: ' + message, data);
    };
    ToastrLogger.$inject = ['$log', 'toastr'];
    return ToastrLogger;
})();
exports.default = ToastrLogger;
//# sourceMappingURL=ToastrLogger.js.map
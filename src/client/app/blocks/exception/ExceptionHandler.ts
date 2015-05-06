export default class ExceptionService {
    static $inject = ['logger'];
    
    constructor(private _logger) {}
    
    catcher(message) {
        return function(reason) {
            this._logger.error(message, reason);
        }
    }
}
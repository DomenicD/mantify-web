/// <reference path="../../../../../../typings/tsd.d.ts" />
import ILogger from '../logger/ILogger'

export default class ExceptionService {
    static $inject = ['logger'];
    
    constructor(private _logger: ILogger) {}
    
    catcher(message: string) {
        return function(reason) {
            this._logger.error(message, reason);
        }
    }
}
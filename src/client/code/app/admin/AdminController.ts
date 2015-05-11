export default class AdminController {
    static $inject = ['logger'];
    public title : string;
    constructor(private _logger) {
        this.title = 'Admin';
        this.activate();            
    }
    
    private activate() {
        this._logger.info('Activated Admin View');
    }
}    
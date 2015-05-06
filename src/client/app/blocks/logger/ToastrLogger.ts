import ILogger from 'ILogger';

export default class ToastrLogger implements ILogger {
    static $inject = ['$log', 'toastr'];
    
    constructor(private $log, private toastr) {}
    
    error(message: string, data?: any, title?: string) {
        this.toastr.error(message, title);
        this.$log.error('Error: ' + message, data);
    }

    info(message: string, data?: any, title?: string) {
        this.toastr.info(message, title);
        this.$log.info('Info: ' + message, data);
    }

    success(message: string, data?: any, title?: string) {
        this.toastr.success(message, title);
        this.$log.info('Success: ' + message, data);
    }

    warning(message: string, data?: any, title?: string) {
        this.toastr.warning(message, title);
        this.$log.warn('Warning: ' + message, data);
    }
}
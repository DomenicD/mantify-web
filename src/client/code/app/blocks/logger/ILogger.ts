export interface ILogger {
    error(message: string, data?: any, title?: string);
    info(message: string, data?: any, title?: string);
    success(message: string, data?: any, title?: string);
    warning(message: string, data?: any, title?: string);
}

export { ILogger as default }
export interface ILogger {
    error(message, data, title);
    info(message, data, title);
    success(message, data, title);
    warning(message, data, title);
}

export { ILogger as default }
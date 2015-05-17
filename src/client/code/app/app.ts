/// <reference path="../../../../typings/tsd.d.ts" />

export class AppController {
    static $inject = ['$router'];
    static $routeConfig = [
        { path: '/',           component: 'uploadModel' },
        { path: '/details', component: 'modelDetails' },
        { path: '/list', component: 'modelList' }
    ];
    constructor(private _router) { }
}
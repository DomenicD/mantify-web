/// <reference path="../../../../../typings/tsd.d.ts" />
import { exceptionModule } from './exception/exception.module';
import { loggerModule } from './logger/logger.module';
import { routerModule } from './router/router.module';

export var blocksModule = angular
    .module('blocks',
    [
        exceptionModule.name, 
        loggerModule.name, 
        routerModule.name
    ]);

import {loggerModule} from '../logger/logger.module'
import RouterHelperProvider from './RouterHelperProvider';

export var routerModule = angular
    .module('blocks.router', [
        'ui.router',
        loggerModule.name
    ])
    .provider('routerHelper', RouterHelperProvider);

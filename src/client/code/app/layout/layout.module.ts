/// <reference path="../../../../../typings/tsd.d.ts" />
import {coreModule} from '../core/core.module'
import {htSidebar} from './ht-sidebar.directive'
import {htTopNav} from './ht-top-nav.directive'
import {ShellController} from './ShellController'
import {SidebarController} from './SidebarController'

export var layoutModule = angular
    .module('app.layout', [coreModule.name])    
    .directive('htSidebar', htSidebar)
    .directive('htTopNav', htTopNav)
    .controller('ShellController', ShellController)
    .controller('SidebarController', SidebarController);
    
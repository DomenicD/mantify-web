/// <reference path="../../../../../../typings/tsd.d.ts" />
import ToastrLogger from './ToastrLogger';

export var loggerModule = angular
	.module('blocks.logger', [])
	.service('logger', ToastrLogger);


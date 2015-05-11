import {htImgPerson} from './ht-img-person.directive';
import {htWidgetHeader} from './ht-widget-header.directive';

export var widgetsModule = angular
	.module('app.widgets', [])
	.directive('htImgPerson', htImgPerson)
	.directive('htWidgetHeader', htWidgetHeader);

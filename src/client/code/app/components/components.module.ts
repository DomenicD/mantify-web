import {ModelDetailsController} from './model-details/model-details';
import {ModelListController} from './model-list/model-list';
import {UploadModelController} from './upload-model/upload-model';

export var componentsModule = angular
	.module('app.components', [])
	.controller('ModelDetailsController', ModelDetailsController)
	.controller('ModelListController', ModelListController)
	.controller('UploadModelController', UploadModelController); 
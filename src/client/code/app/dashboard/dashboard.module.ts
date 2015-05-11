import {coreModule} from '../core/core.module';
import DashboardController from './DashboardController';
import {configRoutesFn} from './dashboard.route'
import {widgetsModule} from '../widgets/widgets.module';


angular.module('app.dashboard', [
        coreModule.name,
        widgetsModule.name
    ])
    .controller('DashboardController', DashboardController)
    .run(configRoutesFn);

import { adminModule } from './admin/admin.module';
import { coreModule } from './core/core.module';
import { dashboardModule } from './dashboard/dashboard.module';
import { layoutModule } from './layout/layout.module';
import { widgetsModule } from './widgets/widgets.module';

angular.module('app', [
    adminModule.name,    
    coreModule.name,
    dashboardModule.name,
    layoutModule.name,
    widgetsModule.name
]);

angular.bootstrap(document, ['app']);


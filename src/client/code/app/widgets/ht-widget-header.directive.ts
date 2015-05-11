/* @ngInject */
export function htWidgetHeader() {
    //Usage:
    //<div ht-widget-header title="vm.map.title"></div>
    // Creates:
    // <div ht-widget-header=""
    //      title="Movie"
    //      allow-collapse="true" </div>
    var directive = {
        scope: {
            'title': '@',
            'subtitle': '@',
            'rightText': '@',
            'allowCollapse': '@'
        },
        templateUrl: 'code/app/widgets/widget-header.html',
        restrict: 'EA'
    };
    return directive;
}

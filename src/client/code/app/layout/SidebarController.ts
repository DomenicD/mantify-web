/// <reference path="../../../../../typings/tsd.d.ts" />
export class SidebarController {
    static $inject = ['$state', 'routerHelper'];
    
    public navRoutes;
    public states;
    
    constructor(private $state, private routerHelper) {
        this.states = routerHelper.getStates();

        this.activate();
    }
    
    private activate() { 
        this.getNavRoutes(); 
    }

    private getNavRoutes() {
        this.navRoutes = this.states.filter(function(r) {
            return r.settings && r.settings.nav;
        }).sort(function(r1, r2) {
            return r1.settings.nav - r2.settings.nav;
        });
    }

    public isCurrent(route) {
        if (!route.title || !this.$state.current || 
            !this.$state.current.title) {
            return '';
        }
        var menuName = route.title;
        return this.$state.current.title
            .substr(0, menuName.length) === menuName ? 'current' : '';
    }
}
    
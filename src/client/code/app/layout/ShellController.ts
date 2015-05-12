/// <reference path="../../../../../typings/tsd.d.ts" />
export class ShellController {
    static $inject = ['$rootScope', '$timeout', 'config', 'logger'];
    
    public busyMessage: string;
    public isBusy: boolean;
    public navline;
    
    constructor(private $rootScope, private  $timeout, private  config, 
            private logger) {
        this.busyMessage = 'Please wait ...';
        this.isBusy = true;
        this.$rootScope.showSplash = true;
        this.navline = {
            title: config.appTitle,
            text: 'Created by John Papa',
            link: 'http://twitter.com/john_papa'
        };

        this.activate();
    }
    
    activate() {
        this.logger.success(this.config.appTitle + ' loaded!', null);
        this.hideSplash();
    }

    hideSplash() {
        //Force a 1 second delay so we can see the splash.
        this.$timeout(() => this.$rootScope.showSplash = false, 1000);
    }
} 

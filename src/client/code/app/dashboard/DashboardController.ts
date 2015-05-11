export default class DashboardController {
    static $inject = ['$q', 'dataservice', 'logger'];
    
    public news;
    public messageCount: number;
    public people: any[];
    public title: string;
    constructor(private $q, private dataservice, private  logger) {
        this.news = {
            title: 'orangePortal',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        this.messageCount = 0;
        this.people = [];
        this.title = 'Dashboard';
    }
    
    private activate() {
        var promises = [this.getMessageCount(), this.getPeople()];
        return this.$q.all(promises).then(function() {
            this.logger.info('Activated Dashboard View');
        });
    }

    public getMessageCount() {
        return this.dataservice.getMessageCount().then(function (data) {
            this.messageCount = data;
            return this.messageCount;
        });
    }

    public getPeople() {
        return this.dataservice.getPeople().then(function (data) {
            this.people = data;
            return this.people;
        });
    }
}
    
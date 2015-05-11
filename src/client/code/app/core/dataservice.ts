export default class DataService {
    static $inject = ['$http', '$q', 'logger'];
    constructor(
        private $http, 
        private $q, 
        private logger) { }

    public getMessageCount() { 
        return this.$q.when(72); 
    }

    public getPeople() {
        return this.$http.get('/api/people')
            .then(this.success.bind(this))
            .catch(this.fail.bind(this));
    }

    private success(response) {
        return response.data;
    }

    private fail(error) {
        var msg = 'query for people failed. ' + error.data.description;
        this.logger.error(msg);
        return this.$q.reject(msg);
    }

}

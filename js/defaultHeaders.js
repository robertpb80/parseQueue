var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {'X-Parse-Application-Id': 'KVv8SrDQq2cYrkgmbls6A2B9giEnptZf0L3sa7d6', 'X-Parse-REST-API-Key': 'QWH40qfheRaCbcCZPZgn8HHzpaa1auHZlnkQy1x9'};
            return config;
        }
    };
});
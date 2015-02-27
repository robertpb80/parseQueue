var app = angular.module('parseQ');

app.service("parseService", function($http, $q) {

	this.postQuestion = function(question) {
		var deferred = $q.defer()
		$http({
			method: "POST",
			url: "https://api.parse.com/1/classes/questions",
			data: {
				text: question,
				status: "red"
			}
		}).then(function(res) {
			deferred.resolve(res.data);
		})
			return deferred.promise;
	};

	this.getData = function() {
		var deferred = $q.defer()
		$http({
			method: "GET",
			url: "https://api.parse.com/1/classes/questions"
		}).then(function(res) {
				deferred.resolve(res.data.results);
			})
				return deferred.promise;
	};

	this.updateQuestion = function(objectid) {
		var deferred = $q.defer()
		$http({
			method: "PUT",
			url: "https://api.parse.com/1/classes/questions/" + objectid,
			data: {
				status: "yellow"
			}
		}).then(function(res) {
			deferred.resolve(res);
		})
			return deferred.promise;
	};

	this.deleteData = function(objectid) {
		var deferred = $q.defer()
		$http({
			method: "DELETE",
			url: "https://api.parse.com/1/classes/questions" + objectid
		}).then(function(res) {
				deferred.resolve(res.data.results);
			})
				return deferred.promise;
	};

});
var app = angular.module('parseQ');

app.controller("mainController", function($scope, parseService) {

	$scope.postData = function(question) {
		parseService.postQuestion($scope.queueQuestion).then(function() {
			$scope.QueueQuestion = "";

			$scope.getParseData();
		})
	}
	$scope.getParseData = function() {
		parseService.getData().then(function(data) {
			$scope.questions = data;
			console.log(data)
		})
	}

	$scope.changeStatus = function(objectid) {
		parseService.updateQuestion(objectid).then(function() {
			$scope.getParseData();
		})
	}

	$scope.delete = function(objectid) {
		parseService.deleteData(objectid).then(function() {
			
	}
	$scope.getParseData();
})
var app = angular.module("fullStackApp");

app.controller("fullStack", ["$scope", "MyService", function ($scope,MyService) {
	$scope.appList=MyService.appList;
	MyService.getApp().then(function(data){
		$scope.appList= data;
	});
	$scope.addApp=function(newApp){
		MyService.addApp(newApp)
	}
	
	var votes = [
		{
			Likes: "0",
			Dislikes: "0"
		}
	];
	$scope.votes = votes;

	$scope.incrementLikes = function (vote) {
		vote.Likes++;
	}
	$scope.incrementDislikes = function (vote) {
		vote.Dislikes++;
	}
}]);
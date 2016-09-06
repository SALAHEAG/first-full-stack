var app = angular.module("fullStackApp");

app.service("MyService", ["$http", function ($http) {
	this.appList=[];
	this.getApp = function () {
		return $http.get("/api/fsp").then(function(response){
			this.appList =response.data;
			return response.data;
		});
	}
	this.addApp=function(newApp){
		return $http.post("/api/fsp",newApp).then(function(response){
			this.appList.push(response.data)
		})
	}
}]);
var app = angular.module("fullStackApp", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {

	$routeProvider

		.when("/", {
		templateUrl: "components/info/info.html",
		controller: "fullStack"
	});
}]);
var app = angular.module('favoriteBlogs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/main', {
		title: 'Home',
		templateUrl: 'main.html',
		controller: 'MainCtrl'

	})
	.when('/about', {
		title: 'About',
		templateUrl: 'about.html',
		controller: 'MainCtrl'
	})
	.otherwise({redirectTo: '/main'});
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('blogs.json').success(function(data){
		$scope.blogs = data; 
	});
}])

.run(['$rootScope', '$route', function($rootScope, $route){ 
	$rootScope.$on('$routeChangeSuccess', function(){
		document.title = $route.current.title;
	});
}]);
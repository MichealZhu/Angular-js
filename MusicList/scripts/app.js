console.log(123);
var Music = angular.module('Music', ['ngRoute']);
Music.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/:id', {
            templateUrl: './views/list.html',
            controller: 'MusicController'
            // template: '<li>index Pages!</li>'
        })
        .otherwise({
            redirectTo: '/1'
        });

}]);
Music.controller('MusicController', ['$scope', '$http', '$routeParams', function ($scope , $http, $routeParams) {
	var id = $routeParams.id;
	// console.log(123);
    $http({
        url: './api/list.php', // 请求地址，解决跨域问题
        method: 'get',
        params: {type:id}
    }).success(function (info) {
    	console.log(info);
        $scope.lists = info;
    });
}])
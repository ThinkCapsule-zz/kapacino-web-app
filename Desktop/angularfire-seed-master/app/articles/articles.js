"use strict";
angular.module('myApp.articles', ['firebase.utils', 'firebase.auth', 'ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/articles', {
      controller: 'ArticlesCtrl',
      templateUrl: 'articles/articles.html'
    });
  }])

  .controller('ArticlesCtrl', ['$scope', 'Auth', '$location', 'fbutil', function($scope, Auth, $location, fbutil) {

  }]);
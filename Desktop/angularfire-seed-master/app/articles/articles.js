"use strict";
angular.module('myApp.articles', ['firebase.utils', 'firebase.auth', 'ngRoute','contentful'])
  //https://docs.angularjs.org/tutorial/step_07
  .config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
      when('/articles', {
	      controller: 'ArticlesCtrl',
	      templateUrl: 'articles/articles.html'
	    }).
      when('/article', {
        controller: 'ArticleCtrl',
        templateUrl: 'articles/article.html'
      });
 	}])
  .config(function(contentfulProvider) {
	    contentfulProvider.setOptions({
	        space: '1oq1lgnwupsh',
	        accessToken: '9e202ccaa19212267e8a417356d41277c51ea827b2a1122c00f8f3ea0c25dfe3'
	    });
 	})
  .controller('ArticlesCtrl', ['$scope', 'Auth', '$location', 'fbutil', function($scope, Auth, $location, fbutil, contentful) {


  }])
  .controller('ArticleCtrl', ['$scope', 'commentList', function($scope, commentList) {
      $scope.comments = commentList;
      $scope.addComment = function(newComment) {
        if( newComment ) {
          $scope.comments.$add({text: newComment});
        }
      };
    }])
  .factory('commentList', ['fbutil', '$firebaseArray', function(fbutil, $firebaseArray) {
    var ref = fbutil.ref('comments').limitToLast(10);
    return $firebaseArray(ref);
  }]);
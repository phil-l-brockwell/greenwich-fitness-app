var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('reviews', {
      url: '/reviews',
      templateUrl: '/reviews.html',
      controller: 'MainCtrl'
    })
    .state('consultancy', {
      url: '/consultancy',
      templateUrl: '/consultancy.html',
      controller: 'MainCtrl'
    })
    .state('equiptment', {
      url: '/equiptment',
      templateUrl: '/equiptment.html',
      controller: 'MainCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/contact.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');

});

app.factory('posts', function() {
  var o = { posts: [{title: 'post 1', upvotes: 5},
                    {title: 'post 2', upvotes: 2},
                    {title: 'post 3', upvotes: 15},
                    {title: 'post 4', upvotes: 9},
                    {title: 'post 5', upvotes: 4}
                    ] };
  return o;
});

app.controller('MainCtrl', function($scope, posts) {

  $scope.posts = posts.posts

  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') return;
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

});

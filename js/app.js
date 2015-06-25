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
      controller: 'ReviewsCtrl'
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

app.factory('reviews', function() {
  var o = { reviews: [{text: 'review 1', name: 'A Smith', votes: 0 },
                      {text: 'review 2', name: 'A Smith', votes: 0 },
                      {text: 'review 3', name: 'A Smith', votes: 0 },
                      {text: 'review 4', name: 'A Smith', votes: 0 },
                      {text: 'review 5', name: 'A Smith', votes: 0 }
                    ] };
  return o;
});

app.controller('MainCtrl', function($scope) {

})

app.controller('ReviewsCtrl', function($scope, reviews) {

  $scope.reviews = reviews.reviews

  $scope.addReview = function() {
    if(!$scope.text || $scope.text === '') return;
    $scope.reviews.push({
      text: $scope.text,
      name: $scope.name,
      date: new Date().toUTCString(),
      votes: 0
    });
    $scope.text = '';
    $scope.name = '';
  };

  $scope.upvote = function(review) {
    review.votes += 1;
  };

  $scope.downvote = function(review) {
    review.votes -= 1;
  };
});

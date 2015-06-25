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

app.factory('reviews', function() {
  var o = { reviews: [{text: 'review 1' },
                      {text: 'review 2' },
                      {text: 'review 3' },
                      {text: 'review 4' },
                      {text: 'review 5' }
                    ] };
  return o;
});

app.controller('MainCtrl', function($scope, reviews) {

  $scope.reviews = reviews.reviews

  $scope.addReview = function() {
    if(!$scope.text || $scope.text === '') return;
    $scope.reviews.push({
      text: $scope.text
    });
    $scope.text = '';
  };

});

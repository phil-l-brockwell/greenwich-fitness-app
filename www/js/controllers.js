angular.module('greenwichFitness.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('ConsultantsCtrl', function($scope, Consultants) {
  $scope.consultants = Consultants.consultants;
})

.controller('ContactCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {

  $scope.notifications = false;

  $scope.toggle = function() {
    if ($scope.notifications == false) $scope.notifications = true;
    else $scope.notifications = false;
    console.log($scope.notifications)
  }

})

.controller('EquiptmentCtrl', function($scope, Equiptment) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.items = Equiptment.items;
})

.controller('EquiptmentDetailCtrl', function($scope, $stateParams, Equiptment) {
  $scope.item = Equiptment.get($stateParams.equiptmentId);
})

.controller('ReviewsCtrl', function($scope, Reviews) {

  $scope.upvote = function(review) {
    Reviews.upvote(review);
  };

  $scope.downvote = function(review) {
    Reviews.downvote(review);
  };

  $scope.post = function(text, author) {
    if (text == '' || text == null || author == '' || author == null) {
      alert('Please enter your review and name!')
      return;
    }
    var newReview = { text: text, author: author, votes: 0, date: new Date().toUTCString() };
    Reviews.create(newReview);
  };

  $scope.reviews = Reviews.reviews;
});

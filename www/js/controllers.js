angular.module('greenwichFitness.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('ConsultancyCtrl', function($scope) {})

.controller('ContactCtrl', function($scope) {})

.controller('EquiptmentCtrl', function($scope, Equiptment) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Equiptment.all();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Consultants) {
  $scope.chat = Consultants.get($stateParams.chatId);
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

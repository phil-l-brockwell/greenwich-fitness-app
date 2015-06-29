angular.module('greenwichFitness.controllers', [])

.controller('HomeCtrl', function($scope, Settings, $ionicSlideBoxDelegate) {
  
  setInterval(transistion, 5000);
  $scope.settings = Settings;
  
  function transistion() {
    if (hasSlideShowEnded()) $ionicSlideBoxDelegate.slide(0);
    else $ionicSlideBoxDelegate.next();
  };

  function hasSlideShowEnded() {
    return $ionicSlideBoxDelegate.currentIndex() + 1 === $ionicSlideBoxDelegate.slidesCount();
  };

})

.controller('ConsultantsCtrl', function($scope, Consultants) {
  $scope.consultants = Consultants.consultants;
})

.controller('ContactCtrl', function($scope, $ionicLoading) {

  $scope.navigateTo = function(link) {
    window.open(link, '_system', 'location=yes');
    return false;
  };

  $scope.$on('$ionicView.enter', function() {
    var gsomCoords = new google.maps.LatLng(51.477593,-0.010291);

    var mapOptions = {
      center: gsomCoords,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: gsomCoords,
      map: $scope.map,
      animation: google.maps.Animation.DROP
    });
  });
})

.controller('SettingsCtrl', function($scope, Settings) {

  $scope.notifications = Settings.notifications;

  $scope.toggle = function() {
    if (Settings.notifications == false) Settings.switchOnNotifications();
    else Settings.switchOffNotifications();
    $scope.notifications = Settings.notifications;
  };
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
      alert('Please enter your review and name!');
    } else {
      var newReview = { text: text, author: author, votes: 0, date: new Date().toUTCString() };
      Reviews.create(newReview);
    };
  };

  $scope.reviews = Reviews.reviews;
});

angular.module('greenwichFitness.controllers', [])

.controller('HomeCtrl', function($scope, Settings, $ionicSlideBoxDelegate, Home) {
  
  setInterval(transistion, 5000);
  $scope.settings = Settings;
  $scope.slides = Home.slides;

  $scope.timeRemaining = function() {
    return Math.floor(Settings.seconds / 3600);
  };

  $scope.resetTimer = function() {
    Settings.updateSeconds();
  };  

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

  $scope.large = Settings.large;
  $scope.notifications = Settings.notifications;

  $scope.largerText = function() {
    if (Settings.large == true) Settings.switchOffLargeText();
    else Settings.switchOnLargeText();
    $scope.large = Settings.large;
  };

  $scope.toggle = function() {
    if (Settings.notifications) Settings.switchOffNotifications();
    else Settings.switchOnNotifications();
    $scope.notifications = Settings.notifications;
  };

  $scope.updateFrequency = function(newFrequency) {
    Settings.changeFrequency(newFrequency);
  };  
})

.controller('EquiptmentCtrl', function($scope, Equiptment) {
  $scope.items = Equiptment.items;
})

.controller('EquiptmentDetailCtrl', function($scope, $stateParams, Equiptment) {
  $scope.item = Equiptment.get($stateParams.equiptmentId);
})

.controller('ReviewsCtrl', function($scope, Reviews) {

  $scope.refresh = function() {
    Reviews.getAll().success(function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.upvote = function(review) {
    Reviews.upvote(review);
  };

  $scope.downvote = function(review) {
    Reviews.downvote(review);
  };

  $scope.post = function(text, author) {
    if (text == '' || !text || author == '' || !author) {
      return alert('Please enter your review and name!');
    };
    var date = new Date().toUTCString();
    var newReview = { text: text, author: author, votes: 0, date: date };
    Reviews.create(newReview);
  };

  $scope.reviews = Reviews.reviews.reverse();
});

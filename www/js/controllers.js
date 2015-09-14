angular.module('greenwichFitness.controllers', [])

// definition of home controller
// injects settings service, home service for variables
// injects ionicslideboxdelegate for slideshow functionality
// injects ionicpopup for pop up box functionality
// injects scope to share variables with html views, 
// any methods or variables prefixed with scope can be accessed within the view
.controller('HomeCtrl', function($scope, Settings, $ionicSlideBoxDelegate, Home, $ionicPopup, $interval) {
  
  //sets an interval to transition the slideshow
  $interval(transistion, 5000);
  //makes settings available to view
  $scope.settings = Settings;
  // makes slide available to view
  $scope.slides = Home.slides;

  // method that returns a time object to output into view
  $scope.timeRemaining = function() {
    return { hours: Math.floor(Settings.seconds / 3600),
             minutes: Math.floor((Settings.seconds % 3600) / 60),
             seconds: (Settings.seconds % 3600) % 60              }
  };

  // method to reset the timer and alert the user
  $scope.resetTimer = function() {
    Settings.startClock();
    $ionicPopup.alert({
      title: 'Timer Reset',
      template: 'We hope you enjoy your visit!'
    })  
  };  

  // method to transistion or restart slider
  function transistion() {
    if (hasSlideShowEnded()) $ionicSlideBoxDelegate.slide(0);
    else $ionicSlideBoxDelegate.next();
  };

  // method to check if slideshow has ended
  function hasSlideShowEnded() {
    return $ionicSlideBoxDelegate.currentIndex() + 1 === $ionicSlideBoxDelegate.slidesCount();
  };
})

// definition of consultants controller
// injects scope
// injects consultants and settings services
.controller('ConsultantsCtrl', function($scope, Consultants, Settings) {
  // makes consultants available to view
  $scope.consultants = Consultants.consultants;
  // makes settings available to view
  $scope.settings = Settings;
})

// definition of contact controller
// injects scope
// injects ionicloading to show loading animations
.controller('ContactCtrl', function($scope, $ionicLoading) {

  // method to open an external browser window from the device, to load social media links
  $scope.navigateTo = function(link) {
    window.open(link, '_system', 'location=yes');
    return false;
  };

  // method that gets called when the view is entered
  // renders a google map and drops a marker on the given coords
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

// definition of settings controller
// injects scope
// inject settings service
.controller('SettingsCtrl', function($scope, Settings) {

  // makes settings available to view
  $scope.settings = Settings;
  $scope.notifications = Settings.notifications;

  // method to toggle view inversion
  $scope.toggleInvert = function() {
    if (Settings.inverted) Settings.exvert();
    else Settings.invert();
  };

  // method to toggle timer on/off
  $scope.toggleTimer = function() {
    if (Settings.notifications) Settings.switchOffNotifications();
    else Settings.switchOnNotifications();
    $scope.notifications = Settings.notifications;
  };

  // method to change the frequency of the timer
  $scope.updateFrequency = function(newFrequency) {
    Settings.changeFrequency(newFrequency);
  };  
})

// definition of equipment controller
// injects scope
// injects equipment service
.controller('EquiptmentCtrl', function($scope, Equiptment) {
  // makes items available to view
  $scope.items = Equiptment.items;
})

// definition of equipment detail controller
// injects scope
// injects stateparams to access item id from params
// injects equipment service
.controller('EquiptmentDetailCtrl', function($scope, $stateParams, Equiptment) {
  // makes selected item available to the view
  $scope.item = Equiptment.get($stateParams.equiptmentId);
})

// definition of review controller
// injects scope
// injects scope
// injects ionicpopup for message boxes
.controller('ReviewsCtrl', function($scope, Reviews, $ionicPopup) {

  // method to refresh when pull down to refresh is called
  $scope.refresh = function() {
    // gets reviews and when successful, tells the app to stop loading with broadcast
    Reviews.getAll().success(function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  // method to post new review
  $scope.post = function(text, author) {
    // condition to check if all input is entered
    // if false returns message box
    if (text == '' || !text || author == '' || !author) {
      return $ionicPopup.alert({
        title: 'Oops, you forgot something...',
        template: 'Please enter your review and name!'
      });
    };
    // if true, generates timestamp
    var date = new Date().toUTCString();
    // generates review object
    var newReview = { text: text, author: author, date: date };
    // add review to service and when successful returns message box
    Reviews.create(newReview).success(function() {
      $ionicPopup.alert({
        title: 'Review Successfully Posted!',
        template: 'Thanks for your feedback.'
      });
    });
  };

  // makes reviews accessible to html
  $scope.reviews = Reviews.reviews;
});

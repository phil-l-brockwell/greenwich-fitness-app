angular.module('greenwichFitness.services', [])

// settings service, injects ionicloading for animations whilst making http requests
.factory('Settings', function($ionicLoading) {

  // defines stop variable used to hold a promise for setinterval method
  var stop;
  // defines seconds in a day
  var SECONDSINDAY = 86400;
  // defines the default style sheet
  var defaultStyle = 'ionic.css';
  // defines the alternate style sheet
  var invertStyle  = 'ionic-invert.app.css';

  // object containing the available frequencies
  var frequencies = { 'Daily': SECONDSINDAY, 
                      'Every other day': SECONDSINDAY * 2, 
                      'Every Three days': SECONDSINDAY * 3, 
                      'Every Four days': SECONDSINDAY * 4, 
                      'Weekly': SECONDSINDAY * 7, 
                      'Fortnightly': SECONDSINDAY * 14 };

  // object that will get returned when the service is called
  // these are the variable that will be used in the controller and the view
  var o = { notifications: false, frequency: 'Daily', style: defaultStyle, inverted: false };

  // method to change frequency
  o.changeFrequency = function(newFrequency) {
    o.frequency = newFrequency;
    o.startClock();
  };

  // method to start clock, clears interval using the stop promise
  // and starts a new timer, updating the stop variable
  o.startClock = function() {
    clearInterval(stop);
    o.seconds = frequencies[o.frequency];
    stop = setInterval(o.deductSecond, 1000);
  };

  // method to deduct a second
  o.deductSecond = function() {
    o.seconds -= 1;
  };

  // method to switch on timer, clock is automatically started
  o.switchOnNotifications = function() {
    o.notifications = true;
    o.startClock();
  };

  // method to switch off timer, clock is automatically stopped
  o.switchOffNotifications = function() {
    o.notifications = false;
    clearInterval(stop);
  };

  // method to change style sheet to inverse
  // shows a loading screen
  // which is not required but is similar to what is found in a native app
  o.invert = function() {
    $ionicLoading.show({
      duration: 2000
    });
    o.style = invertStyle;
    o.inverted = true;
  };

  // method to change style sheet to default
  o.exvert = function() {
    $ionicLoading.show({
      duration: 2000
    });
    o.style = defaultStyle;
    o.inverted = false;
  };

  // returns the o object for consumption by controller/view
  return o;
})

// consultants factory
// injects http for http requests
// injects ionic loading for loading screen
.factory('Consultants', function($http, $ionicLoading) {

  // defines object to store consultants
  var o = { consultants: [] };

  // method to make get request to api and get all consultants
  o.getAll = function() {
    // loading screen switched on
    $ionicLoading.show();
    return $http.get('http://greenwich-fitness-api.herokuapp.com/api/consultants').success(function(data) {
      // on success a copy of the data is made and loading screen is switched off
      angular.copy(data, o.consultants);
      $ionicLoading.hide();
    })
  };

  // returns object for consumption by controller/view
  return o;
})

// home service
.factory('Home', function() {
  
  // stores slides so that a loop can be used in the view to load them dynamically
  // as opposed to repeating the same html 8 times
  var o = { slides: [{ src: 'img/slideshow1.jpg', a: '#/tab/home',        alt: 'Welcome to the Greenwich School of Fitness'       },
                     { src: 'img/slideshow2.jpg', a: '#/tab/home',        alt: 'Making you Fit'                                   },
                     { src: 'img/slideshow3.jpg', a: '#/tab/consultants', alt: 'Meet our Team of Expert Consultants'              },
                     { src: 'img/slideshow4.jpg', a: '#/tab/equiptment',  alt: 'And their vast array of Equipment'                },
                     { src: 'img/slideshow5.jpg', a: '#/tab/reviews',     alt: 'Leave us a review'                                },
                     { src: 'img/slideshow6.jpg', a: '#/tab/contact',     alt: 'Get in Touch today for your FREE trial.'          },
                     { src: 'img/slideshow7.jpg', a: '#/tab/settings',    alt: 'Set a Timer for your next visit, to make sure...' },
                     { src: 'img/slideshow8.jpg', a: '#/tab/home',        alt: "You'll be back..."                                }] };

  // returns the o object for consumption by the views/controller
  return o;
})

// reviews service
// injects http for http requests
// injects ionicloading for loading animations
.factory('Reviews', function($http, $ionicLoading) {

  // defines object to store reviews
  var o = { reviews: [] };

  // function to get all reviews from api with get request
  o.getAll = function() {
    // show loading screen
    $ionicLoading.show();
    return $http.get('http://greenwich-fitness-api.herokuapp.com/api/reviews').success(function(data) {
      // on success makes copy of data and hides loading screen
      angular.copy(data.reverse(), o.reviews)
      $ionicLoading.hide();
    })
  };

  // function to make post request with new review to api
  o.create = function(review) {
    return $http.post('http://greenwich-fitness-api.herokuapp.com/api/reviews', review).success(function(data) {
      // after the review is added to the api, it is also added to the services o object
      // this is angulars two way binding and allows an instant update in the view
      o.reviews.unshift(review);
    })
  };

  // returns object for consumption by controller/view
  return o;
})

// equipment service
// injects http for http requests
// injects ionic loading for loading screen
.factory('Equiptment', function($http, $ionicLoading) {

  // defines object to store items
  var o = { items: [] };

  // method to get all items from api with get request
  o.getAll = function() {
    // shows loading screen
    $ionicLoading.show();
    return $http.get('http://greenwich-fitness-api.herokuapp.com/api/items').success(function(data) {
      // on success copies data and hides loading screen
      angular.copy(data, o.items)
      $ionicLoading.hide();
    })
  };

  // method that takes an item id and returns null if the item does not exist
  // or the item if it does exist
  o.get = function(itemId) {
    for (var i = 0; i <= o.items.length; i++) {
      if (o.items[i].id === parseInt(itemId)) return o.items[i];
    };
    return null;
  };

  // returns object for consumption by controller/view
  return o;
});

angular.module('greenwichFitness.services', [])

.factory('Settings', function($ionicLoading) {

  var stop;
  var SECONDSINDAY = 86400;
  var defaultStyle = 'ionic.css';
  var invertStyle  = 'ionic-invert.app.css';

  var frequencies = { 'Daily': SECONDSINDAY, 
                      'Every other day': SECONDSINDAY * 2, 
                      'Every Three days': SECONDSINDAY * 3, 
                      'Every Four days': SECONDSINDAY * 4, 
                      'Weekly': SECONDSINDAY * 7, 
                      'Fortnightly': SECONDSINDAY * 14 };

  var o = { notifications: false, frequency: 'Daily', style: defaultStyle, inverted: false };

  o.changeFrequency = function(newFrequency) {
    o.frequency = newFrequency;
    o.startClock();
  };

  o.startClock = function() {
    clearInterval(stop);
    o.seconds = frequencies[o.frequency];
    stop = setInterval(o.deductSecond, 1000);
  };

  o.deductSecond = function() {
    o.seconds -= 1;
  };

  o.switchOnNotifications = function() {
    o.notifications = true;
    o.startClock();
  };

  o.switchOffNotifications = function() {
    o.notifications = false;
    clearInterval(stop);
  };

  o.invert = function() {
    $ionicLoading.show({
      duration: 2000
    });
    o.style = invertStyle;
    o.inverted = true;
  };

  o.exvert = function() {
    $ionicLoading.show({
      duration: 2000
    });
    o.style = defaultStyle;
    o.inverted = false;
  };

  return o;
})

.factory('Consultants', function($http, $ionicLoading) {

  var o = { consultants: [] };

  o.getAll = function() {
    $ionicLoading.show();
    return $http.get('http://greenwich-fitness-api.herokuapp.com/api/consultants').success(function(data) {
      angular.copy(data, o.consultants);
      $ionicLoading.hide();
    })
  };

  return o;
})

.factory('Home', function() {
      
  var o = { slides: [{ src: 'img/slideshow1.jpg', a: '#/tab/home',        alt: 'Welcome to the Greenwich School of Fitness'       },
                     { src: 'img/slideshow2.jpg', a: '#/tab/home',        alt: 'Making you Fit'                                   },
                     { src: 'img/slideshow3.jpg', a: '#/tab/consultants', alt: 'Meet our Team of Expert Consultants'              },
                     { src: 'img/slideshow4.jpg', a: '#/tab/equiptment',  alt: 'And their vast array of Equipment'                },
                     { src: 'img/slideshow5.jpg', a: '#/tab/reviews',     alt: 'Leave us a review'                                },
                     { src: 'img/slideshow6.jpg', a: '#/tab/contact',     alt: 'Get in Touch today for your FREE trial.'          },
                     { src: 'img/slideshow7.jpg', a: '#/tab/settings',    alt: 'Set a Timer for your next visit, to make sure...' },
                     { src: 'img/slideshow8.jpg', a: '#/tab/home',        alt: "You'll be back..."                                }] };

  return o;
})

.factory('Reviews', function($http, $ionicLoading) {

  var o = { reviews: [] };

  o.getAll = function() {
    $ionicLoading.show();
    return $http.get('http://greenwich-fitness-api.herokuapp.com/api/reviews').success(function(data) {
      angular.copy(data, o.reviews)
      $ionicLoading.hide();
    })
  };

  o.create = function(review) {
    return $http.post('http://greenwich-fitness-api.herokuapp.com/api/reviews', review).success(function(data) {
      o.reviews.unshift(review);
    })
  };

  o.upvote = function(review) {
    review.votes += 1;
  };

  o.downvote = function(review) {
    review.votes -= 1;
  };

  return o;
})

.factory('Equiptment', function($http, $ionicLoading) {

  var o = { items: [] };

  o.getAll = function() {
    $ionicLoading.show();
    return $http.get('http://greenwich-fitness-api.herokuapp.com/api/items').success(function(data) {
      angular.copy(data, o.items)
      $ionicLoading.hide();
    })
  };

  o.get = function(itemId) {
    for (var i = 0; i <= o.items.length; i++) {
      if (o.items[i].id === parseInt(itemId)) return o.items[i];
    };
    return null;
  };

  return o;
});

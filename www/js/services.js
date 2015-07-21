angular.module('greenwichFitness.services', [])

.factory('Settings', function() {

  var stop;
  var SECONDSINDAY = 86400;
  var defaultStyle = 'lib/ionic/css/ionic.css';

  var styles = { 'Plain': defaultStyle,
                 'Larger Text': 'lib/ionic/css/ionic-large.app.css',
                 'Inverted Colours': 'lib/ionic/css/ionic-invert.app.css' }

  var frequencies = { 'Daily': SECONDSINDAY, 
                      'Every other day': SECONDSINDAY * 2, 
                      'Every Three days': SECONDSINDAY * 3, 
                      'Every Four days': SECONDSINDAY * 4, 
                      'Weekly': SECONDSINDAY * 7, 
                      'Fortnightly': SECONDSINDAY * 14 };

  var o = { notifications: false, frequency: 'Daily', style: defaultStyle };

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

  o.changeView = function(newView) {
    o.style = styles[newView];
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

  var o = { slides: [{ src: 'img/slideshow1.jpg', alt: 'Welcome to the Greenwich School of Fitness' },
                     { src: 'img/slideshow2.jpg', alt: 'Making you Fit'                             },
                     { src: 'img/slideshow3.jpg', alt: 'Meet our Team of Expert Consultants'        },
                     { src: 'img/slideshow4.jpg', alt: 'And their vast array of Equipment'          },
                     { src: 'img/slideshow5.jpg', alt: 'So get in touch Today for your FREE trial'  },
                     { src: 'img/slideshow6.jpg', alt: "And we're confident you'll be back."        }] };

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

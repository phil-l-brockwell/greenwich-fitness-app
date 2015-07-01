angular.module('greenwichFitness.services', [])

.factory('Settings', function() {

  var stop;
  var SECONDSINDAY = 86400;

  var frequencies = { 'Daily': SECONDSINDAY, 
                      'Every other day': SECONDSINDAY * 2, 
                      'Every Three days': SECONDSINDAY * 3, 
                      'Every Four days': SECONDSINDAY * 4, 
                      'Weekly': SECONDSINDAY * 7, 
                      'Fortnightly': SECONDSINDAY * 14 };

  var o = { notifications: false, frequency: 'Daily', large: false };

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

  return o;
})

.factory('Consultants', function($http) {

  var o = { consultants: [] };

  o.getAll = function() {
    return $http.get('http://ancient-fortress-6314.herokuapp.com/api/consultants').success(function(data) {
      angular.copy(data, o.consultants);
    })
  };

  return o;
})

.factory('Reviews', function($http) {

  var o = { reviews: [] };

  o.getAll = function() {
    return $http.get('http://ancient-fortress-6314.herokuapp.com/api/reviews').success(function(data) {
      angular.copy(data, o.reviews)
    })
  };

  o.create = function(review) {
    return $http.post('http://ancient-fortress-6314.herokuapp.com/api/reviews', review).success(function(data) {
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

.factory('Equiptment', function($http) {

  var o = { items: [] };

  o.getAll = function() {
    return $http.get('http://ancient-fortress-6314.herokuapp.com/api/items').success(function(data) {
      angular.copy(data, o.items)
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

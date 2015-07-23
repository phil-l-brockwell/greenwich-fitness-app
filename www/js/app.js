// angular.module is the skeleton of the app
// greenwichFitness is the name of the app and the 2nd parameter is an array of 'requires'
// controllers are used to carry out javascript functionality
// each page is assigned a controller, and its methods exclusive to that page
// services are used to store variables which can be shared amoung controllers

angular.module('greenwichFitness', ['ionic', 'greenwichFitness.controllers', 'greenwichFitness.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // A state has a url, a template and a controller
  // when a state is selected, the view is rendered and the controllers methods and services become available to it
  // Although each state will have a different view, the application is single page

  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  //set up a state for each page of the application
  .state('tab.home', {
    // the route to access this state
    url: '/home',
    views: {
      'tab-home': {
        // the template to render when this state is accessed
        templateUrl: 'templates/tab-home.html',
        // the controller assigned to this state
        controller: 'HomeCtrl'
      }
    }
  })
  .state('tab.equiptment', {
      url: '/equiptment',
      views: {
        'tab-equiptment': {
          templateUrl: 'templates/tab-equiptment.html',
          controller: 'EquiptmentCtrl',
          // resolve takes a method and calls it when the state is accessed,
          // the state will not render until the method has returned its promise,
          // this ensures pages are not loaded without all data present
          resolve: {
            equiptmentPromise: function(Equiptment) {
              return Equiptment.getAll();
            }
          }
        }
      }
    })
  .state('tab.equiptment-detail', {
    url: '/equiptment/:equiptmentId',
    views: {
      'tab-equiptment': {
        templateUrl: 'templates/equiptment-detail.html',
        controller: 'EquiptmentDetailCtrl',
        resolve: {
          equiptmentPromise: function(Equiptment) {
            return Equiptment.getAll();
          }
        }
      }
    }
  })
  .state('tab.reviews', {
    url: '/reviews',
    views: {
      'tab-reviews': {
        templateUrl: 'templates/tab-reviews.html',
        controller: 'ReviewsCtrl',
        resolve: {
          reviewsPromise: function(Reviews) {
            return Reviews.getAll();
          }
        }
      }
    }
  })
  .state('tab.consultants', {
    url: '/consultants',
    views: {
      'tab-consultants': {
        templateUrl: 'templates/tab-consultants.html',
        controller: 'ConsultantsCtrl',
        resolve: {
          consultantsPromise: function(Consultants) {
            return Consultants.getAll();
          }
        }
      }
    }
  })
  .state('tab.contact', {
    url: '/contact',
    views: {
      'tab-contact': {
        templateUrl: 'templates/tab-contact.html',
        controller: 'ContactCtrl'
      }
    }
  })
  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  // load this initially or if an unrecognised state is entered
  $urlRouterProvider.otherwise('/tab/home');
});

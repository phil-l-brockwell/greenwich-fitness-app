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

  $stateProvider

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('tab.equiptment', {
      url: '/equiptment',
      views: {
        'tab-equiptment': {
          templateUrl: 'templates/tab-equiptment.html',
          controller: 'EquiptmentCtrl'
        }
      }
    })
  .state('tab.equiptment-detail', {
    url: '/equiptment/:equiptmentId',
    views: {
      'tab-equiptment': {
        templateUrl: 'templates/equiptment-detail.html',
        controller: 'EquiptmentDetailCtrl'
      }
    }
  })
  .state('tab.reviews', {
    url: '/reviews',
    views: {
      'tab-reviews': {
        templateUrl: 'templates/tab-reviews.html',
        controller: 'ReviewsCtrl'
      }
    }
  })
  .state('tab.consultants', {
    url: '/consultants',
    views: {
      'tab-consultants': {
        templateUrl: 'templates/tab-consultants.html',
        controller: 'ConsultantsCtrl'
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

  $urlRouterProvider.otherwise('/tab/home');
});

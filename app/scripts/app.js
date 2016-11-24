'use strict';

angular.module('asmithdigitalApp', ['ui.router', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider

    // route for the home page
      .state('app', {
        url:'/',
        views: {
          'header': {
            templateUrl : 'views/header.html'
          },
          'content': {
            templateUrl : 'views/home.html',
            controller  : 'IndexController'
          },
          'footer': {
            templateUrl : 'views/footer.html'
          }
        }

      })

      // route for the aboutus page
      .state('app.aboutus', {
        url:'aboutus',
        views: {
          'content@': {
            templateUrl : 'views/aboutus.html',
            controller  : 'AboutController'
          }
        }
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
    
  })
;

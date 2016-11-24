'use strict';

angular.module('asmithdigitalApp', ['ui.router', 'ngResource', 'firebase', 'ngMaterial'])
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
      })

      // route for the aboutus page
      .state('app.create', {
        url:'create',
        views: {
          'content@': {
            templateUrl : 'views/create.html',
            controller  : 'CreateController'
          }
        }
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    var config = {
      apiKey: "AIzaSyB09cIBjkTTj1eY-xBnS-nkKKjfMzNHPbs",
      authDomain: "asmithdigital-67949.firebaseapp.com",
      databaseURL: "https://asmithdigital-67949.firebaseio.com",
      storageBucket: "asmithdigital-67949.appspot.com",
      messagingSenderId: "641452325318"
    };
    firebase.initializeApp(config);


  })
;
'use strict';

angular.module('asmithdigitalApp')

  .controller('IndexController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

    var ref = firebase.database().ref().child('messages');
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);
      // add new items to the array
      // the message is automatically added to our Firebase database!
      $scope.addMessage = function() {
        $scope.messages.$add({
          text: $scope.newMessageText
        });
      };

  }])

  .controller('AboutController', ['$scope', function($scope) {

  }])

  .controller('CreateController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

    var ref = firebase.database().ref().child('portfolios');
    // create a synchronized array
    $scope.portfolios = $firebaseArray(ref);
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addPortfolio = function() {
      $scope.portfolios.$add({
        name: $scope.newPortfolioName,
        description: $scope.newPortfolioDescription
      });
    };

  }])

  .controller('HeaderController', ['$scope', function($scope) {
    $scope.isOpen = false;

    $scope.demo = {
      isOpen: false,
      count: 0,
      selectedDirection: 'left'
    };

    console.log($scope);

  }])

;



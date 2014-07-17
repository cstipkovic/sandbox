'use strict';

/**
 * @ngdoc function
 * @name cp01App.controller:HelloCtrl
 * @description
 * # HelloCtrl
 * Controller of the cp01App
 */
angular.module('cp01App')
  .controller('HelloCtrl', function ($scope) {
    $scope.greeting = {
      text: 'Hello'
    };
  });

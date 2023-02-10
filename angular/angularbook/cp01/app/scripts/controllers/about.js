'use strict';

/**
 * @ngdoc function
 * @name cp01App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cp01App
 */
angular.module('cp01App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

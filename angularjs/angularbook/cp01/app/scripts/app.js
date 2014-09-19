'use strict';

/**
 * @ngdoc overview
 * @name cp01App
 * @description
 * # cp01App
 *
 * Main module of the application.
 */
angular
  .module('cp01App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/hello', {
        templateUrl: 'views/hello.html',
        controller: 'HelloCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

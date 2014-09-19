'use strict';

angular.module('yeomanContactsAppApp')
  .directive('contact', function () {
    return {
      templateUrl: 'views/contactDirective.html',
      restrict: 'E',
      link: function postLink(element) {
        element.addClass('contact');
      }
    };
  });

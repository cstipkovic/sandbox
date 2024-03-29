'use strict';

angular.module('yeomanContactsAppApp')
  .controller('MainCtrl', function ($scope, $rootScope, ContactsService) {
    $scope.App = {
      config: {
        icon: 'book',
        name: 'AngularJS Contacts'
      },
      loading: true,
      model: null,
      nav: [
        {title: 'List Contacts', href: ''},
        {title: 'Add Contact', href: 'add'}
      ],
      contact: null,
      filter: {
        limit: 10,
        order: 'name',
        reverse: false,
        query: null
      },
      init: function () {
      },
      getContacts: function () {
        new ContactsService(function (data) {
          $scope.$apply(function () {
            $scope.App.loading = false;
            $scope.App.model = data;
          });
        });
      },
      selectContact: function (obj) {
        $rootScope.App.contact = obj;
        $rootScope.selectContact = obj;
      },
      saveContact: function () {

      },
      removeContact: function () {

      }
    };
    $rootScope.App = $scope.App;
  });

'use strict';

describe('Controller: HelloCtrl', function () {

  // load the controller's module
  beforeEach(module('cp01App'));

  var HelloCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelloCtrl = $controller('HelloCtrl', {
      $scope: scope
    });
  }));

  it('should print Hello', function () {
    expect(scope.greeting.text).toBe('Hello');
  });
});

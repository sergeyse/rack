'use strict';

describe('Controller: LoginmainCtrl', function () {

  // load the controller's module
  beforeEach(module('ispanApp'));

  var LoginmainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginmainCtrl = $controller('LoginmainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

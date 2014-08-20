'use strict';

describe('Controller: LandingmapCtrl', function () {

  // load the controller's module
  beforeEach(module('ispanApp'));

  var LandingmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LandingmapCtrl = $controller('LandingmapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: GeomarkCtrl', function () {

  // load the controller's module
  beforeEach(module('ispanApp'));

  var GeomarkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeomarkCtrl = $controller('GeomarkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

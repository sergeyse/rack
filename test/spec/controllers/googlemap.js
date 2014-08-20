'use strict';

describe('Controller: GooglemapCtrl', function () {

  // load the controller's module
  beforeEach(module('ispanApp'));

  var GooglemapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GooglemapCtrl = $controller('GooglemapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

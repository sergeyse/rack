/**
 * Created by sergeyse on 13.07.14.
 */
'use strict';
var INTEGER_REGEXP = /^\-?\d+$/;
  angular.module('ispanApp')  .directive('integer', [function () {

      return {
          require: 'ngModel',
          link: function(scope, elm, attrs, ctrl) {
            //  console.log(ctrl);
              ctrl.$parsers.unshift(function(viewValue) {
              //    console.log(viewValue);
                  if (INTEGER_REGEXP.test(viewValue ) || +viewValue == 11  ) {
                      // it is valid
                      ctrl.$setValidity('integer', true);
                        return viewValue ;

                  } else {
                      // it is invalid, return undefined (no model update)
                      ctrl.$setValidity('integer', false);
                      return undefined;
                  }
              });
          }
      };
  }]);
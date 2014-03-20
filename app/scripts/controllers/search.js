/**
 * Created by sergeyse on 17.03.14.
 */
'use strict';

angular.module('ispanApp')
    .controller('searchCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

        $http.get('assets/' + $routeParams.orderId + '.json').success(function (data) {
            $scope.orders = data;
        });


    }]);


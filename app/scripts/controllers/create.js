/**
 * Created by sergeyse on 01.07.14.
 */
'use strict';

angular.module('ispanApp')
    .controller('CreateCTRL',['$scope','Orders' , '$location' , '$timeout','$routeParams','fbURL','$firebase',function ($scope,Orders,$location,$timeout,$routeParams,fbURL,$firebase) {
   //  $scope.uiorders =


       // new code for edit
        var orderUrl = fbURL + $routeParams.orderId;
        var sync = $firebase(new Firebase(orderUrl));
        $scope.od = sync.$asObject();
        console.log($scope.od);
       // $scope.entrance ={};
        //$scope.searchText ;
        $scope.save = function(){
            $scope.od.$save().then(function(){
                $location.path('/fullsearch');
            });





           // $location.path('/search');
          //  $scope.waite = " waite please "
        /*    Orders.$add($scope.entrance).then(function(ref){
                $scope.waite = true
                $location.path('/search/'+ref.name());
                console.log('/search/'+ref.name());
            });*/

        };
    }])

// do NOT forget to add a script with a controller file to index.html

/**
 * Created by sergeyse on 12.07.14.
 */
'use strict';

angular.module('ispanApp')
    .controller('fullSearchCtrl', ['$scope', '$routeParams', '$http','$firebase','Orders','fbURL' ,'$location',function ($scope, $routeParams, $http,$firebase,Orders,fbURL,$location) {

    /* var promise = Orders;

        promise.then(function(odrs){
          $scope.wait = "wait";
           $scope.allRecords = odrs;

        }, function(reason ){
            console.log("error connection to Fb" + reason);
        },function(notif){
         console.log("waiting!");
            $scope.wait = notif;
        });

*/
        $scope.finish = false;
//console.log(Orders);
        Orders.$loaded().then(function(){
            $scope.allRecords= Orders;
            $scope.finish = true;
        })


    $scope.predicate= 'rekkan';
 //  console.log($scope.allRecords);
     $scope.edit = function(id){
    console.log(id);
         $location.path('/new/'+id);

     }

    }]);
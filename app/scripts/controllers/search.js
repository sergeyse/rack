/**
 * Created by sergeyse on 17.03.14.
 */
'use strict';

angular.module('ispanApp')
    .controller('searchCtrl', ['$scope', '$routeParams', '$http','$firebase','Orders','fbURL' ,'$location',function ($scope, $routeParams, $http,$firebase,Orders,fbURL,$locaton) {
  var msg ;
        $http.get('assets/' + $routeParams.orderId + '.json').success(function (data) {
            $scope.orders = data;
        });
     //    var fref = new Firebase("https://incandescent-fire-7211.firebaseio.com/chat")
         /*  fref.push(
               { "chat":
                   [
                       { "Pontun" : 121212,
                           "Vasan" : 3001
                       },
                       {"Pontun" : 131313,
                           "Vasan" : 3002
                       },
                       {"Pontun" : 141414,
                           "Vasan" : 3003
                       },
                       {"Pontun" : 151515,
                           "Vasan" : 3004
                       },
                       {"Pontun" : 161616,
                           "Vasan" : 3005
                       }
                   ]
               }  );*/

       /* var newPushRef = fref.push();
        newPushRef.set({pontun: 111111, vasan: 301});
        var pushedName = newPushRef.name();
        console.log(pushedName);*/
  $scope.show = false;

console.log(Orders);
    /*    Orders.on('child_added', function(snapshot){
         msg = snapshot.val();
         console.log(msg.name);*/

           $scope.all= Orders;
       // });

        var newEntrUrl = fbURL + $routeParams.orderId;

      $scope.pont = $firebase(new Firebase(newEntrUrl));

console.log($scope.pont);
   $scope.del = function(pid){
       console.log(pid);
       Orders.$remove(pid);
     //  $locaton.path('/new');

  $scope.show = true;


   }

    }]);


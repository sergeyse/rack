'use strict';

angular.module('ispanApp')
  .controller('LoginmainCtrl',['$scope','simpleLogin','$location', function ($scope,simpleLogin,$location) {

/*simpleLogin.$login('password',{
    email:'sergiy@simnet.is',
    password:'1234'
}).then(function(user){
    console.log("logged in as", user.uid,user.email);
},function(error){
    console.log("Login Failed",error);
});*/

        $scope.login= function (){
            simpleLogin.$login('password',{
                email:$scope.inputEmail,
                password:$scope.inputPassword
            }).then(function(user){
                console.log("logged in as", user.uid,user.email);
                $location.path('/googleMap/')

            },function(error){
                console.log("Login Failed",error);
            });

        }


  }]);

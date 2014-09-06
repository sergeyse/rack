'use strict';

angular.module('ispanApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'trColorFilter',
        'firebase'




    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/search/:orderId', {
                templateUrl: 'views/searchres.html',
                controller: 'searchCtrl'
            })
            .when('/search', {
                templateUrl: 'views/searchres.html',
                controller: 'searchCtrl'


            })
            .when('/fullsearch', {
                templateUrl: 'views/fullsearchres.html',
                controller: 'fullSearchCtrl'


            }).when('/new/:orderId', {
                templateUrl: 'views/create.html',
                controller: 'CreateCTRL'
            })
            .when('/addnew', {
                templateUrl: 'views/addnew.html',
                controller: 'AddnewCtrl'
            })
            .when('/landingMap', {
                templateUrl: 'views/landingmap.html',
                controller: 'LandingmapCtrl'
            })
            .when('/googleMap', {
                templateUrl: 'views/googlemap.html',
                controller: 'GooglemapCtrl'
            })
            .when('/geoedit/:geoId', {
              templateUrl: 'views/geoedit.html',
              controller: 'GeoeditCtrl'
            })
            .when('/geomark', {
              templateUrl: 'views/geomark.html',
              controller: 'GeomarkCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .value('fbURL', 'https://incandescent-fire-7211.firebaseio.com/rekkar/')
    .value('geoURL','https://incandescent-fire-7211.firebaseio.com/map/')

    .factory('Orders', function ($firebase, fbURL, $q) {
        //return $firebase(new Firebase(fbURL));
        var ref = $firebase(new Firebase(fbURL));
        return ref.$asArray();
     /*   var ordersList =ref.$asArray();
        ordersList.$loaded().then(function(){
           console.log("--Orders-- "+ordersList);
            return ordersList;
        });*/


        /*function defPromise() {


         var deferred = $q.defer();

         deferred.notify('wait a second ,please...')


         deferred.resolve(
         // setTimeout(function(){alert("uff")},3000)
         $firebase(new Firebase(fbURL))

         );
         deferred.reject('an error has happen ')


         return deferred.promise;
         }

         var test = new defPromise();
         console.log("test" + test());  // ATT this is an object , NOT  a Function  !

         console.log("msg" + new defPromise());
         return new defPromise().then(function (odrs) {

         return odrs;
         console.log("???");
         console.log(odrs);
         }, function (error) {
         return error;
         }, function (notif) {
         console.log(notif);
         return notif;

         });

         console.log("MSG" + difPromise());
         difPromise().then(function (odrs) {
         return odrs;
         console.log(odrs);
         }, function (error) {
         console.log(error);
         }, function (notif) {
         console.log(notif);
         });*/
    });




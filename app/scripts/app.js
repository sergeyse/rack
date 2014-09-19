'use strict';

angular.module('ispanApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'trColorFilter',
        'firebase',
        'ui.utils'



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
                controller: 'LandingmapCtrl',
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                     // here we resolving a promise and injecting a "currentUsen into a controller "
                         return    simpleLogin.$getCurrentUser();
                        //   return 42;

                    }]
                }

            })
            .when('/googleMap', {
                templateUrl: 'views/googlemap.html',
                controller: 'GooglemapCtrl',
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                        return    simpleLogin.$getCurrentUser();


                    }]
                }
            })
            .when('/geoedit/:geoId', {
                templateUrl: 'views/geoedit.html',
                controller: 'GeoeditCtrl',
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                        return    simpleLogin.$getCurrentUser();


                    }]
                }
            })
            .when('/geomark', {
                templateUrl: 'views/geomark.html',
                controller: 'GeomarkCtrl',
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                        return    simpleLogin.$getCurrentUser();


                    }]
                }
            })
            .when('/loginmain', {
                templateUrl: 'views/loginmain.html',
                controller: 'LoginmainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .value('fbURL', 'https://rack-42.firebaseio.com/rekkar/')
    .value('geoURL', 'https://incandescent-fire-7211.firebaseio.com/map/')

    .factory('Orders', function ($firebase, fbURL, $q) {
        //return $firebase(new Firebase(fbURL));
        var ref = $firebase(new Firebase(fbURL));
        return ref.$asArray();


    }


)
    /*.factory('simpleLogin', ["$firebaseSimpleLogin", function ($firebaseSimpleLogin) {
        var ref = new Firebase('https://incandescent-fire-7211.firebaseio.com/');
        console.log("login" + $firebaseSimpleLogin(ref));
        return $firebaseSimpleLogin(ref);
    }]);*/





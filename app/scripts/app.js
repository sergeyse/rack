'use strict';

angular.module('ispanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
        'trColorFilter'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      } )
        .when ('/search/:orderId' , {
        templateUrl:'views/searchres.html',
        controller: 'searchCtrl'
      } )
        .when ('/search',{
        templateUrl:'views/searchres.html',
        controller: 'searchCtrl'


    })
      .otherwise({
        redirectTo: '/'
      });
  });

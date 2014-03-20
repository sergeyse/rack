'use strict';

angular.module('ispanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      } )
        .when ('/search/:orderId' , {
        templateUrl:'views/search.html',
        controller: 'searchCtrl'
      } )
      .otherwise({
        redirectTo: '/'
      });
  });

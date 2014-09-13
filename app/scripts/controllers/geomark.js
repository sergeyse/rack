'use strict';

angular.module('ispanApp')
    .controller('GeomarkCtrl', ['$scope', '$firebase','$location','currentUser', function ($scope, $firebase,$location,currentUser) {
        if(!currentUser){
            $location.path('/loginmain/');
        }

        var latData;
        var lonData, errorMessage;
      //  $scope.showForm = false;
        $scope.defGeo = {};
//------------------- Date vale -----------------------------------
        var dayOfRecord;

        function formatDate(date) {
            var d = date;
            d = ['0' + d.getDate(), '0' + (d.getMonth() + 1), '' + d.getFullYear(), '0' + d.getHours(), '0' + d.getMinutes() ];
            for (var i = 0; i < d.length; i++) {
                d[i] = d[i].slice(-2);
            }

            return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');

            /*          var mm = date.getMinutes();
             var hh = date.getHours();
             var dd = date.getDate()
             if (dd < 10) dd = '0' + dd;

             var mm = date.getMonth() + 1
             if (mm < 10) mm = '0' + mm;

             var yy = date.getFullYear() % 100;
             if (yy < 10) yy = '0' + yy;

             return dd + '.' + mm + '.' + yy+'kl.'+hh+':'+mm;
             */
        }

        /*  var d = new Date();  // 30 Jan 2011
         dayOfRecord = formatDate(d);
         console.log(formatDate(d));*/

//        ------------------- End Date vale -----------------------------------
        function failGeoData(error) {
            console.log('error code = ' + error.code);

            switch (error.code) {
                case error.POSITION_UNAVALABLE:
                    errorMessage = "Can't get the location";
                    break;
                case error.PERMISSION_DENIED:
                    errorMessage = "The user doesn't want to share location";
                    break;
                case error.TIMEOUT:
                    errorMessage = "Timeout - Finding location takes too long";
                    break;
                case error.UNKNOWN_ERROR:
                    errorMessage = "Unknown error: " + error.code;
                    break;
            }
            console.log(errorMessage);

        }

        function successGeoData(position) {
            var successMessage = "We found your position!";
            successMessage += '\n Latitude = ' + position.coords.latitude;
            successMessage += '\n Longitude = ' + position.coords.longitude;
            successMessage += '\n Accuracy = ' + position.coords.accuracy + ' meters';
            console.log(successMessage);
            latData = position.coords.latitude;
            lonData = position.coords.longitude;
            var successMessageHTML = successMessage.replace(/\n/g, '<br />');

            var ref = $firebase(new Firebase("'https://incandescent-fire-7211.firebaseio.com/map/"));

            $scope.defGeo.time = formatDate(new Date);
            $scope.defGeo.lat = latData;
            $scope.defGeo.lon = lonData;
            $scope.defGeo.usermail = currentUser.email;

            console.log($scope.defGeo);

            ref.$push($scope.defGeo).then(function(){

            });

           // $scope.showForm = false;
            $location.path('/googleMap')
        }

        $scope.geoRec = function () {
            if (navigator.geolocation) {
                var startMessage = 'Browser supports geolocation API';
                console.log(startMessage);

                console.log('Checking your position...');


                navigator.geolocation.getCurrentPosition(successGeoData, failGeoData, {
                    maximumAge: 60000,
                    enableHighAccuracy: true,
                    timeout: 5000
                });
            }
        };


    }
    ]);

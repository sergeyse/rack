'use strict';


angular.module('ispanApp')
    .controller('GooglemapCtrl', [ '$scope', '$firebase', '$location', function ($scope, $firebase, $location) {


        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(64.1335, -21.8569),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        //  var image = 'images/rack.png';

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);


        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info) {

            var marker = new google.maps.Marker({
                id:info.name(),
                map: $scope.map,
                position: new google.maps.LatLng(info.val().lat, info.val().lon),
                title: info.val().comment
                //    icon: image
            });
            marker.content = '<a href="#/geoedit/' + info.name() + '" ><button class="btn btn-info">Edit</button> </a>';

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                console.log("Marker" + marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        }
//----------------- Begin deleting particular marker with an ID that is declared in a google.maps.Marker object and connected to Firebase unique ID--------------------
        function deleteOverlays(id) {

                for (var i in $scope.markers) {
console.log("for loop begin i.id = "+$scope.markers[i].id);
                    if ($scope.markers[i].id == id){
                        $scope.markers[i].setMap(null);
                        console.log("inside loop");
                    }


                }


        }

//                                                            ---- changing markers creation ---

//                                             ATH Need this to get a $ID ref !


        /*    var locationsFireRef = $firebase(new Firebase("https://incandescent-fire-7211.firebaseio.com/map/"));
         var locationsList = locationsFireRef.$asArray();
         locationsList.$loaded().then(function () {
         console.log("list has " + locationsList.length);
         //console.log(locationsList[1]);
         for (var i = 0; i < locationsList.length; i++) {
         createMarker(locationsList[i]);
         }
         });*/

//                                                           ---- changing markers creation ---
        /*  locationsList.$watch(function(event){
         console.log("trigger from a Firebase");
         $location.path('googleMap/');

         })*/
        var refLocation = new Firebase("https://incandescent-fire-7211.firebaseio.com/map/");

//     here we need to evaluate param to avoid initial invocing a metod on an app start ?
        refLocation.on('child_added', function (childSnapshot, prevChildName) {
            createMarker(childSnapshot);
            console.log(childSnapshot.name());
        //    console.log("snapshot "+childSnapshot+" prevName  "+prevChildName);
             //createMarker(childSnapshot);
          //   console.log("snap val = "+childSnapshot.val());
            // console.log("snap exportVal = "+childSnapshot.exportVal());
            // console.log("+1"+childSnapshot.exportVal().lat);
            //remove angular fire and use this to create marker and watch for a chadge
        });
        refLocation.on('child_removed', function (oldChildSnapshot) {
            deleteOverlays(oldChildSnapshot.name());
            console.log("deleted markers"+oldChildSnapshot.name());
          //  $scope.location();


        });

 // TODO remove unuserd lib ui-map to optimaize loading time
        /*      for (var i = 0; i < locationsList.length; i++){
         createMarker(locationsList[i]);
         }*/

        $scope.openInfoWindow = function (e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }

        $scope.delete = function (geoId) {
            console.log(geoId);


        }
        $scope.location = function () {

//            ----------------BEGIN testing geomark reloading ---------------
            deleteOverlays();
            var locationsFireRef = $firebase(new Firebase("https://incandescent-fire-7211.firebaseio.com/map/"));
            var locationsList2 = locationsFireRef.$asArray();
            locationsList2.$loaded().then(function () {
                console.log("list has " + locationsList2.length);
                //console.log(locationsList[1]);
                for (var i = 0; i < locationsList2.length; i++) {
                    createMarker(locationsList2[i]);
                }
            });
//            ----------------END testing geomark reloading ---------------
           // $location.path('/landingMap/')
        }


    }





    ]);

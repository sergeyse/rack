'use strict';

angular.module('ispanApp')
  .controller('GooglemapCtrl',[ '$scope','$firebase',function ($scope,$firebase) {

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(64.1335, -21.8569),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);



        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lon),
                title: info.comment
            });
            marker.content = '<a href="#/geoedit/'+info.$id+'" ><button class="btn btn-info">Edit</button> </a>';

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                console.log("Maarker"+marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        }

        var locationsFireRef = $firebase(new Firebase("https://incandescent-fire-7211.firebaseio.com/map/"));
        var locationsList = locationsFireRef.$asArray();
           locationsList.$loaded().then(function(){
               console.log("list has "+locationsList.length);
               console.log(locationsList[1]);
               for (var i = 0; i < locationsList.length; i++){
                   createMarker(locationsList[i]);
               }
           });



  /*      for (var i = 0; i < locationsList.length; i++){
            createMarker(locationsList[i]);
        }*/

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }

        $scope.delete = function(geoId){
            console.log(geoId);
        }



    }





]);

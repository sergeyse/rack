'use strict';

angular.module('ispanApp')
    .controller('AddnewCtrl', ['$scope', '$location' , 'Orders' ,function ($scope, $location, Orders) {

        var dayOfRecord;

        function formatDate(date) {
            var mm = date.getMinutes();
            var hh = date.getHours();
            var dd = date.getDate()
            if (dd < 10) dd = '0' + dd;

            var mm = date.getMonth() + 1
            if (mm < 10) mm = '0' + mm;

            var yy = date.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;

            return dd + '.' + mm + '.' + yy+'kl.'+hh+':'+mm;
        }

        var d = new Date();  // 30 Jan 2011
        dayOfRecord = formatDate(d);
        console.log(formatDate(d));



        $scope.defentr = {};


        $scope.saveNew = function () {



            if ($scope.defentr.pontun == 11) {
                $scope.defentr = {
                    "pontun": 11,
                    "nafn": "ISPAN GEYMSLA",
                    "callChecked": false,
                    "siminn": "5454300",
                    "gata": "Smidjuvegur",
                    "dagsetning": dayOfRecord,
                    "postn": "Kopavogur",
                    "rekkan":+$scope.defentr.rekkan
                          // DO NOT FORGET "+" to change string into integer
                };
                Orders.$add($scope.defentr).then(function (ref) {
                    console.log(ref.name());
                    console.log("from if")
                });
                $location.path('/fullsearch');

            } else {
                Orders.$add($scope.defentr).then(function (ref) {
                    console.log(ref.name());
                    console.log("from else")
                });
                $location.path('/fullsearch');

            }
        }

    }]);

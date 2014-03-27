/**
 * Created by sergeyse on 24.03.14.
 */
angular.module('trColorFilter',[]).filter('trcolor',function(){
    return function(input){
      return  input ? 'success':'warning';

    };
});

/*angulr.module('ispanApp').filter('trcolor',['$scope',function($scope){
    return functoion(input{
        inpur
    })
}])*/

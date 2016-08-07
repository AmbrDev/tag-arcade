'use strict';

app.factory('videoService',['$http',function($http){
    var _title = "Pause Your Game";
    var _videos = null;

    return {
        getTitle : function(){
            return _title;
        },
        setTitle : function(title){
            _title = title;
        },
        getVideos : function(){
            return   $http({
                method:'GET',
                url:'access_db.php'
              });
        }
    }
    console.log('video')
}]);

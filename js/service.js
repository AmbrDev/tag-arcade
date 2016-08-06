'use strict';

app.factory('videoService',['$http',function($http){
    var video = "surprise";
    var _videos = null;

    return {
        getVideo : function(){
            return _video;
        },
        setVideo : function(video){
            _video = video;
        },
        getVideos : function(){
            return   $http({
                method:'GET',
                url:'/videos'
              });
        }
    }
}]);

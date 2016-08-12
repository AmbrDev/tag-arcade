'use strict';

app.factory('VideoService',['$http',function($http){
    var _vidTitle = "Game Development Vlog for Dot Evade";
    var _videos = null;

    return {
        getTitle : function(){
            return _vidTitle;
        },
        setTitle : function(vidTitle){
            _vidTitle = vidTitle;
        },
        getVideos : function(){
            return   $http({
                method:'GET',
                url:'data/videos.json'
              });
        }
    }
}]);

'use strict';

app.factory('videoFactory', function($http){
    var factory = {};

    factory.getVideos = function(){
        return $http.get('access_db.php');
    };

    return factory;
});
//
// app.factory('videoFactory',['$http',function($http){
//     var _title = "Pause Your Game";
//     var _videos = null;
//
//     return {
//         getTitle : function(){
//             return _title;
//         },
//         setTitle : function(title){
//             _title = title;
//         },
//         getVideos : function(){
//             return   $http({
//                 method:'GET',
//                 url:'access_db.php'
//               });
//         }
//     }
//     console.log('video')
// }]);

'use strict';

var app = angular.module('myApp');


app.controller('homeCtrl', function($scope, $state, $window, $rootScope, $location) {
  console.log('home works!');
   $rootScope.$on('$stateChangeStart', function() { $window.scrollTo(0,0) });

   $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});


// app.controller('allvideosCtrl', ['$scope','$state','videoService',function ($scope, $state, videoService) {
//   console.log('all videos works!');
//     var myvideo1=[];
//     $scope.gotToVideo = function(event, title){
//         event.preventDefault();
//         moodService.setTitle(title);
//         $state.go('video-page');
//     }
// }]);
app.controller('allvideosCtrl', ['$scope','$http','videoService','$sce',function($scope, $http, videoService,$sce){
    console.log('all videos works!');

  $scope.videos = [];
  $scope.ready = false;
  $scope.url = null;

  videoService.getVideos().then(function(res){
      $scope.videos = res.data;
      var video = videoService.getVideos();
      console.log($scope.videos);
  }).catch(function(err){
    console.log(err);
  });

  var myvideo1=[];
  $scope.gotToVideo = function(event, title){
      event.preventDefault();
      videoService.setTitle(title);
      $state.go('video-page');
  }
}]);

app.controller('videopageCtrl', ['$scope','$http','videoService','$sce',function($scope, $http, videoService,$sce){
  $scope.videos = [];
  $scope.ready = false;
  $scope.url = null;
  videoService.getVideos().then(function(res){
      $scope.videos = res.data;
      var video = videoService.getVideo();
      console.log($scope.videos);
      var videoObject = $scope.videos.find(function(i){
            return i.title == title;
      });
      console.log('title:', videoObject.title);
      $scope.ready = true;
      if(videoObject){
        $scope.title = videoObject.title;
        $scope.header = videoObject.header;
        $scope.url = $sce.trustAsResourceUrl(videoObject.url);
        $scope.img = videoObject.img;
        $scope.category = videoObject.category;
        $scope.description = videoObject.description;
        $scope.code = videoObject.code;
        }

  }).catch(function(err){
    console.log(err);
  });

}]);

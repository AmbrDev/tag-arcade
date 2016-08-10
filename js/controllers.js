'use strict';

var app = angular.module('myApp');


app.controller('homeCtrl', function($scope, $state, $window, $rootScope, $location) {
  console.log('home works!');
   $rootScope.$on('$stateChangeStart', function() { $window.scrollTo(0,0) });

   $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

app.controller('allvideosCtrl', ['$scope','$http','VideoService','$sce',function($scope, $http, VideoService,$sce){
  console.log('all videos controller!');
  $scope.videos = [];
  $scope.ready = false;
  $scope.vidLink = null;
  $scope.vidCode = null;
  VideoService.getVideos().then(function(res){
      $scope.videos = res.data;
      var vidTitle = VideoService.getTitle();
      console.log('videos db:',$scope.videos);
      var videoObject = $scope.videos.find(function(i){
            return i.vidTitle == vidTitle;
      });
      // console.log('vidTitle:', videoObject.vidTitle);
      $scope.ready = true;
      if(videoObject){
        $scope.vidTitle = videoObject.vidTitle;
        $scope.heading = videoObject.heading;
        $scope.vidLink = $sce.trustAsResourceUrl(videoObject.vidLink);
        $scope.imgUrl = videoObject.imgUrl;
        $scope.category = videoObject.category;
        $scope.post = videoObject.post;
        $scope.vidCode = $sce.trustAsResourceUrl(videoObject.vidCode);
        }

  }).catch(function(err){
    console.log(err);
  });

}]);

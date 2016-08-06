'use strict';

var app = angular.module('musicApp');

app.controller('homeCtrl', ['$scope','$state','moodService',function ($scope, $state, $window, $rootScope, $location, videoService) {

   console.log('home works!');
   $rootScope.$on('$stateChangeStart', function() { $window.scrollTo(0,0) });

   $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };

    var mymood1=[];
    $scope.gotToPlaylist = function(event,mood){
        event.preventDefault();
        moodService.setMood(mood);
        $state.go('playlist');
    }

}]);

app.controller('playlistCtrl', ['$scope','$http','videoService','$sce',function($scope, $http, videoService,$sce){
  $scope.playlists = [];
  $scope.ready = false;
  $scope.url = null;
  moodService.getPlaylists().then(function(res){
      $scope.playlists = res.data;
      var mood = moodService.getMood();
      console.log($scope.playlists);
      var playlistObject = $scope.playlists.find(function(i){
            return i.mood == mood;
      });
      console.log('mood:', playlistObject.mood);
      $scope.ready = true;
      if(playlistObject){
        $scope.mood = playlistObject.mood;
          $scope.url = $sce.trustAsResourceUrl(playlistObject.url);
        }

  }).catch(function(err){
    console.log(err);
  });

}]);

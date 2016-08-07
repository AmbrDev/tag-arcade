'use strict';

var app = angular.module('myApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('dotevade', {
      url:'/dotevade',
      templateUrl: '/html/dotevade.html'
    })
    .state('all-videos', {
      url:'/all-videos',
      templateUrl: '/html/all-videos.html',
      controller: 'allvideosCtrl'
    })
    .state('video-page', {
      url:'/video-page',
      templateUrl: '/html/video-page.html',
      controller: 'videopageCtrl'
    })
    .state('support', {
      url:'/support',
      templateUrl: '/html/support.html',
      controller: 'supportCtrl'
    })
  $urlRouterProvider.otherwise('/');
});

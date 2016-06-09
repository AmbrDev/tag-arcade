'use strict';

var app = angular.module('myApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '/html/home.html'
    })
    .state('dotevade', {
      url:'/dotevade',
      templateUrl: '/html/dotevade.html'
    })
    .state('videos', {
      url:'/videos',
      templateUrl: '/html/videos.html'
    })
    .state('tips', {
      url:'/tips',
      templateUrl: '/html/tips.html'
    })
    .state('tutorials', {
      url:'/tutorials',
      templateUrl: '/html/tutorials.html'
    })
    .state('vlogs', {
      url:'/vlogs',
      templateUrl: '/html/vlogs.html'
    })
    .state('support', {
      url:'/support',
      templateUrl: '/html/support.html'
    })
  $urlRouterProvider.otherwise('/');
});

// CONTROLLER

app.controller('mainCtrl', function($scope, $state) {
    console.log('main controller works!');

});

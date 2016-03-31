(function () {
  // 'use strict';

  var app = angular.module('CrcApp', ['ngRoute', 'ngDialog']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'homeController',
        templateUrl: '../partials/home.html'
      })
      .when('/files/:fileType', {
        controller: 'filesController',
        templateUrl: '../partials/files.html'
      })
      .when('/file/:fileId', {
        controller: 'filesController',
        templateUrl: '../partials/file.html'
      })
      .when('/faq', {
        templateUrl: '../partials/faq.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}());
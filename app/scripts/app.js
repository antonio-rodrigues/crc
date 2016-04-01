(function () {
  // 'use strict';

  var app = angular.module('CrcApp', [
    'ngRoute',
    'ngDialog',
    'angular-table',
    'angularUtils.directives.dirPagination'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../partials/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })
      .when('/files/:fileType', {
        templateUrl: '../partials/files.html',
        controller: 'filesController',
        controllerAs: 'vm'
        // TODO: implement myCtrl.resolve
      })
      .when('/file/:fileId', {
        templateUrl: '../partials/file.html',
        controller: 'filesController',
        controllerAs: 'f'
      })
      .when('/faq', {
        templateUrl: '../partials/faq.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}());

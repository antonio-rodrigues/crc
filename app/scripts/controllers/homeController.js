(function() {
  // 'use strict';
  
  var homeController = function ($scope, appSettings) {
    
    $scope.appSettings = appSettings;

  };

  homeController.$inject = ['$scope', 'appSettings'];

  angular.module('CrcApp')
    .controller('homeController', homeController);

}());
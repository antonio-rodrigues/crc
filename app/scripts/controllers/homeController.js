(function() {
  // 'use strict';
  
  var homeController = function ($scope, appSettings) {
    
    this.appSettings = appSettings;

  };

  // TODO: implement ng-annotate (and save a bunch of typing!)
  homeController.$inject = ['$scope', 'appSettings'];

  angular.module('CrcApp')
    .controller('homeController', homeController);

}());
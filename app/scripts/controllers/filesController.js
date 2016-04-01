(function () {
  // 'use strict';

  var filesController = function($scope, $routeParams, $log, filesFactory, appSettings) {

    var fileType = $routeParams.fileType || 'DEV';
    var fileId = $routeParams.fileId || null;
    console.log('fileType: ' + fileType);

    $scope.fileType = fileType.toUpperCase();
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.appSettings = appSettings;
    $scope.page = {
      title: appSettings.filemap[fileType.toUpperCase()],
      itemsPerPage: 5
    };
    
    $scope.xmlfiles = [];
    
    function init() {
      //Favor then() insteadOf deprecated success()
      filesFactory.getFiles(fileType.toUpperCase())
        .then(function(response) {
          $scope.xmlfiles = response.data;
        }, function(data, status, headers, config) {
          $log.log(data.error + ' ' + status);
        });
    }

    init();

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
    
  };

  
  filesController.$inject = ['$scope', '$routeParams', '$log', 'filesFactory', 'appSettings'];

  angular.module('CrcApp')
    .controller('filesController', filesController);

}());
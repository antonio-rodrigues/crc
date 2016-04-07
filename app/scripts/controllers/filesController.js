(function () {
  // 'use strict';

  var filesController = function ($scope, $routeParams, $log, filesFactory, appSettings) {

    var vm = this;
    
    var fileType = function () {
      if ($routeParams.fileType === null)
        return 'DEV';
      else 
        return $routeParams.fileType.toString().toUpperCase();
    }();
    
    var fileId = $routeParams.fileId || null;
    console.log('fileType: ' + fileType);

    vm.fileType = fileType.toUpperCase();
    vm.sortBy = 'name';
    vm.reverse = false;
    vm.appSettings = appSettings;
    vm.page = {
      title: appSettings.filemap[fileType],
      itemsPerPage: 5
    };

    vm.xmlfiles = [];

    function init() {
      //Favor then() insteadOf deprecated success()
      filesFactory.getFiles(fileType.toUpperCase())
        .then(function (response) {
          vm.xmlfiles = response.data;
        }, function (data, status, headers, config) {
          $log.log(data.error + ' ' + status);
        });
    }
    
    init();

    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

  };

  // TODO: implement ng-annotate (and save a bunch of typing!)
  filesController.$inject = ['$scope', '$routeParams', '$log', 'filesFactory', 'appSettings'];

  angular.module('CrcApp')
    .controller('filesController', filesController);

}());
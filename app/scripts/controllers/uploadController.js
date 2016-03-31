(function () {
  // 'use strict';

  var uploadController = function ($scope, $routeParams, $log, filesFactory, ngDialog, appSettings) {

    var fileType = $routeParams.fileType || 'DEV';

    //$scope.Files = [];
    $scope.appSettings = appSettings;
    $scope.page = {
      title: appSettings.filemap[fileType.toUpperCase()],
      fileType: fileType
    };

    $scope.radio = {
      onoff: 'off'
    }
    
    $scope.radioOnOff = function(match) {
      return (fileType != match ? false : true);
    };
    
    $scope.openNotify = function () {
      var dialog = ngDialog.open({
        template:'../partials/upload.html',
        controller: 'uploadController',
        /*preCloseCallback: function(value) {
          var nestedConfirmDialog = ngDialog.openConfirm({
            template:'\
                <p>Are you sure you want to close the parent dialog?</p>\
                <div class="ngdialog-buttons">\
                <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes</button>\
                </div>',
            plain: true
          });
          return nestedConfirmDialog;
        }*/     
      });
      dialog.closePromise.then(function (data) {
        console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
      });
    };

    $scope.upload = function () {
      filesFactory.uploadFile(fileType.toUpperCase(), file)
        .then(function (response) {
          $scope.Files = response.data;
        }, function (data, status, headers, config) {
          $log.log(data.error + ' ' + status);
        });
    }

  };

  uploadController.$inject = ['$scope', '$routeParams', '$log', 'filesFactory', 'ngDialog', 'appSettings'];

  angular.module('CrcApp')
    .controller('uploadController', uploadController);

}());

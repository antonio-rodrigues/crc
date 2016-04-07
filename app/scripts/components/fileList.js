function FileListController($scope, $routeParams, $element, $attrs, filesFactory, appSettings) {
  
  var ctrl = this;
  
  var fileType = function () {
    if (isUndefined($routeParams.fileType))
      return 'DEV';
    else 
      return $routeParams.fileType.toString().toUpperCase();
  }();

  ctrl.appSettings = appSettings;
  ctrl.page = {
    title: appSettings.filemap[fileType],
    itemsPerPage: 5
  };
  
  ctrl.list = [];

  this.$onInit = function() {
    filesFactory.getFiles(fileType)
      .then(function (response) {
        ctrl.list = response.data;
      }, function (data, status, headers, config) {
        $log.log(data.error + ' ' + status);
      });
  };
  
  ctrl.updateFile = function(hero, prop, value) {
    hero[prop] = value;
  };

  ctrl.deleteFile = function(hero) {
    var idx = ctrl.list.indexOf(hero);
    if (idx >= 0) {
      ctrl.list.splice(idx, 1);
    }
  };
}

// TODO: implement ng-annotate (and save a bunch of typing!)
FileListController.$inject = ['$scope', '$routeParams', '$element', '$attrs', 'filesFactory', 'appSettings'];

angular.module('CrcApp').component('fileList', {
  templateUrl: '../partials/fileList.html',
  controller: FileListController
});
(function () {
  //'use strict';
  
  var filesFactory = function ($http, appSettings) {

    var factory = {};

    factory.getFiles = function (fileTypeId) {
      return $http.get(appSettings.api.url + '/files/' + fileTypeId);
    };

    factory.getFile = function (fileId) {
      return $http.get(appSettings.api.url + '/file/' + fileId);
    };

    return factory;
  };

  filesFactory.$inject = ['$http','appSettings'];

  angular.module('CrcApp')
    .factory('filesFactory', filesFactory);

}());

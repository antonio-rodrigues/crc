(function () {
  
  var trueIconFilter = function($sce){
    return function (input) {
      var output;

      input = input.toString().toLowerCase();
      
      if (input === 'true') {
        output = $sce.trustAsHtml('<i class="material-icons tf-icon">cloud_done</i>');
      } else if (input === 'false') {
        output = $sce.trustAsHtml('&nbsp;');
      } else {
        output = $sce.trustAsHtml('--');
      }

      return output;
    }
    
  };

  trueIconFilter.$inject = ['$sce'];
  
  angular.module('CrcApp')
    .filter('true_false_icon', trueIconFilter);
  
}());
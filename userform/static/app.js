(function () {
'use strict';

angular.module('ValidationCheck',[])
.controller('ValidationCheckController', ValidationCheckController)
.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
});

ValidationCheckController.$inject = ['$scope'];
function ValidationCheckController($scope) {
  $scope.validName = "";
  $scope.validDOB = "";
  $scope.validEmail = "";
  $scope.vstatus = true;
  $scope.look = "";
  $scope.success = "";

  $scope.checkValidity = function () {
      this.look = "";
      this.success = "";
      $scope.vstatus = true;
      var enteredDOB = $scope.validDOB;
      //var parts = enteredDOB.split("-");
      //var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
      var dtCurrent = new Date();
      console.log(dtCurrent.getFullYear() - enteredDOB.getFullYear());
      if (dtCurrent.getFullYear() - enteredDOB.getFullYear() < 18) {
          this.look += "Age is below 18 years. ";
      }
      if ($scope.validName == "") {
          this.look += "Name Field is Empty. ";
      }
      if (!validateEmail($scope.validEmail)) {
          this.look += "Invalid Email Address. ";
      }
      if (this.look == ""){
          $scope.vstatus = false;
          this.success = "Everything is fine! You can submit the form now.";
      }
      console.log($scope.look);
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

})();

angular.module('account.controllers', [])
  .controller('AccountCtrl', function($scope) {
        $scope.setIndex="";
          $scope.toggle=function(Index){
            $scope.setIndex=this;
            $scope.setIndex=Index;
          }
  })

/**
 * Created by mo on 2017/2/25.
 */
angular.module('index.controllers', [])
  .controller('TabsController',['$scope','$rootScope','$ionicHistory','$state',function($scope,$rootScope,$ionicHistory,$state) {
    $rootScope.rootBack= function () {
      $ionicHistory.goBack();
    };
  }])
  .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
          scope.$watch(attributes.hideTabs, function(value){
            $rootScope.hideTabs = 'tabs-item-hide';
          });
        });
        scope.$on('$ionicView.beforeLeave', function() {
          scope.$watch(attributes.hideTabs, function(value){
            $rootScope.hideTabs = 'tabs-item-hide';
          });
          scope.$watch('$destroy',function(){
            $rootScope.hideTabs = false;
          })
        });
      }
    };
  });

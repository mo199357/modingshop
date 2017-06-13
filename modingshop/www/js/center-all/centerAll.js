/**
 * Created by mo on 2017/2/26.
 */
angular.module('center.controllers', [])
  .controller('CenterCtrl',['$scope','$state',function($scope,$state,Chats){
    $scope.setUPgo=function(){
      $state.go('tab.setUp')
    };
    $scope.loginGo=function(){
      $state.go('tab.login')
    };
    $scope.userGo=function(){
      $state.go('tab.user')
    };/*
    $scope.userGo=function(){
      $state.go('tab.user')
    };*/
    $scope.orderGo=function(){
      $state.go('tab.order')
    };
    $scope.pendingPaymentGo=function(){
      $state.go('tab.pendingPayment')
    };
    $scope.dataGo=function(){
      $state.go('tab.data')
    };
  }])
  //设置
  .controller('SetUpCtrl',function($scope){

  })
//登录
  .controller('LoginCtrl',['$scope','$state',function($scope,$state){
    $scope.userGo=function(){
      $state.go('tab.user')
    };
    $scope.forgetPasswordGo=function(){
      $state.go('tab.forgetPassword')
    };
  }])
//注册 UserCtrl
  .controller('UserCtrl',['$scope','$state',function($scope,$state){
    $scope.loginGo=function(){
      $state.go('tab.login')
    };
  }])
//忘记密码 ForgetPasswordCtrl
  .controller('ForgetPasswordCtrl',['$scope','$state',function($scope,$state){
    $scope.BackPasswordGo=function(){
      $state.go('tab.backPassword')
    };
  }])
//找回密码 BackPasswordCtrl
  .controller('BackPasswordCtrl',['$scope','$state',function($scope,$state){

  }])
//全部订单 orderCtrl
  .controller('orderCtrl',['$scope','$state',function($scope,$state){

  }])
  .controller('pendingPaymentCtrl',['$scope','$state',function($scope,$state){

  }])
//我的资料
  .controller('DataCtrl',['$scope','$state',function($scope,$state){

  }])

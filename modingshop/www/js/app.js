angular.module('starter', ['ionic', 'starter.services','index.controllers','homepage.controllers',
'shop.controllers','center.controllers','account.controllers','chats.controllers'])

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: "TabsController"
  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/homepage/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/sale/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/equipment/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
    .state('tab.shopping', {
      url: '/shopping',
      views: {
        'tab-shopping': {
          templateUrl: 'templates/shop/tab-shopping.html',
          controller: 'ShoppingCtrl'
        }
      }
    })
    .state('tab.center', {
      url: '/center',
      views: {
        'my-center': {
          templateUrl: 'templates/myCenter/my-center.html',
          controller: 'CenterCtrl'
        }
      }
    })
    .state('tab.setUp', {
      url: '/setUp',
      views: {
        'my-center': {
          templateUrl: 'templates/myCenter/setUp/setUp.html',
          controller: 'SetUpCtrl'
        }
      }
    })
    .state('tab.login', {
      url: '/login',
      views: {
        'my-center': {
          templateUrl: 'templates/myCenter/login-user/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('tab.user', {
      url: '/login',
      views: {
        'my-center': {
          templateUrl: 'templates/myCenter/login-user/user.html',
          controller: 'UserCtrl'
        }
      }
    })
    .state('tab.forgetPassword', {
      url: '/forgetPassword',
      views: {
        'my-center': {
          templateUrl: 'templates/myCenter/forgetPassword/forgetPassword.html',
          controller: 'ForgetPasswordCtrl'
        }
      }
    })
    .state('tab.backPassword', {
      url: '/backPassword',
      views: {
        'my-center': {
          templateUrl: 'templates/myCenter/backPassword/backPassword.html',
          controller: 'BackPasswordCtrl'
        }
      }
    })
    .state('tab.order', {
      url: '/order',
      views: {
        'my-center': {
          templateUrl: 'templates/myCenter/order/order.html',
          controller: 'orderCtrl'
        }
      }
    })
    .state('tab.data', {
      url: '/data',
      views: {
        'my-center': {
          templateUrl: 'templates/myCenter/data/data.html',
          controller: 'DataCtrl'
        }
      }
    })
    .state('tab.pendingPayment', {
      url: '/pendingPayment',
      views: {
        'my-center': {
          templateUrl: 'templates/myCenter/pendingPayment/pendingPayment.html',
          controller: 'pendingPaymentCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/tab/dash');

});

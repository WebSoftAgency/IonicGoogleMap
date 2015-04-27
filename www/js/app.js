// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",

    })
    .state('joining', {
      url: "/joining",
      templateUrl: "templates/joining.html",

    })
    .state('work', {
      url: "/work",
      templateUrl: "templates/work.html"

    })
    .state('becoming', {
      url: "/becoming",
      templateUrl: "templates/becoming.html"
    })

}).controller('MainCtrl', function($scope, $state, $ionicHistory, $ionicPopover){

  $scope.findMe = function(){
    $state.go('home').then(function(){
       initialize();
    });
    
  }

  $scope.backToMain = function(){
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $ionicHistory.goToHistoryRoot('root');
  }

   // .fromTemplate() method
  var template = '<ion-popover-view><ion-content><img src="img/tab.png" style="width:200px; heigth:240px; margin-left:10px"></ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
     scope: $scope
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

var phoneApp = angular.module('phoneApp', ['ngRoute']);

phoneApp.config(function($routeProvider){
$routeProvider
  .when('/home', {
    templateUrl: 'views/contacts.html',
    controller: 'ContactController'
  })

  .when('/call', {
    templateUrl: 'views/dial.html',
    controller: 'DialController'
  })

  .when('/favorites', {
    templateUrl: 'views/favorites.html',
    controller: 'ContactController'
  })

  .when('/sign_up', {
    templateUrl: 'views/sign_up.html',
    controller:  'RegisterController'
  })

  .when('/', {
    templateUrl: 'views/home.html',
    controller:  'HomeController'
  })

  // Uggghhh
  .when('/_=_', {
      templateUrl: 'views/home.html',
      controller:  'HomeController'
  })
});

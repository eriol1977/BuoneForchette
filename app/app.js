'use strict';

// Declare app level module which depends on views, and components
angular.module('buoneForchette', [
  'ngRoute',
  'buoneForchette.recipes'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/recipes'});
}]);

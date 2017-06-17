'use strict';

angular.module('videoClubApp', [
	'videoClubApp.constants',
	 'ngCookies', 
	 'ngResource', 
	 'ngSanitize',
     'ui.router', 
     'ui.bootstrap'
  ])
.constant("API","http://localhost:25956/adsi2017_backend_completo")
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });

'use strict';
var ngModule = require('vendor/utils').ngModule;
var angular = require('vendor/angular');

// Declare app level module
var app = angular.module('uFaber', [
	ngModule('ui.router'),
	ngModule('ngMaterial'),
]);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	$stateProvider.state('tabs', {
		url: '/tabs',
		templateUrl: 'views/tabs/tabs.html',
		controller: 'TabsCtrl'
	});
});

// Import the top level requires
require('bower/angular-material/angular-material.css');
require('./app.scss');

// Controllers to handle additional views
require('./views/tabs/tabs.js');

// Expose the app
module.exports = app;
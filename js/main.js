var app = angular
	.module('basicPhonebook', ['LocalStorageModule'])
	.config(function (localStorageServiceProvider) {
	  localStorageServiceProvider.setPrefix('myApp');
	})
	.controller('mainController', 
		function($scope, localStorageService) {
			$scope.addEntry = function(isValid, name, phone) {
				if (isValid && localStorageService.isSupported) {
					localStorageService.set("name", name);
					localStorageService.set("phone", phone);
				}
		}
	});
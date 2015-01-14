var app = angular
	.module('basicPhonebook', ['LocalStorageModule'])
	.config(function (localStorageServiceProvider) {
	  localStorageServiceProvider.setPrefix('basicPhonebook');
	})
	.controller('mainController', 
		function($scope, localStorageService)
		{
			$scope.addEntry = function(isValid, name, phone)
			{
				if (isValid && localStorageService.isSupported)
				{
					alert('beep beep');
					localStorageService.set("name", name);
					localStorageService.set("phone", phone);
				}
			};
			$scope.deleteEntry = function() {
				localStorageService.remove("name");
				localStorageService.remove("phone");
			};
		}
	);
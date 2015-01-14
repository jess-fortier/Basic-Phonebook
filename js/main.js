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
					localStorageService.set("name", name);
					localStorageService.set("phone", phone);
				}
			};
			$scope.deleteEntry = function() {
				localStorageService.remove("name");
				localStorageService.remove("phone");
			};
			$scope.hasEntry = function() {
				if(localStorageService.get("name") == null && localStorageService.get("phone") == null)
					return false;
				return true;
			};
		}
	);
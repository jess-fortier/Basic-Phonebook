var app = angular
	.module('basicPhonebook', ['LocalStorageModule'])
	.config(function (localStorageServiceProvider) {
	  localStorageServiceProvider.setPrefix('basicPhonebook');
	})
	.controller('mainController', 
		function($scope, localStorageService)
		{
			//Initialize fields to stored values, if any
			$scope.entryName = localStorageService.get("name");
			$scope.phoneNumber = localStorageService.get("phone");
			$scope.showFields = true;

			//Commit the current field contents to localStorage
			$scope.addEntry = function(isValid, name, phone)
			{
				if (isValid && localStorageService.isSupported)
				{
					localStorageService.set("name", name);
					localStorageService.set("phone", phone);
					showFields = false;
				}
			};
			//Wipe name and phone entries for this app from localStorage
			$scope.deleteEntry = function() {
				localStorageService.remove("name");
				$scope.entryName = '';
				localStorageService.remove("phone");
				$scope.phoneNumber = '';
			};

			//Confirm whether entries for name or phone already exist in localStorage
			$scope.hasEntry = function() {
				if(localStorageService.get("name") == null && localStorageService.get("phone") == null)
					return false;
				return true;
			};


		}
	);
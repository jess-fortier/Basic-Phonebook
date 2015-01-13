var app = angular.module('phonebookApp', []);

app.controller('mainController', function($scope) {
	$scope.submitForm = function(isValid) {
		console.log("bloop");
		alert('submitForm function has been called...');
		if (isValid) {
			alert('our form is amazing');
		}
	};
});

function saveEntry(name, phone){
	localStorageService.clearAll();
	localStorageService.set(name, phone);
}
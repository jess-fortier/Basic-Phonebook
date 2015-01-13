var app = angular.module('phonebookApp', []);

app.controller('mainController', function($scope) {
	$scope.submitForm = function(isValid) {
		if (isValid) {
			alert('our form is amazing');
		}
	};
});

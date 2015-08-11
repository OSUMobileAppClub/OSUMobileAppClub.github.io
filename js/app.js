var app = angular.module('MoApp', []);

app.controller('Members', ['$scope', 'GHMembers', Members]);

function Members($scope, GHMembers) {
	$scope.members = GHMembers;
	console.log("fire");
	console.log($scope.members);
}


var app = angular.module('MoApp');

app.factory('GHMembers', ['$http', function($http) {
	
	var ourMembers = [];

	function ghusers() {

		$http.get("https://api.github.com/orgs/mobileapposu/members")
		.success(function suc(userResponse) {

			ourMembers.push({
				gh: user.login,
				avatar_url: userResponse.avatar_url});
		})
		.error(function err(error) {
			console.log("error loading" + username);
		});
	}

	return ourMembers;

}]);


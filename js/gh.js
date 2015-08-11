var app = angular.module('MoApp');

app.factory('GHMembers', ['$http', function($http) {
	var ourMembers = [];

	function ghusers(members) {
		members.forEach(function(user){
			var username = user.gh;

			$http.get("https://api.github.com/users/" + username)
			.success(function suc(userResponse) {

				ourMembers.push({
					name: user.name,
					gh: user.gh,
					avatar_url: userResponse.avatar_url});
			})
			.error(function err(error) {
				console.log("error loading" + username);
			});
		})
	};

	(function loadMembers() {
		$http.get('/members.json')
		.success(function(members){
			ghusers(members);
		})
		.error(function() { console.log("unable to read members.json")});
	})();

	return ourMembers;
}]);


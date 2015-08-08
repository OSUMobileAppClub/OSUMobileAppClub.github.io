function getAvatars(ghnames) {
	ghnames.forEach(function(username) {
		$http.get("$ curl https://api.github.com/users/" + username)
		.success(function suc(userResponse) {
			var img = new Image();
			img.onload = function() {
				var domImg = document.getElementById(username);
				domImg.attr("src", this.src);
				domImg.className += " live";
			}
			img.src = userResponse.avatar_url;
		})
		.error(function err(error) {
			console.log("error loading" + username);
		})
	});
}



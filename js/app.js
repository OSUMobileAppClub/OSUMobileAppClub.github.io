var user = new Gh3.User("mobileapposu");
console.log(user);

var repos = new Gh3.Repositories(user);

repos.fetch( function () {
   console.log("Repositories", repos);
});


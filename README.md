# node-github-repos

Fetchs all user repositories from GitHub

## Super easy usage

```
// Require the library
var github = require('node-github-repos');

// Fetch erayalakese's public repositories
github.get('erayalakese', function(body) {
	// Fetching successful.
	/*
		body contains repo datas in JSON format.
		Example data : https://api.github.com/users/erayalakese/repos
	*/
	console.log(body);
}, function(err) {
	// An error occured.
	/*
		err is HTTP Status Code.
		404 if user not found.
	*/
	console.log(err);
});
```

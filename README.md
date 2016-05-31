# node-github-repos

[![NPM](https://nodei.co/npm/node-github-repos.png?downloads=true)](https://nodei.co/npm/node-github-repos/)

[![Dependency Status](https://david-dm.org/erayalakese/node-github-repos.svg)](https://david-dm.org/erayalakese/node-github-repos) [![Known Vulnerabilities](https://snyk.io/test/npm/node-github-repos/badge.svg)](https://snyk.io/test/npm/node-github-repos)

Fetchs all user repositories from GitHub. Uses NodeJS' inbuilt `https` module and doesn't depends to any external modules.

## Super easy usage with ZERO dependencies

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

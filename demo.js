var github = require('./index');

github.get('erayalakese', function(body) {
	console.log(body);
}, function(err) {
	console.log(err);
});

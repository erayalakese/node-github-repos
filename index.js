var https = require('https');

module.exports = {
	get : function(username, cb, err) {
		var options = {
      host: 'api.github.com',
      path: '/users/'+ username +'/repos',
      port: 443,
			headers: {
				'User-Agent': 'node-github-repos'
			}
		};

		var req = https.request(options, function (response) {
      var res = '';
      response.on('data', function(data) {
        res += data.toString();
      });
      response.on('end', function() {
        cb(JSON.parse(res));
      });
      req.on('error', function(err) {
        console.log(err);
        err(err.statusCode);
      });
		});
    req.end();
	}
};
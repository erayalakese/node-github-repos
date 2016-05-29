var request = require('request');

module.exports = {
	get : function(username, cb, err) {
		var options = {
			url: 'https://api.github.com/users/'+ username +'/repos',
			headers: {
				'User-Agent': 'node-github-repos'
			}
		};

		request(options, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    cb(body);
		  }
		  else {
		  	err(response.statusCode);
		  }
		});
	}
};

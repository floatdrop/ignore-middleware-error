'use strict';
var assert = require('assert');
var ignoreMiddlewareError = require('./');

it('should ignore error from middleware', function (done) {
	var mw = function (req, res, next) {
		next(new Error('Bang!'));
	};

	ignoreMiddlewareError(mw)({}, {}, function (err) {
		assert.ifError(err);
		done();
	});
});

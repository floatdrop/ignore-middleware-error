'use strict';

module.exports = function (mw) {
	if (typeof mw !== 'function') {
		throw new TypeError('Expected a function');
	}

	return function (req, res, next) {
		mw(req, res, function () {
			next();
		});
	};
};

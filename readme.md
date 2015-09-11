# ignore-middleware-error [![Build Status](https://travis-ci.org/floatdrop/ignore-middleware-error.svg?branch=master)](https://travis-ci.org/floatdrop/ignore-middleware-error)

> Ignore error from middleware


## Install

```
$ npm install --save ignore-middleware-error
```


## Usage

```js
var ignoreMiddlewareError = require('ignore-middleware-error');

function mw(req, res, next) {
	next(new Error('Bang!'));
}

var silentMw = ignoreMiddlewareError(mw);
```


## API

### ignoreMiddlewareError(middleware)

#### middleware

Type: `function`

Middleware function, that should be silenced.

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)

<div align="center">
  <a href="https://superchargejs.com">
    <img width="471" style="max-width:100%;" src="https://superchargejs.com/images/supercharge-text.svg" />
  </a>
  <br/>
  <br/>
  <p>
    <h3>Errors</h3>
  </p>
  <p>
    JavaScript error classes with useful defaults
  </p>
  <br/>
  <p>
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#resources"><strong>Docs</strong></a> ·
    <a href="#quick-usage-overview"><strong>Usage</strong></a>
  </p>
  <br/>
  <br/>
  <p>
    <a href="https://www.npmjs.com/package/@supercharge/errors"><img src="https://img.shields.io/npm/v/@supercharge/errors.svg" alt="Latest Version"></a>
    <a href="https://www.npmjs.com/package/@supercharge/errors"><img src="https://img.shields.io/npm/dm/@supercharge/errors.svg" alt="Monthly downloads"></a>
  </p>
  <p>
    <em>Follow <a href="http://twitter.com/marcuspoehls">@marcuspoehls</a> and <a href="http://twitter.com/superchargejs">@superchargejs</a> for updates!</em>
  </p>
</div>

---

## Introduction
The `@supercharge/errors` package provides improved `Error` classes.


## Installation

```
npm i @supercharge/errors
```


## Quick Usage Overview
Using `@supercharge/errors` is pretty straightforward. The package exports error classes that you can use like the native `Error` class.

```js
const { Error, HttpError } = require('@supercharge/errors')

throw new Error('your error message')

throw new HttpError('Request validation failed', 400, 'E_YOUR_CUSTOM_ERROR_CODE')
// or use fluent methods
throw new HttpError('Request validation failed')
  .withStatus(400)
  .withCode('E_YOUR_CUSTOM_ERROR_CODE')
```


## Contributing
Do you miss a function? We very much appreciate your contribution! Please send in a pull request 😊

1.  Create a fork
2.  Create your feature branch: `git checkout -b my-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request 🚀


## License
MIT © [Supercharge](https://superchargejs.com)

---

> [superchargejs.com](https://superchargejs.com) &nbsp;&middot;&nbsp;
> GitHub [@supercharge](https://github.com/supercharge) &nbsp;&middot;&nbsp;
> Twitter [@superchargejs](https://twitter.com/superchargejs)

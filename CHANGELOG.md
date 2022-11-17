# Changelog


## [2.0.1](https://github.com/supercharge/errors/compare/v2.0.0...v2.0.1) - 2022-11-17

### Updated
- `withCode(code?)`: make `code` argument optional


## [2.0.0](https://github.com/supercharge/errors/compare/v1.3.0...v2.0.0) - 2022-11-17

### Added
- add an optional `options` argument to the constructor allowing you to pass through a `cause`
  ```ts
  try {
    throw new Error('Authentication token expired')
  } catch (error: any) {
    throw new Error('User login failed', { cause: error })
  }
  ```
- add `HttpError#withStack` method: assign a specific stack trace to this error

### Updated
- bump dependencies
- use UVU and expect for testing instead of tap
- use `@supercharge/eslint-config-typescript` instead of `standard-with-typescript`

### Breaking Changes
- require Node.js v16, drop support for Node.js v12 and v14
- remove the `status` and `code` arguments from the `HttpError` constructor
  ```ts
  import { HttpError } from '@supercharge/errors'

  // before
  const error = new HttpError('Authentication token expired', 401, 'AUTH_TOKEN_EXPIRED')

  // now
  const error = new HttpError('Authentication token expired', { cause })
    .withStatus(401)
    .withCode('AUTH_TOKEN_EXPIRED')
  ```


## [1.3.0](https://github.com/supercharge/errors/compare/v1.2.0...v1.3.0) - 2021-08-27

### Updated
- bump dependencies
- make `status` argument optional and default to 500 in `HttpError`


## [1.2.0](https://github.com/supercharge/errors/compare/v1.1.0...v1.2.0) - 2021-08-20

### Added
- public `stack` property to the `Error` class ensuring the stacktrace is available


## [1.1.0](https://github.com/supercharge/errors/compare/v1.0.0...v1.1.0) - 2021-08-20

### Added
- `withTitle(title: string)` method to add a title to the error instance. For example, a title can be `Bad Request` for a 400 error

### Updated
- bump dependencies


## 1.0.0 - 2020-07-22

### Added
- `1.0.0` release 🚀 🎉

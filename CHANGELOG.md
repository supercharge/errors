# Changelog


## [2.0.0](https://github.com/supercharge/errors/compare/v1.3.0...v2.0.0) - 2022-1x-xx

### Updated
- bump dependencies
- use UVU and expect for testing instead of tap

### Breaking Changes
- require Node.js v16, drop support for Node.js v12 and v14


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

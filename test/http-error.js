'use strict'

const { test } = require('uvu')
const { expect } = require('expect')
const { HttpError } = require('../dist')

test('has a name', async () => {
  const error = new HttpError()

  expect(error.name).toEqual('HttpError')
})

test('defaults to status 500', async () => {
  const error = new HttpError()

  expect(error.status).toEqual(500)
})

test('has a cause', async () => {
  const error = new HttpError('something', { cause: 'error cause' })

  expect(error.status).toEqual(500)
  expect(error.cause).toBeDefined()
})

test('can access properties', async () => {
  const error = new HttpError('failed').withStatus(401).withCode('APP_ERROR_CODE')

  expect(error.status).toEqual(401)
  expect(error.message).toEqual('failed')
  expect(error.title).toEqual('HttpError')
  expect(error.code).toEqual('APP_ERROR_CODE')
  expect(error.stack).toBeDefined()
})

test('withStatus', async () => {
  const error = new HttpError('failed').withStatus(400)

  expect(error.status).toEqual(400)
  expect(error.message).toEqual('failed')
})

test('withCode', async () => {
  const error = new HttpError('failed').withCode('E_FAILED_TO_READ_FILE')

  expect(error.message).toEqual('failed')
  expect(error.code).toEqual('E_FAILED_TO_READ_FILE')
})

test('withTitle', async () => {
  const error = new HttpError('failed').withTitle('Bad Request')

  expect(error.message).toEqual('failed')
  expect(error.title).toEqual('Bad Request')
})

test('withStack', async () => {
  const baseError = new HttpError('original error message')
  const error = new HttpError('failed').withStack(baseError.stack)

  expect(error.message).toEqual('failed')
  expect(error.stack).toContain('HttpError: original error message')
  expect(error.stack).toContain('test/http-error.js:58')
  expect(error.stack).not.toContain('test/http-error.js:59') // "error" should have the stacktrace of "baseError"
})

test.run()

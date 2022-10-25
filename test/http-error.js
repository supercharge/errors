'use strict'

const { test } = require('uvu')
const { expect } = require('expect')
const { HttpError } = require('../dist')

test('has a name', async t => {
  const error = new HttpError()

  expect(error.name).toEqual('HttpError')
})

test('defaults to status 500', async t => {
  const error = new HttpError()

  expect(error.status).toEqual(500)
})

test('can access properties', async t => {
  const error = new HttpError('failed', 401, 'APP_ERROR_CODE')

  expect(error.status).toEqual(401)
  expect(error.message).toEqual('failed')
  expect(error.title).toEqual('HttpError')
  expect(error.code).toEqual('APP_ERROR_CODE')
  expect(error.stack).toBeDefined()
})

test('withStatus', async t => {
  const error = new HttpError('failed').withStatus(400)

  expect(error.status).toEqual(400)
  expect(error.message).toEqual('failed')
})

test('withCode', async t => {
  const error = new HttpError('failed').withCode('E_FAILED_TO_READ_FILE')

  expect(error.message).toEqual('failed')
  expect(error.code).toEqual('E_FAILED_TO_READ_FILE')
})

test('withTitle', async t => {
  const error = new HttpError('failed').withTitle('Bad Request')

  expect(error.message).toEqual('failed')
  expect(error.title).toEqual('Bad Request')
})

test.run()

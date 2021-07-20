'use strict'

const { test } = require('tap')
const { HttpError } = require('../dist')

test('HttpError', async () => {
  test('has a name', async t => {
    const error = new HttpError()

    t.equal(error.name, 'HttpError')
  })

  test('defaults to status 500', async t => {
    const error = new HttpError()

    t.equal(error.status, 500)
  })

  test('can access properties', async t => {
    const error = new HttpError('failed', 401, 'APP_ERROR_CODE')

    t.equal(error.message, 'failed')
    t.equal(error.status, 401)
    t.equal(error.code, 'APP_ERROR_CODE')
    t.ok(error.stack)
  })

  test('withStatus', async t => {
    const error = new HttpError('failed').withStatus(400)

    t.equal(error.message, 'failed')
    t.equal(error.status, 400)
  })

  test('withCode', async t => {
    const error = new HttpError('failed').withCode('E_FAILED_TO_READ_FILE')

    t.equal(error.message, 'failed')
    t.equal(error.code, 'E_FAILED_TO_READ_FILE')
  })
})

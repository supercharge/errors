'use strict'

const { test } = require('tap')
const { Error } = require('../dist')

test('Error', async () => {
  test('has a name', async t => {
    const baseError = new Error()
    t.equal(baseError.name, 'BaseError')

    const testError = new TestError()
    t.equal(testError.name, 'TestError')
  })
})

class TestError extends Error {}

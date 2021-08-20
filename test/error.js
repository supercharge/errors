'use strict'

const { test } = require('tap')
const { Error } = require('../dist')

test('Error', async () => {
  test('has a name', async t => {
    const error = new Error()
    t.equal(error.name, 'BaseError')

    const testError = new TestError()
    t.equal(testError.name, 'TestError')
  })

  test('has a stack trace', async t => {
    const error = new Error()
    t.ok(error.stack)
    t.not(error.stack, '')
    t.ok(error.stack.includes('test/error.js:16'))
  })
})

class TestError extends Error {}

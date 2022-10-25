'use strict'

const { test } = require('uvu')
const { Error } = require('../dist')
const { expect } = require('expect')

test('has a name', async t => {
  const error = new Error()
  expect(error.name).toEqual('BaseError')

  const testError = new TestError()
  expect(testError.name).toEqual('TestError')
})

test('has a stack trace', async t => {
  const error = new Error()
  expect(error.stack).toBeDefined()
  expect(error.stack).not.toEqual('')
  expect(error.stack).toContain('test/error.js:16')
})

class TestError extends Error {}

test.run()

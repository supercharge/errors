'use strict'

import { BaseError } from './error'

export class HttpError extends BaseError {
  /**
   * Stores the HTTP status code for this error.
   */
  public status: number

  /**
   * Stores an error code.
   */
  public code?: string

  /**
   * Stores the error title, like 'Bad Request' or 'Internal Server Error'.
   */
  public title: string

  /**
   * Create a new HTTP error instance for the given `message`, `status`, and `code`.
   * Defaults to HTTP status code `500` when skipping the `status` parameter.
   * Defaults to no error code when skipping the `code` parameter.
   *
   * @param {String} message
   * @param {Number} status
   */
  constructor (message: string, options?: { cause?: any }) {
    super(message, options)

    this.status = 500
    this.title = this.name
  }

  /**
   * Assign the given HTTP `status` code to this error.
   *
   * @param {Number} status
   *
   * @returns {HttpError}
   */
  withStatus (status: number): this {
    this.status = status

    return this
  }

  /**
   * Assign the given error `code` to this error. Error codes are application
   * specific and may be used to define a problem or an article in a given
   * knowledge base. This code does not replace the error’s HTTP status.
   *
   * @param {String} code
   *
   * @returns {HttpError}
   */
  withCode (code?: string): this {
    this.code = code

    return this
  }

  /**
   * Assign a specific error title, like `Bad Request`.
   *
   * @param {String} title
   *
   * @returns {this}
   */
  withTitle (title: string): this {
    this.title = title

    return this
  }

  /**
   * Assign the given `stack` trace to this error.
   *
   * @param {String} stack
   *
   * @returns {this}
   */
  withStack (stack: string): this {
    this.stack = stack

    return this
  }
}

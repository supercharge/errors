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
   * Create a new HTTP error instance for the given `message` and `status`.
   *
   * @param {String} message
   * @param {Number} status
   */
  constructor (message: string, status: number, code?: string) {
    super(message)

    this.status = status ?? 500
    this.code = code
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
  withCode (code: string): this {
    this.code = code

    return this
  }
}

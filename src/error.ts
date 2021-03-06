'use strict'

export class BaseError extends Error {
  /**
   * Stores the error message.
   */
  public message: string

  /**
   * Stores the error class name.
   */
  public name: string

  /**
   * Stores the error stacktrace.
   */
  public stack: string

  /**
   * Create a new error instance for the given `message`.
   *
   * @param message
   * @param status
   */
  constructor (message?: string) {
    super(message)

    this.message = message ?? ''
    this.name = this.constructor.name

    this.stack = '' // next line overrides this with the actual stack trace
    Error.captureStackTrace(this, this.constructor)
  }
}

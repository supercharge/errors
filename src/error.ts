'use strict'

export class BaseError extends Error {
  /**
   * Stores the error stacktrace.
   */
  public override stack: string

  /**
   * Create a new error instance for the given `message`.
   *
   * @param message
   * @param status
   */
  constructor (message?: string, options?: ErrorOptions) {
    super(message, options)

    this.name = this.constructor.name

    this.stack = '' // next line overrides this with the actual stack trace
    BaseError.captureStackTrace(this, this.constructor)
  }
}

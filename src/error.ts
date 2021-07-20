'use strict'

export class BaseError extends Error {
  /**
   * Stores the error message.
   */
  public message: string

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

    Error.captureStackTrace(this, this.constructor)
  }
}

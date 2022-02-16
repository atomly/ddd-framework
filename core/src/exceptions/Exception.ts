import { SerializedException } from './SerializedException';

/**
 * Exception was created out of a need for a common base class for all Node.JS Error objects.
 * This class will allow you to extend and/or augment any Error by simply defining your
 * own properties on the extended class.
 *
 * **NOTE:** Do not to include comprimising data in the `metadata` constructor parameter in
 * production environments.
 */
export default abstract class Exception extends Error {
  public abstract readonly code: string;

  constructor(
    public readonly message: string,
    public readonly metadata?: unknown
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }

  /**
   * Turns the exception into a Serialized object.
   */
  public toJSON(): SerializedException {
    return {
      message: this.message,
      code: this.code,
      stack: this.stack,
      metadata: this.metadata
    };
  }
}

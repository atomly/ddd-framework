import { v4 as uuidV4, validate } from 'uuid';
import Identity from './Identity';
import ArgumentInvalidException from './exceptions/ArgumentInvalidException';

/**
 * Universally Unique Identifier (RFC4122).
 */
export default class Uuid extends Identity {
  protected validate(): void {
    if (!validate(this.value)) {
      throw new ArgumentInvalidException('value', 'Invalid UUID format');
    }
  }

  /**
   * Returns a new Uuid instance with a randomly generated v4 UUID.
   */
  public static generate(options?: Parameters<typeof uuidV4>[number]): Uuid {
    return new Uuid(uuidV4(options));
  }

  /**
   * Nil/Empty UUID.
   */
  public static readonly Null = new Uuid(
    '00000000-0000-0000-0000-000000000000'
  );
}

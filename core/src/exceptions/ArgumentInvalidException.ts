import { ObjectLiteral } from '../utils/ObjectLiteral';
import Exception from './Exception';

export default class ArgumentInvalidException<
  Class extends ObjectLiteral = ObjectLiteral
> extends Exception {
  public readonly code = 'ArgumentInvalidException';

  constructor(
    argument: keyof Class & PropertyKey,
    error: string,
    metadata?: unknown
  ) {
    super(`${String(argument)} - ${error}`, metadata);
  }
}

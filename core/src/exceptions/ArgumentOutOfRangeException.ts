import { ObjectLiteral } from '../utils/ObjectLiteral';
import Exception from './Exception';

export default class ArgumentOutOfRangeException<
  Class = ObjectLiteral
> extends Exception {
  public readonly code = 'ArgumentOutOfRangeException';

  constructor(argument: keyof Class, error: string) {
    super(`${argument} - ${error}`);
  }
}

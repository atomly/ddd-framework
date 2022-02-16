import Exception from './Exception';

export default class IlegalStateException extends Exception {
  public readonly code = 'IlegalStateException';
}

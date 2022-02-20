import Exception from './Exception';

export default class NotFoundException extends Exception {
  public readonly code = 'NotFoundException';
}

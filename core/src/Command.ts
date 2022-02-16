import Uuid from './Uuid';

/**
 * Command contracts follow the same semantics as Events and can be shared
 * across systems in a similar fashion.
 */
export default abstract class Command {
  constructor(public readonly commandId: Uuid = Uuid.generate()) {}
}

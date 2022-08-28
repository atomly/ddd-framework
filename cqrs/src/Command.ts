import Uuid from '@ddd-framework/core/Uuid';
import { CommandDto } from './CommandDto';

/**
 * Command contracts follow the same semantics as Events and can be shared
 * across systems in a similar fashion. They should also be immutable.
 * For this reason, we keep Domain Objects out of our Commands, because our
 * Domain Model is mutable.
 */
export default abstract class Command {
  public readonly commandId: string;

  public readonly causationId: string;

  public readonly correlationId: string;

  constructor(data: CommandDto<Command> = {}) {
    this.commandId = data.commandId || Uuid.generate().unpack();
    this.causationId = data.causationId || Uuid.generate().unpack();
    this.correlationId = data.correlationId || Uuid.generate().unpack();
  }
}

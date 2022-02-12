import Command from './Command';
import Identity from './Identity';

/**
 * A contract between a client Request object and a domain Commands.
 */
export default abstract class Contract<
  DomainCommand extends Command<Identity>
> {
  /**
   * Transforms the contract to a domain Command.
   */
  public abstract command(): DomainCommand;
}

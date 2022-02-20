import Command from './Command';

/**
 * A contract between a client DTO and a domain Command. Similar to an interface in that the contract
 * specifies how data must be delivered so that it can be processed by an application.
 *
 * TODO:
 *  - Implement as a decorator based on [C# DataContract decorators](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.serialization.datacontractattribute?view=net-6.0).
 */
export default abstract class Contract<DomainCommand extends Command> {
  /**
   * Instantiates the domain Command using the contract DTO.
   */
  public abstract getCommand(): DomainCommand;
}

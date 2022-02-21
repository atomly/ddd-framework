import Identity from '@ddd-framework/core/Identity';
import IdentifiedDomainObject from '@ddd-framework/core/IdentifiedDomainObject';
import DomainEvent from '@ddd-framework/core/DomainEvent';

/**
 * Read Model Projections can be realized through a simple set of Domain Event
 * subscribers that are used to generate and update a persistent Read Model.
 */
export default abstract class Projection<
  Id extends Identity = Identity,
  ProjectedEvent extends DomainEvent = DomainEvent
> extends IdentifiedDomainObject<Id> {
  /**
   * Project the event(s) into the Read Model Projection by transforming the data.
   */
  public project(anEvent: ProjectedEvent): void;
  public project(anEventList: ProjectedEvent[]): void;
  public project(anEventStream: ProjectedEvent | ProjectedEvent[]): void {
    if (Array.isArray(anEventStream)) anEventStream.forEach(this.when);
    else this.when(anEventStream);
  }

  /**
   * When an Event happens, transform the data.
   */
  protected abstract when(anEvent: ProjectedEvent): void;
}

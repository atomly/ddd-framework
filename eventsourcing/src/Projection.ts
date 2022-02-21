import Identity from '@ddd-framework/core/Identity';
import IdentifiedDomainObject from '@ddd-framework/core/IdentifiedDomainObject';
import DomainEvent from '@ddd-framework/core/DomainEvent';

/**
 * Read Model Projections can be realized through a simple set of Domain Event
 * subscribers that are used to generate and update a persistent Read Model.
 */
export default abstract class Projection<
  ProjectedEvent extends DomainEvent = DomainEvent
> extends IdentifiedDomainObject<Identity> {
  /**
   * Project the event(s) into the Read Model by transforming the data.
   */
  public transform(anEvent: ProjectedEvent): void;
  public transform(anEventList: ProjectedEvent[]): void;
  public transform(arg: ProjectedEvent | ProjectedEvent[]): void {
    if (Array.isArray(arg)) for (const event of arg) this.apply(event);
    else this.apply(arg);
  }

  /**
   * Used to mutate the current state of the Read Model by handling the event.
   */
  protected apply(anEvent: ProjectedEvent): void {
    return this.when(anEvent);
  }

  /**
   * When an Event happens, transform the Read Model.
   */
  protected abstract when(anEvent: ProjectedEvent): void;
}

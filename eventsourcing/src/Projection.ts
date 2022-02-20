import { DomainEventSubscriber } from '@ddd-framework/core';
import DomainEvent from '@ddd-framework/core/DomainEvent';
import ProjectionStore from './ProjectionStore';

/**
 * Read Model Projections can be realized through a simple set of Domain Event
 * subscribers that are used to generate and update a persistent Read Model.
 */
export default abstract class Projection<
  ProjectedEvent extends DomainEvent = DomainEvent
> extends DomainEventSubscriber {
  constructor(protected store: ProjectionStore<Projection>) {
    super();
  }

  /**
   * When an Event happens, project it into the Read Model.
   */
  public abstract when(anEvent: ProjectedEvent): PromiseLike<void>;
}

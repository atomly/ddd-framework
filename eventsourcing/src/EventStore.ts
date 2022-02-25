import DomainEvent from '@ddd-framework/core/DomainEvent';
import Identity from '@ddd-framework/core/Identity';
import EventStream from './EventStream';

/**
 * We load Events from the Event Store using the unique identity of the
 * Aggregate instance to be reconstituted.
 *
 * @extends Foo
 */
export default abstract class EventStore {
  /**
   * Loads an event stream.
   */
  public abstract loadEventStream<
    Event extends DomainEvent,
    Id extends Identity
  >(anEventStreamId: Id): Promise<EventStream<Event>>;

  /**
   * Appends a new event(s) to an event stream.
   */
  public abstract appendToEventStream<Event extends DomainEvent>(
    anEventStreamId: Identity,
    anEvent: Event | Event[]
  ): Promise<void>;
}

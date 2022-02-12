import DomainEvent from './DomainEvent';
import DomainEventSubscriber from './DomainEventSubscriber';

/**
 * Provides a simple service to Aggregates that need to notify subscribers of Events.
 */
export default abstract class DomainEventPublisher {
  /**
   * Meant to be used by an Aggregate whenever it creates an Event and publishes it.
   */
  public abstract publish(event: DomainEvent): Promise<void>;

  /**
   * Registers a subscriber.  When an Event is published, each subscriber is
   * notified.
   */
  public abstract subscribe(subscriber: DomainEventSubscriber): Promise<void>;
}

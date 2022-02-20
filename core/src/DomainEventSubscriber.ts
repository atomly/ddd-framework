import DomainEvent from './DomainEvent';

/**
 * The subscriber may be any component that can subscribe to Events
 * published by Aggregates.
 *
 * One thing the subscriber should not do is get another Aggregate instance
 * and execute modifying command behavior on it. This would violate the
 * "modify-single-aggregate-instance-in-single-transaction" rule of thumb.
 */
export default abstract class DomainEventSubscriber {
  /**
   * Registers the subscriber.  When an Event is published, the subscriber is
   * notified.
   */
  public abstract subscribe(...args: unknown[]): Promise<void>;

  /**
   * Subscriber event handlers should implement single-responsibility components such
   * as sending notifications after an event happened, storing the Event in an Event
   * Store, forwarding the Event via a messaging infrastructure, etc.
   *
   * Idempotency is recommended to handle event duplication, but to be
   * idempotent can be difficult, impractical, or even impossible.
   */
  public abstract when(anEvent: DomainEvent): PromiseLike<void>;
}

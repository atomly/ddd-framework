import DomainEvent from './DomainEvent';

export type Consumer<KnownEvent extends DomainEvent = DomainEvent> = (
  anEvent: KnownEvent
) => PromiseLike<void>;

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
   * Subscribes the consumer to sent event type(s).  When an Event is published, the consumer is
   * notified.
   *
   * Idempotency is recommended to handle event duplication, but to be
   * idempotent can be difficult, impractical, or even impossible.
   *
   * @returns the Consumer reference.
   */
  public abstract subscribe<KnownEvent extends DomainEvent = DomainEvent>(
    toAnEventType: KnownEvent['metadata']['eventType'],
    aConsumer: Consumer<KnownEvent>
  ): PromiseLike<Consumer<KnownEvent>>;

  /**
   * Unsubscribes a consumber from published Domain Events.
   */
  public abstract unsubscribe<KnownEvent extends DomainEvent = DomainEvent>(
    aConsumer: Consumer<KnownEvent>
  ): PromiseLike<void>;
}

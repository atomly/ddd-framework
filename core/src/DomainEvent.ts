import assert from 'assert';
import Guard from './Guard';
import Identity from './Identity';

export type DomainEventMetadata = {
  readonly eventType: string | number;
  readonly eventVersion: string | number;
  readonly occurredOn: Date;
};

/**
 * Consider including whatever would be necessary to trigger the Event again.
 * This normally includes the identity of the Aggregate instance on which it took
 * place, or any Aggregate instances involved.
 * Using this guidance, we might create properties of any parameters that caused the
 * Event, if discussion proves they are useful. It’s also possible that some resulting
 * Aggregate state transition values could be helpful to subscribers.
 */
export default abstract class DomainEvent<
  Id extends Identity = Identity,
  Version = number
> {
  public readonly metadata: DomainEventMetadata;

  constructor(
    public readonly aggregateId: Id,
    public readonly aggregateVersion: Version,
    occurredOn: Date = new Date()
  ) {
    const Constructor = this.constructor as typeof DomainEvent;

    assert(
      !Guard.isEmpty(Constructor.eventType),
      `[${this.constructor.name}] Static property "eventType" needs to be defined to initiate the event metadata.`
    );

    assert(
      !Guard.isEmpty(Constructor.eventVersion),
      `[${this.constructor.name}] Static property "eventVersion" needs to be defined to initiate the event metadata.`
    );

    this.metadata = {
      eventType: Constructor.eventType,
      eventVersion: Constructor.eventVersion,
      occurredOn
    };
  }

  public static readonly eventType: DomainEventMetadata['eventType'];

  public static readonly eventVersion: DomainEventMetadata['eventVersion'];
}

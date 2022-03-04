import assert from 'assert';
import Guard from './Guard';
import Uuid from './Uuid';
import { Newable, DomainEventDto } from './utils';

/**
 * Events are facts that something truly did occur in the business, they are immutable.
 * For this reason, we keep Domain Objects out of our Events, because our Domain Model is mutable.
 * We can’t alter Events as our Domain Model evolves, which is why we must version our Events.
 *
 * Consider including whatever would be necessary to trigger the Event again.
 */
export default abstract class DomainEvent {
  public readonly aggregateId: string;

  public readonly eventId: string;

  public readonly eventType: string;

  public readonly eventVersion: string | number;

  public readonly occurredOn: string;

  public readonly causationId?: string;

  public readonly correlationId?: string;

  constructor(data: DomainEventDto<DomainEvent>) {
    const Constructor = this.constructor as typeof DomainEvent;

    assert(
      !Guard.isEmpty(Constructor.eventType),
      `[${this.constructor.name}] Static property "eventType" needs to be defined.`
    );

    assert(
      !Guard.isEmpty(Constructor.eventVersion),
      `[${this.constructor.name}] Static property "eventVersion" needs to be defined.`
    );

    this.aggregateId = data.aggregateId;

    this.eventId = data.eventId || Uuid.generate().unpack();

    this.eventType = Constructor.eventType;

    this.eventVersion = Constructor.eventVersion;

    this.occurredOn = data.occurredOn || Date.now().toString();

    this.causationId = data.causationId as string | undefined;

    this.correlationId = data.correlationId as string | undefined;
  }

  public static readonly eventType: string;

  public static readonly eventVersion: string | number;

  /**
   * Registers the Domain Event by setting its `eventType` and `eventVersion` metadata.
   */
  // TODO: Couple this logic with the DomainEventClassMap registration in the future.
  public static Register<ClassType extends Newable>(
    eventType: string,
    eventVersion: string
  ): ClassDecorator {
    return function (Class: ClassType) {
      return class extends Class {
        public static eventType = eventType;
        public static eventVersion = eventVersion;
      };
    } as ClassDecorator;
  }

  // TODO: Make decorator that evaluates that the domain event has static classes
}

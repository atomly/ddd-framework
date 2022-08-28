import assert from 'assert';
import Guard from './Guard';
import Uuid from './Uuid';
import { DomainEventDto, MutableObject } from './utils';
import DomainEventMap from './DomainEventMap';

/**
 * Events are facts that something truly did occur in the business, they are immutable.
 * For this reason, we keep Domain Objects out of our Events, because our Domain Model is mutable.
 * We can’t alter Events as our Domain Model evolves, which is why we must version our Events.
 *
 * Consider including whatever would be necessary to trigger the Event again.
 */
export default abstract class DomainEvent<
  Type extends string = string,
  Version extends string | number = string | number
> {
  public readonly aggregateId: string;

  public readonly eventId: string;

  public readonly eventType: Type;

  public readonly eventVersion: Version;

  public readonly occurredOn: string;

  public readonly causationId?: string;

  public readonly correlationId?: string;

  constructor(data: DomainEventDto<DomainEvent<Type, Version>>) {
    const Constructor = this.constructor as typeof DomainEvent;

    assert(
      !Guard.isEmpty(Constructor.eventType),
      `[${this.constructor.name}] static property "eventType" needs to be defined.`
    );

    assert(
      !Guard.isEmpty(Constructor.eventVersion),
      `[${this.constructor.name}] static property "eventVersion" needs to be defined.`
    );

    this.aggregateId = data.aggregateId;

    this.eventId = data.eventId || Uuid.generate().unpack();

    this.eventType = Constructor.eventType as Type;

    this.eventVersion = Constructor.eventVersion as Version;

    this.occurredOn = data.occurredOn || Date.now().toString();

    this.causationId = data.causationId as string | undefined;

    this.correlationId = data.correlationId as string | undefined;
  }

  public static readonly eventType: string;

  public static readonly eventVersion: string | number;

  /**
   * Registers the Domain Event in the Domain Event Map using its `eventType` and `eventVersion` properties
   * as keys.
   */
  public static Register<DomainEventClass extends typeof DomainEvent>(
    eventType: DomainEvent['eventType'],
    eventVersion: DomainEvent['eventVersion'],
    disableMap?: boolean
  ): ClassDecorator {
    return function (Class: DomainEventClass) {
      (Class as MutableObject<DomainEventClass>).eventType = eventType;
      (Class as MutableObject<DomainEventClass>).eventVersion = eventVersion;

      assert(
        !Guard.isEmpty(Class.eventType),
        `[${Class.name}] "eventType" needs to be defined.`
      );

      assert(
        !Guard.isEmpty(Class.eventVersion),
        `[${Class.name}] "eventVersion" needs to be defined.`
      );

      if (!disableMap)
        DomainEventMap.instance().add(Class as typeof DomainEvent);

      return Class;
    } as ClassDecorator;
  }
}

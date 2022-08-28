import DomainEvent from './DomainEvent';

/**
 * Singleton that maps DomainEvent classes when registered.
 * This map is meant to be used to deserialize events by getting
 * the respective DomainEvent class of a serialized DTO by the
 * type and version metadata.
 */
export default class DomainEventMap {
  private static domainEventMap: DomainEventMap;

  private map: Record<
    DomainEvent['eventType'],
    Record<DomainEvent['eventVersion'], typeof DomainEvent>
  > = {};

  private constructor() {}

  public add(aDomainEventClass: typeof DomainEvent): void {
    if (!this.map[aDomainEventClass.eventType])
      this.map[aDomainEventClass.eventType] = {};
    if (!this.map[aDomainEventClass.eventType][aDomainEventClass.eventVersion])
      this.map[aDomainEventClass.eventType][aDomainEventClass.eventVersion] =
        aDomainEventClass;
    else
      throw new Error(
        `Domain Event of type [${aDomainEventClass.eventType}] and version [${aDomainEventClass.eventVersion}] was already added.`
      );
  }

  public get<Event extends typeof DomainEvent>(
    eventType: DomainEvent['eventType'],
    eventVersion: DomainEvent['eventVersion']
  ): Event | undefined {
    return this.map[eventType]
      ? (this.map[eventType][eventVersion] as Event)
      : undefined;
  }

  public static instance() {
    if (!DomainEventMap.domainEventMap)
      DomainEventMap.domainEventMap = new DomainEventMap();
    return DomainEventMap.domainEventMap;
  }
}

import DateValue from './DateValue';
import DomainEvent from './DomainEvent';
import Entity from './Entity';
import Identity from './Identity';

/**
 * Entity serving as an Aggregate Root of an object cluster composed of
 * Entities and Value Objects for transactional boundaries.
 */
export default abstract class AggregateRoot<
  Id extends Identity = Identity,
  AggregateEvent extends DomainEvent = DomainEvent
> extends Entity<Id> {
  constructor(
    public createdAt: DateValue = DateValue.now(),
    public updatedAt?: DateValue
  ) {
    super();
  }

  private _events: AggregateEvent[] = [];

  public get events(): AggregateEvent[] {
    return this._events;
  }

  protected addEvent(domainEvent: AggregateEvent): void {
    this.updatedAt = DateValue.now();
    this.events.push(domainEvent);
  }

  public clearEvents(): void {
    this._events = [];
  }
}

import Identity from '@ddd-framework/core/src/Identity';
import AggregateRoot from './AggregateRoot';

/**
 * We reconstitute an Aggregate by using its unique identity by loading storedEvents from
 * the Event Store.
 */
export default abstract class AggregateStore {
  /**
   * Appends new events to the aggregate stream, then clear the aggregate changes.
   */
  public abstract save<Aggregate extends AggregateRoot>(
    anAggregate: Aggregate
  ): PromiseLike<void>;

  /**
   * Loads an aggregate from all events of a stream.
   */
  public abstract load<Aggregate extends AggregateRoot>(
    anId: Identity,
    anAggregate: Aggregate
  ): PromiseLike<Aggregate>;

  /**
   * Checks if an Aggregate exist by checking if the stream exists.
   */
  public abstract exists<Id extends Identity>(anId: Id): PromiseLike<boolean>;
}

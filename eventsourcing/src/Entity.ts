import CoreEntity from '@ddd-framework/core/Entity';
import DomainEvent from '@ddd-framework/core/DomainEvent';
import Identity from '@ddd-framework/core/Identity';
import { Action } from './Action';

export default abstract class Entity<
  Id extends Identity = Identity,
  EntityEvent extends DomainEvent = DomainEvent
> extends CoreEntity<Id> {
  private readonly applier: Action<EntityEvent>;

  constructor(applier: Action<EntityEvent>) {
    super();
    this.applier = applier;
  }

  public apply(anEvent: EntityEvent) {
    this.mutate(anEvent);
    this.validateInvariants && this.validateInvariants();
    this.applier(anEvent);
  }

  public mutate(anEvent: EntityEvent): void {
    this.when(anEvent);
  }

  protected abstract when(anEvent: EntityEvent): void;
}

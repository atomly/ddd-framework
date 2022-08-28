import {
  DomainEvent,
  IdentifiedDomainObject,
  Identity
} from '@ddd-framework/core';
import Action from './Action';

export default abstract class Entity<
  Id extends Identity = Identity,
  EntityEvent extends DomainEvent = DomainEvent
> extends IdentifiedDomainObject<Id> {
  constructor(private readonly applier: Action<EntityEvent>) {
    super();
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

  protected validateInvariants?(): void;
}

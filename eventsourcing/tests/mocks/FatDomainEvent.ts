import { DomainEvent, ObjectLiteral } from '@ddd-framework/core';

/**
 * Rich Domain Events contain properties of any parameters that caused the
 * Event, if discussion proves they are useful. It’s also possible that some resulting
 * Aggregate state transition values could be helpful to subscribers.
 */
export default abstract class FatDomainEvent<
  Props extends Readonly<ObjectLiteral> = Readonly<ObjectLiteral>
> extends DomainEvent {
  public readonly data?: Props;
}

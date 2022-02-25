import DomainEvent from './DomainEvent';

export type Consumer<KnownEvent extends DomainEvent = DomainEvent> = (
  anEvent: KnownEvent
) => Promise<void>;

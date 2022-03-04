import { DataTransferObject } from '../utils/DataTransferObject';
import DomainEvent from '../DomainEvent';

export type DomainEventDto<BaseEvent extends DomainEvent> = DataTransferObject<
  BaseEvent,
  keyof DomainEvent
> &
  Partial<Omit<DomainEvent, 'aggregateId' | 'eventType' | 'eventVersion'>> &
  Pick<DomainEvent, 'aggregateId'>;

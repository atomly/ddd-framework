import { Readable } from 'stream';
import DomainEvent from '@ddd-framework/core/DomainEvent';
import { ReadableStream } from './ReadableStream';

/**
 * Event stream of Domain Events.
 */
export default class EventStream<KnownEvent extends DomainEvent = DomainEvent>
  extends Readable
  implements ReadableStream<KnownEvent>
{
  // public on: (event: 'data', listener: (event: KnownEvent) => void) => this;
  public [Symbol.asyncIterator]: () => AsyncIterableIterator<KnownEvent>;
}

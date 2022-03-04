import { Readable } from 'stream';
import DomainEvent from '@ddd-framework/core/DomainEvent';
import { ReadableStream } from './types/ReadableStream';

/**
 * Event stream of Domain Events.
 * [Node.js Streams: Everything you need to know](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)
 */
export default class EventStream<KnownEvent extends DomainEvent = DomainEvent>
  extends Readable
  implements ReadableStream<KnownEvent>
{
  // public on: (event: 'data', listener: (event: KnownEvent) => void) => this;
  public [Symbol.asyncIterator]: () => AsyncIterableIterator<KnownEvent>;
}

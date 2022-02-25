import { Transform, TransformCallback, TransformOptions } from 'stream';
import DomainEvent from '@ddd-framework/core/DomainEvent';
import { ReadableStream } from './ReadableStream';

/**
 * Event stream of Domain Events.
 */
export default class WritableEventStream<
    KnownEvent extends DomainEvent = DomainEvent,
    Chunk = unknown
  >
  extends Transform
  implements ReadableStream<KnownEvent>
{
  constructor(
    transform: (chunk: Chunk) => KnownEvent,
    opts: Omit<TransformOptions, 'transform'> = {}
  ) {
    super(WritableEventStream.getTransformOptions(transform, opts));
  }

  public [Symbol.asyncIterator]: () => AsyncIterableIterator<KnownEvent>;

  private static getTransformOptions<
    KnownEvent extends DomainEvent = DomainEvent,
    Chunk = unknown
  >(
    transform: (chunk: Chunk) => KnownEvent,
    opts: Omit<TransformOptions, 'transform'>
  ): TransformOptions {
    const transformOptions = opts as TransformOptions;
    if (transform) {
      transformOptions.readableObjectMode = true;
      transformOptions.writableObjectMode = true;
      transformOptions.transform = function (
        chunk: any,
        _: BufferEncoding,
        callback: TransformCallback
      ): void {
        const event = transform(chunk);
        this.push(event);
        callback();
      };
    }
    return opts;
  }
}

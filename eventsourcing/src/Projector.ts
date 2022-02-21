import { DomainEventSubscriber, Repository } from '@ddd-framework/core';
import { Consumer } from '@ddd-framework/core/DomainEventSubscriber';
import Projection from './Projection';

export default abstract class Projector<
  KnownProjection extends Projection = Projection,
  KnownRepository extends Repository<KnownProjection> = Repository<KnownProjection>
> {
  protected abstract readonly projection: KnownProjection;

  protected abstract readonly repository: KnownRepository;

  protected abstract readonly subscriber: DomainEventSubscriber;

  private consumer: Consumer | undefined;

  public async start(eventType: string | number): Promise<void> {
    this.consumer = await this.subscriber.subscribe(
      eventType,
      async (event) => {
        this.projection.project(event);
      }
    );
  }

  public async stop(): Promise<void> {
    this.consumer && this.subscriber.unsubscribe(this.consumer);
  }
}

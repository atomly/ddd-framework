import DomainEvent from '@ddd-framework/core/DomainEvent';
import Projection from './Projection';

export default abstract class ProjectionManager {
  protected abstract readonly projections: Projection[];

  public abstract start(): PromiseLike<void>;

  public abstract stop(): PromiseLike<void>;

  protected on(anEvent: DomainEvent): Promise<void[]> {
    return Promise.all(this.projections.map((p) => p.project(anEvent)));
  }
}

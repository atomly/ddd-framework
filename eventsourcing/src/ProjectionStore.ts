import Projection from './Projection';

export default abstract class ProjectionStore<P extends Projection> {
  public abstract add(aProjection: P): PromiseLike<void>;
  public abstract update(aProjection: P): PromiseLike<void>;
}

export default abstract class CheckpointStore<Checkpoint> {
  public abstract get(): PromiseLike<Checkpoint | undefined>;
  public abstract store(aCheckpoint: Checkpoint): PromiseLike<void>;
}

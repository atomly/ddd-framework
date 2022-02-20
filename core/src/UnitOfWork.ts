export default abstract class UnitOfWork {
  public abstract start?(): PromiseLike<void>;

  public abstract commit(): PromiseLike<void>;

  public abstract rollback(): PromiseLike<void>;
}

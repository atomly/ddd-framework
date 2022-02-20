import UnitOfWork from './UnitOfWork';

export default abstract class UnitOfWorkManager {
  public abstract startUnitOfWork(): PromiseLike<UnitOfWork>;
}

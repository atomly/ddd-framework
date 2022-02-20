import IdentifiedDomainObject from './IdentifiedDomainObject';
import Identity from './Identity';
import UnitOfWork from './UnitOfWork';

export default abstract class Repository<
  DomainObject extends IdentifiedDomainObject<Identity>
> {
  public abstract getBy(
    anIdentity: DomainObject['id']
  ): PromiseLike<DomainObject | undefined>;

  public abstract save(
    anObject: DomainObject,
    aUnitOfWork?: UnitOfWork
  ): PromiseLike<DomainObject>;

  public abstract delete(
    anObject: DomainObject,
    aUnitOfWork?: UnitOfWork
  ): PromiseLike<DomainObject>;
}

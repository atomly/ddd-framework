import IdentifiedDomainObject from '../IdentifiedDomainObject';
import Identity from '../Identity';
import UnitOfWork from '../UnitOfWork';

export default abstract class Repository<
  DomainObject extends IdentifiedDomainObject<Identity>
> {
  public abstract getBy(
    anIdentity: DomainObject['id']
  ): Promise<DomainObject | undefined>;

  public abstract save(
    anObject: DomainObject,
    aUnitOfWork?: UnitOfWork
  ): Promise<DomainObject>;

  public abstract delete(
    anObject: DomainObject,
    aUnitOfWork?: UnitOfWork
  ): Promise<DomainObject>;
}

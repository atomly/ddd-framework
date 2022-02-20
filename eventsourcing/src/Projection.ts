import Identity from '@ddd-framework/core/Identity';
import IdentifiedDomainObject from '@ddd-framework/core/IdentifiedDomainObject';
import DomainEvent from '@ddd-framework/core/DomainEvent';
import Repository from '@ddd-framework/core/Repository';

/**
 * Sometimes called Projector. Read Model Projections can be realized through a simple set of Domain Event
 * subscribers that are used to generate and update a persistent Read Model.
 */
export default abstract class Projection<
  ProjectedEvent extends DomainEvent = DomainEvent,
  ReadModel extends IdentifiedDomainObject<Identity> = IdentifiedDomainObject<Identity>
> {
  protected abstract repository: Repository<ReadModel>;

  /**
   * Projects the event(s) into the Read Model by simply transforming the data.
   */
  public async project(anEvent: ProjectedEvent): Promise<void>;
  public async project(anEventList: ProjectedEvent[]): Promise<void>;
  public async project(arg: ProjectedEvent | ProjectedEvent[]): Promise<void> {
    if (Array.isArray(arg)) for (const event of arg) await this.apply(event);
    else await this.apply(arg);
  }

  /**
   * Used to mutate the current state of the Read Model by handling the event.
   */
  protected async apply(anEvent: ProjectedEvent): Promise<void> {
    const readModel = await this.when(anEvent);
    await this.repository.save(readModel);
  }

  /**
   * When an Event happens, transform the Read Model.
   */
  protected abstract when(anEvent: ProjectedEvent): PromiseLike<ReadModel>;
}

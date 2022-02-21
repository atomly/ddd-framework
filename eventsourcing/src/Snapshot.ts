import { IdentifiedDomainObject, Identity } from '@ddd-framework/core';
import Projection from './Projection';

export default abstract class Snapshot<
  Id extends Identity,
  State extends Projection,
  Version
> extends IdentifiedDomainObject<Id> {
  constructor(
    public readonly id: Id,
    public readonly state: State,
    public readonly version: Version
  ) {
    super();
  }
}

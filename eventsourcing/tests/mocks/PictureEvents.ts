import DomainEvent from '@ddd-framework/core/DomainEvent';
import Uuid from '@ddd-framework/core/Uuid';

export class PictureCreated extends DomainEvent<Uuid> {
  public pictureId: string;

  public height: number;

  public width: number;

  public uri: string;

  constructor(
    aggregateId: Uuid,
    pictureId: string,
    width: number,
    height: number,
    uri: string
  ) {
    super(aggregateId);
    this.pictureId = pictureId;
    this.height = height;
    this.width = width;
    this.uri = uri;
  }

  public static readonly eventType = 'PictureCreated';

  public static readonly eventVersion = 0;
}

export class PictureResized extends DomainEvent<Uuid> {
  public pictureId: string;

  public height: number;

  public width: number;

  constructor(
    aggregateId: Uuid,
    pictureId: string,
    width: number,
    height: number
  ) {
    super(aggregateId);
    this.pictureId = pictureId;
    this.height = height;
    this.width = width;
  }

  public static readonly eventType = 'PictureResized';

  public static readonly eventVersion = 0;
}

export type PictureEvents = PictureCreated | PictureResized;

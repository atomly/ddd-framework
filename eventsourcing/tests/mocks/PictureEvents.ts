import RichDomainEvent from '../../src/RichDomainEvent';

export class PictureCreated extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string,
    public readonly data: {
      readonly pictureId: string;
      readonly height: number;
      readonly width: number;
      readonly uri: string;
    }
  ) {
    super();
  }

  public static readonly eventType = 'PictureCreated';

  public static readonly eventVersion = '0';
}

export class PictureResized extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string,
    public readonly data: {
      readonly pictureId: string;
      readonly height: number;
      readonly width: number;
    }
  ) {
    super();
  }

  public static readonly eventType = 'PictureResized';

  public static readonly eventVersion = '0';
}

export type PictureEvents = PictureCreated | PictureResized;

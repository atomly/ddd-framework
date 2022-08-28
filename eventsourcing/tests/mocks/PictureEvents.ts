import { DomainEventDto } from '@ddd-framework/core';
import FatDomainEvent from './FatDomainEvent';

export class PictureCreated extends FatDomainEvent {
  public readonly data: {
    readonly pictureId: string;
    readonly height: number;
    readonly width: number;
    readonly uri: string;
  };

  constructor(event: DomainEventDto<PictureCreated>) {
    super(event);
    this.data = event.data;
  }

  public static readonly eventType = 'PictureCreated';

  public static readonly eventVersion = '0';
}

export class PictureResized extends FatDomainEvent {
  public readonly data: {
    readonly pictureId: string;
    readonly height: number;
    readonly width: number;
  };

  constructor(event: DomainEventDto<PictureResized>) {
    super(event);
    this.data = event.data;
  }

  public static readonly eventType = 'PictureResized';

  public static readonly eventVersion = '0';
}

export type PictureEvents = PictureCreated | PictureResized;

import Uuid from '@ddd-framework/core/Uuid';
import Entity from '../../src/Entity';
import * as Events from './PictureEvents';
import PictureId from './PictureId';
import PictureSize from './PictureSize';
import Uri from './Uri';

class ParentId extends Uuid {}

export default class Picture extends Entity<PictureId, Events.PictureEvents> {
  public parentId: ParentId = ParentId.Null;

  public id: PictureId = PictureId.Null;

  public size: PictureSize = PictureSize.Null;

  public uri: Uri = Uri.Null;

  public resize(width: number, height: number) {
    this.apply(
      new Events.PictureResized({
        aggregateId: this.id.unpack(),
        data: {
          pictureId: this.id.unpack(),
          width,
          height
        }
      })
    );
  }

  protected when(event: Events.PictureEvents) {
    if (event instanceof Events.PictureCreated) {
      this.parentId = new ParentId(event.aggregateId);
      this.id = new PictureId(event.data.pictureId);
      this.size = new PictureSize(event.data.width, event.data.height);
      this.uri = new Uri(event.data.uri);
    } else if (event instanceof Events.PictureResized) {
      this.size = new PictureSize(event.data.width, event.data.height);
    }
  }
}

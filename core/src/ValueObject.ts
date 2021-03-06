import Lodash from 'lodash';

/**
 * When you care only about the attributes of an element of the model, classify it as
 * a ValueObject. Make it express the meaning of the attributes it conveys and
 * give it related functionality. Treat the ValueObject as immutable. Don’t give
 * it any identity and avoid the design complexities necessary to maintain Entities.
 */
export default abstract class ValueObject {
  public equals(object: ValueObject): boolean {
    return Lodash.isEqual(this, object);
  }

  public notEquals(object: ValueObject): boolean {
    return !this.equals(object);
  }

  public static isValueObject(obj: unknown): obj is ValueObject {
    return obj instanceof ValueObject;
  }

  public static Null: ValueObject;
}

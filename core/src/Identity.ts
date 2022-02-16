import DomainPrimitive from './DomainPrimitive';

/**
 * Identity `DomainPrimitive` containing unique ID values.
 */
export default abstract class Identity extends DomainPrimitive<string> {
  public toString() {
    return this.value;
  }

  public static Null: Identity;
}

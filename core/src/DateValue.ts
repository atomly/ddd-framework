import DomainPrimitive from './DomainPrimitive';
import ArgumentInvalidException from './exceptions/ArgumentInvalidException';

export default class DateValue extends DomainPrimitive<Date> {
  constructor(value: ConstructorParameters<DateConstructor>[number]) {
    super(new Date(value));
  }

  protected validate(): void {
    if (!(this.value instanceof Date) || Number.isNaN(this.value.getTime())) {
      throw new ArgumentInvalidException<DateValue>('value', 'Invalid date');
    }
  }

  public static now(): DateValue {
    return new DateValue(Date.now());
  }

  public static UTC(...params: Parameters<DateConstructor['UTC']>): DateValue {
    return new DateValue(Date.UTC(...params));
  }

  public static parse(
    ...params: Parameters<DateConstructor['parse']>
  ): DateValue {
    return new DateValue(Date.parse(...params));
  }
}

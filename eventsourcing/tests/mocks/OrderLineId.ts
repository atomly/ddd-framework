import Identity from '@ddd-framework/core/Identity';

export default class OrderLineId extends Identity {
  public static Null = new OrderLineId('');
}

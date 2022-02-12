import Identity from '@ddd-framework/core/Identity';

export default class OrderId extends Identity {
  public static Null = new OrderId('');
}

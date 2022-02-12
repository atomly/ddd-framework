import Identity from '@ddd-framework/core/Identity';

export default class ProductId extends Identity {
  public static Null = new ProductId('');
}

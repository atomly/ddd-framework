export interface ClassOf<
  Type = any,
  ConstructorArgs extends Array<any> = Array<any>
> extends Function {
  new (...args: ConstructorArgs): Type;
}

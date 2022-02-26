export default interface Action<Parameter> {
  (param: Parameter): void;
}

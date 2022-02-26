export default abstract class CommandHandler<Command, Result> {
  public abstract handle(aCommand: Command): Promise<Result>;
}

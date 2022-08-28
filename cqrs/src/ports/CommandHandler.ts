export default abstract class CommandHandler<Command, Result> {
  public abstract execute(aCommand: Command): Promise<Result> | Result;
}

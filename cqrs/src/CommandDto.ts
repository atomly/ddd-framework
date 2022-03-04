import { DataTransferObject } from '@ddd-framework/core';
import Command from './Command';

export type CommandDto<BaseCommand extends Command> = DataTransferObject<
  BaseCommand,
  keyof Command
> &
  Partial<Command>;

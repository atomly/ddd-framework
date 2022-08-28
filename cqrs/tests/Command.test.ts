import { faker } from '@faker-js/faker';
import Command from '../src/Command';

class CreateFakeData extends Command {
  constructor(public readonly data: any) {
    super({});
  }
}

describe('Command', () => {
  test('sets default command ID', () => {
    const command = new CreateFakeData(faker.random.words());

    // Child entity should handle event:
    expect(command.commandId).toBeDefined();
    expect(command.causationId).toBeDefined();
    expect(command.correlationId).toBeDefined();
    expect(command.data).toBeDefined();
  });
});

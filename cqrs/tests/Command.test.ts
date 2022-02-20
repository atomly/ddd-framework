import faker from '@faker-js/faker';
import Uuid from '@ddd-framework/core/Uuid';
import Command from '../src/Command';

class CreateFakeData extends Command {
  constructor(public readonly data: any) {
    super();
  }
}

describe('Command', () => {
  test('sets default command ID', () => {
    const command = new CreateFakeData(faker.random.randomWords());

    // Child entity should handle event:
    expect(command.commandId).toBeInstanceOf(Uuid);
    expect(command.data).toBeTruthy();
  });
});

import faker from '@faker-js/faker';
import DomainEvent from '../src/DomainEvent';

describe('DomainEvent', () => {
  test('aggregateId and metadata are correctly initialized', () => {
    @DomainEvent.Register('OrderCreated', faker.system.semver())
    class OrderCreated extends DomainEvent {
      constructor(
        public readonly eventId: string,
        public readonly aggregateId: string,
        public readonly aggregateVersion: string
      ) {
        super();
      }
    }

    const event = new OrderCreated(
      faker.datatype.uuid(),
      faker.datatype.uuid(),
      faker.datatype.number().toString()
    );

    expect(event.eventType).toBe(OrderCreated.eventType);
    expect(event.eventVersion).toBe(OrderCreated.eventVersion);
    expect(event.occurredOn).toBeTruthy();
  });

  test('throws error if static property eventType is an empty string', () => {
    @DomainEvent.Register('', faker.system.semver())
    class OrderShipped extends DomainEvent {
      constructor(
        public readonly eventId: string,
        public readonly aggregateId: string,
        public readonly aggregateVersion: string
      ) {
        super();
      }
    }

    expect(
      () =>
        new OrderShipped(
          faker.datatype.uuid(),
          faker.datatype.uuid(),
          faker.datatype.number().toString()
        )
    ).toThrow();
  });

  test('throws error if static property eventVersion is an empty string', () => {
    @DomainEvent.Register('OrderShipped', '')
    class OrderShipped extends DomainEvent {
      constructor(
        public readonly eventId: string,
        public readonly aggregateId: string,
        public readonly aggregateVersion: string
      ) {
        super();
      }
    }

    expect(
      () =>
        new OrderShipped(
          faker.datatype.uuid(),
          faker.datatype.uuid(),
          faker.datatype.number().toString()
        )
    ).toThrow();
  });

  test('throws error if static property eventType is not defined', () => {
    class OrderShipped extends DomainEvent {
      constructor(
        public readonly eventId: string,
        public readonly aggregateId: string,
        public readonly aggregateVersion: string
      ) {
        super();
      }

      // public static readonly eventType = '';

      public static readonly eventVersion = faker.system.semver();
    }

    expect(
      () =>
        new OrderShipped(
          faker.datatype.uuid(),
          faker.datatype.uuid(),
          faker.datatype.number().toString()
        )
    ).toThrow();
  });

  test('throws error if static property eventVersion is not defined', () => {
    class OrderShipped extends DomainEvent {
      constructor(
        public readonly eventId: string,
        public readonly aggregateId: string,
        public readonly aggregateVersion: string
      ) {
        super();
      }

      public static readonly eventType = 'OrderShipped';

      // public static readonly eventVersion = faker.system.semver();
    }

    expect(
      () =>
        new OrderShipped(
          faker.datatype.uuid(),
          faker.datatype.uuid(),
          faker.datatype.number().toString()
        )
    ).toThrow();
  });
});

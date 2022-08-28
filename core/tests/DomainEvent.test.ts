import { faker } from '@faker-js/faker';
import DomainEvent from '../src/DomainEvent';

describe('DomainEvent', () => {
  describe('constructor', () => {
    test('aggregateId and metadata are correctly initialized', () => {
      class OrderCreated extends DomainEvent<'OrderCreated'> {
        public static readonly eventType = 'OrderCreated';
        public static readonly eventVersion = faker.system.semver();
      }

      const event = new OrderCreated({
        aggregateId: faker.datatype.uuid()
      });

      expect(event.eventType).toBe(OrderCreated.eventType);
      expect(event.eventVersion).toBe(OrderCreated.eventVersion);
      expect(event.occurredOn).toBeTruthy();
    });

    test('throws error if static property eventType is an empty string', () => {
      class OrderShipped extends DomainEvent<'OrderShipped'> {
        public static readonly eventType = '';
        public static readonly eventVersion = faker.system.semver();
      }

      expect(
        () =>
          new OrderShipped({
            aggregateId: faker.datatype.uuid()
          })
      ).toThrow();
    });

    test('throws error if static property eventVersion is an empty string', () => {
      class OrderShipped extends DomainEvent<'OrderShipped'> {
        public static readonly eventType = 'OrderShipped';
        public static readonly eventVersion = '';
      }

      expect(
        () =>
          new OrderShipped({
            aggregateId: faker.datatype.uuid()
          })
      ).toThrow();
    });

    test('throws error if static property eventType is not defined', () => {
      class OrderShipped extends DomainEvent {
        public static readonly eventVersion = faker.system.semver();
      }

      expect(
        () =>
          new OrderShipped({
            aggregateId: faker.datatype.uuid()
          })
      ).toThrow();
    });

    test('throws error if static property eventVersion is not defined', () => {
      class OrderShipped extends DomainEvent {
        public static readonly eventType = 'OrderShipped';
      }

      expect(
        () =>
          new OrderShipped({
            aggregateId: faker.datatype.uuid()
          })
      ).toThrow();
    });
  });

  describe('Register', () => {
    test('aggregateId and metadata are correctly initialized', () => {
      @DomainEvent.Register('OrderCreated', faker.system.semver())
      class OrderCreated extends DomainEvent<'OrderCreated'> {}

      const event = new OrderCreated({
        aggregateId: faker.datatype.uuid()
      });

      expect(event.eventType).toBe(OrderCreated.eventType);
      expect(event.eventVersion).toBe(OrderCreated.eventVersion);
      expect(event.occurredOn).toBeTruthy();
    });

    test('throws error if static property eventType is an empty string', () => {
      expect(() => {
        @DomainEvent.Register('', faker.system.semver())
        class OrderShipped extends DomainEvent<'OrderShipped'> {}

        return new OrderShipped({
          aggregateId: faker.datatype.uuid()
        });
      }).toThrow();
    });

    test('throws error if static property eventVersion is an empty string', () => {
      expect(() => {
        @DomainEvent.Register('OrderShipped', '')
        class OrderShipped extends DomainEvent<'OrderShipped'> {}

        return new OrderShipped({
          aggregateId: faker.datatype.uuid()
        });
      }).toThrow();
    });
  });
});

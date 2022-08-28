import { DataTransferObject } from '../src/utils/DataTransferObject';
import DateValue from '../src/DateValue';
import Uuid from '../src/Uuid';
import Money from './mocks/Money';
import CurrencyDetails from './mocks/CurrencyDetails';
import Order, { OrderId } from './mocks/Order';

function transform<D>(data: D): DataTransferObject<typeof data> {
  return data as DataTransferObject<typeof data>;
}

describe('DataTransferObject, just testing the TS linter and compiler', () => {
  describe('DomainPrimitives', () => {
    test('DateValue', () => {
      const now = DateValue.now();
      const dto = transform(now);
      expect(dto.value).toBeDefined();
      expect(dto.value === now.unpack()).toBe(true);
    });

    test('Uuid', () => {
      const uuid = Uuid.generate();
      const dto = transform(uuid);
      expect(dto.value).toBeDefined();
      expect(dto.value === uuid.unpack()).toBe(true);
    });
  });

  describe('ValueObject', () => {
    test('Money', () => {
      const money = new Money(10, new CurrencyDetails('USD', '$', 2, true));
      const dto = transform(money);
      expect(dto.amount).toBeDefined();
      expect(dto.currency.currencyCode).toBeDefined();
    });
  });

  describe('AggregateRoot', () => {
    test('Order', () => {
      const order = new Order({
        id: OrderId.generate(),
        status: 'PROCESSING',
        createdAt: DateValue.now()
      });
      const dto = transform(order);
      expect(dto.id.value).toBeDefined();
      expect(dto.status).toBeDefined();
      expect(dto.createdAt).toBeDefined();
    });
  });
});

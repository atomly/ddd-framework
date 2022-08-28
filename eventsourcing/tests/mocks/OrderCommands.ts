import Command from '@ddd-framework/cqrs/Command';
import Address from './Address';
import OrderLine from './OrderLine';
import OrderLineId from './OrderLineId';

export class CreateOrder extends Command {}

export class RestartOrder extends Command {}

export class AddOrderLine extends Command {
  constructor(public readonly anOrderLine: OrderLine) {
    super();
  }
}

export class RemoveOrderLine extends Command {
  constructor(public readonly anOrderLineId: OrderLineId) {
    super();
  }
}

export class SetShippingAddress extends Command {
  constructor(public readonly anAddress: Address) {
    super();
  }
}

export class SetBillingAddress extends Command {
  constructor(public readonly anAddress: Address) {
    super();
  }
}

export class PlaceOrder extends Command {}

export class ShipOrder extends Command {}

export class DeliverOrder extends Command {}

export class MarkOrderAsDelivered extends Command {}

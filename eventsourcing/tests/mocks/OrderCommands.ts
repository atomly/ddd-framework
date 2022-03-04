import Command from '@ddd-framework/cqrs/Command';
import Address from './Address';
import OrderLine from './OrderLine';
import OrderLineId from './OrderLineId';

export class CreateOrder extends Command {}

export class RestartOrder extends Command {}

export class AddOrderLine extends Command {
  public orderLine: OrderLine;

  constructor(anOrderLine: OrderLine) {
    super();
    this.orderLine = anOrderLine;
  }
}

export class RemoveOrderLine extends Command {
  public orderLineId: OrderLineId;

  constructor(anOrderLineId: OrderLineId) {
    super();
    this.orderLineId = anOrderLineId;
  }
}

export class SetShippingAddress extends Command {
  public address: Address;

  constructor(anAddress: Address) {
    super();
    this.address = anAddress;
  }
}

export class SetBillingAddress extends Command {
  public address: Address;

  constructor(anAddress: Address) {
    super();
    this.address = anAddress;
  }
}

export class PlaceOrder extends Command {}

export class ShipOrder extends Command {}

export class DeliverOrder extends Command {}

export class MarkOrderAsDelivered extends Command {}

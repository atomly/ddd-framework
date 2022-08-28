import { DomainEventDto } from '@ddd-framework/core';
import FatDomainEvent from './FatDomainEvent';

export class OrderCreated extends FatDomainEvent {
  public static readonly eventType = 'OrderCreated';

  public static readonly eventVersion = '0';
}

export class OrderReset extends FatDomainEvent {
  public static readonly eventType = 'OrderReset';

  public static readonly eventVersion = '0';
}

export class OrderLineAdded extends FatDomainEvent {
  public readonly data: {
    readonly orderLineId: string;
    readonly orderLineProductId: string;
  };

  constructor(event: DomainEventDto<OrderLineAdded>) {
    super(event);
    this.data = event.data;
  }

  public static readonly eventType = 'OrderLineAdded';

  public static readonly eventVersion = '0';
}

export class OrderLineRemoved extends FatDomainEvent {
  public readonly data: {
    readonly orderLineId: string;
  };

  constructor(event: DomainEventDto<OrderLineRemoved>) {
    super(event);
    this.data = event.data;
  }

  public static readonly eventType = 'OrderLineRemoved';

  public static readonly eventVersion = '0';
}

export class ShippingAddressSet extends FatDomainEvent {
  public readonly data: {
    readonly country: string;
    readonly city: string;
    readonly street: string;
    readonly zipCode: string;
  };

  constructor(event: DomainEventDto<ShippingAddressSet>) {
    super(event);
    this.data = event.data;
  }

  public static readonly eventType = 'ShippingAddressSet';

  public static readonly eventVersion = '0';
}

export class BillingAddressSet extends FatDomainEvent {
  public readonly data: {
    readonly country: string;
    readonly city: string;
    readonly street: string;
    readonly zipCode: string;
  };

  constructor(event: DomainEventDto<BillingAddressSet>) {
    super(event);
    this.data = event.data;
  }

  public static readonly eventType = 'BillingAddressSet';

  public static readonly eventVersion = '0';
}

export class OrderPlaced extends FatDomainEvent {
  public static readonly eventType = 'OrderPlaced';

  public static readonly eventVersion = '0';
}

export class OrderShipped extends FatDomainEvent {
  public static readonly eventType = 'OrderShipped';

  public static readonly eventVersion = '0';
}

export class OrderSentForDelivery extends FatDomainEvent {
  public static readonly eventType = 'OrderSentForDelivery';

  public static readonly eventVersion = '0';
}

export class OrderDelivered extends FatDomainEvent {
  public static readonly eventType = 'OrderDelivered';

  public static readonly eventVersion = '0';
}

export type OrderEvents =
  | OrderCreated
  | OrderReset
  | OrderLineAdded
  | OrderLineRemoved
  | ShippingAddressSet
  | BillingAddressSet
  | OrderPlaced
  | OrderShipped
  | OrderSentForDelivery
  | OrderDelivered;

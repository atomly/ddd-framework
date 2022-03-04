import RichDomainEvent from '../../src/RichDomainEvent';

export class OrderCreated extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string
  ) {
    super();
  }

  public static readonly eventType = 'OrderCreated';

  public static readonly eventVersion = '0';
}

export class OrderReset extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string
  ) {
    super();
  }

  public static readonly eventType = 'OrderReset';

  public static readonly eventVersion = '0';
}

export class OrderLineAdded extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string,
    public readonly data: {
      readonly orderLineId: string;
      readonly orderLineProductId: string;
    }
  ) {
    super();
  }

  public static readonly eventType = 'OrderLineAdded';

  public static readonly eventVersion = '0';
}

export class OrderLineRemoved extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string,
    public readonly data: {
      readonly orderLineId: string;
    }
  ) {
    super();
  }

  public static readonly eventType = 'OrderLineRemoved';

  public static readonly eventVersion = '0';
}

export class ShippingAddressSet extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string,
    public readonly data: {
      readonly country: string;
      readonly city: string;
      readonly street: string;
      readonly zipCode: string;
    }
  ) {
    super();
  }

  public static readonly eventType = 'ShippingAddressSet';

  public static readonly eventVersion = '0';
}

export class BillingAddressSet extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string,
    public readonly data: {
      readonly country: string;
      readonly city: string;
      readonly street: string;
      readonly zipCode: string;
    }
  ) {
    super();
  }

  public static readonly eventType = 'BillingAddressSet';

  public static readonly eventVersion = '0';
}

export class OrderPlaced extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string
  ) {
    super();
  }

  public static readonly eventType = 'OrderPlaced';

  public static readonly eventVersion = '0';
}

export class OrderShipped extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string
  ) {
    super();
  }

  public static readonly eventType = 'OrderShipped';

  public static readonly eventVersion = '0';
}

export class OrderSentForDelivery extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string
  ) {
    super();
  }

  public static readonly eventType = 'OrderSentForDelivery';

  public static readonly eventVersion = '0';
}

export class OrderDelivered extends RichDomainEvent {
  constructor(
    public readonly eventId: string,
    public readonly aggregateId: string
  ) {
    super();
  }

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

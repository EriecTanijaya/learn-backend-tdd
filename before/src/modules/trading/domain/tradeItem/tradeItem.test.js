const { createTradeItem } = require('./tradeItem');

const inputName = 'windy mouse';
const inputPrice = 10;

describe('TradeItem', () => {
  it('should able to create valid trade item', () => {
    const tradeItemOrError = createTradeItem({ name: inputName });

    expect(tradeItemOrError.isSuccess).toBe(true);
  });

  it('should have name', () => {
    const tradeItemOrError = createTradeItem({ name: inputName });

    const tradeItem = tradeItemOrError.getValue();

    expect(tradeItem.name).toBeDefined();
  });

  it('should have price', () => {
    const tradeItemOrError = createTradeItem({ name: inputName, price: inputPrice });

    const tradeItem = tradeItemOrError.getValue();

    expect(tradeItem.price).toBeDefined();
  });

  it('should fail to create trade item with name length with more than 100 characters', () => {
    const tradeItemOrError = createTradeItem({
      name: 'Self-Driving Car with Advanced Safety Features and Luxurious Interior'.repeat(100),
      price: inputPrice,
    });

    expect(tradeItemOrError.isSuccess).toBe(false);
    expect(tradeItemOrError.isFailure).toBe(true);
    expect(tradeItemOrError.getErrorValue()).toBe('trade item name should not exceed 100 chars');
  });

  it('should fail to create trade item with name length less than 4 characters', () => {
    const tradeItemOrError = createTradeItem({
      name: 'x',
      price: inputPrice,
    });

    expect(tradeItemOrError.isSuccess).toBe(false);
    expect(tradeItemOrError.isFailure).toBe(true);
    expect(tradeItemOrError.getErrorValue()).toBe('trade item name should not less than 4 chars');
  });

  it('should fail to create trade item with price less than 1 dollar', () => {
    const tradeItemOrError = createTradeItem({ name: inputName, price: 0 });

    expect(tradeItemOrError.isFailure).toBe(true);
    expect(tradeItemOrError.getErrorValue()).toBe('trade item price should not less than 1 dollar');
  });

  it('should able to get formatted price', () => {
    const formattedPrice = '$ 10';

    const tradeItemOrError = createTradeItem({ name: inputName, price: 10 });

    const tradeItem = tradeItemOrError.getValue();

    expect(tradeItemOrError.isSuccess).toBe(true);
    expect(tradeItem.getFormattedPrice()).toBe(formattedPrice);
  });
});

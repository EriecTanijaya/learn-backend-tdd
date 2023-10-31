const { createTradeItem } = require('./tradeItem');

describe('TradeItem', () => {
  it('should able to create valid trade item', () => {
    const tradeItemOrError = createTradeItem();

    expect(tradeItemOrError.isSuccess).toBe(true);
  });

  it('should have name', () => {
    const tradeItem = createTradeItem({ name: 'windy mouse' }).getValue();

    expect(tradeItem.name).toBe('windy mouse');
  });

  it('should have price', () => {
    const tradeItem = createTradeItem({ price: 10 }).getValue();

    expect(tradeItem.price).toBe(10);
  });

  it.todo('should fail to create trade item with name length with more than 100 characters');

  it.todo('should fail to create trade item with name length less than 4 characters');

  it.todo('should fail to create trade item with price less than 1 dollar');

  it.todo('should able to get formatted price');

  // it.todo('should fail to create trade item with price less than 10 cent');
});

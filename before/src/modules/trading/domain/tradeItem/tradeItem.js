const { createSuccessResult, createFailureResult } = require('../../../../shared/result');

/**
 * @typedef TradeItem
 * @prop {string} name
 * @prop {number} price
 * @prop {() => string} getFormattedPrice
 */

exports.createTradeItem = ({ name, price }) => {
  if (name.length > 100) {
    return createFailureResult('trade item name should not exceed 100 chars');
  }

  if (name.length < 4) {
    return createFailureResult('trade item name should not less than 4 chars');
  }

  if (price < 1) {
    return createFailureResult('trade item price should not less than 1 dollar');
  }

  const tradeItem = {
    name,
    price,
    getFormattedPrice() {
      return `$ ${this.price}`;
    },
  };

  return createSuccessResult(tradeItem);
};

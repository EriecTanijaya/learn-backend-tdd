const { createSuccessResult } = require('../../../../shared/result');

exports.createTradeItem = ({ name } = {}) => {
  const tradeItem = { name };

  return createSuccessResult(tradeItem);
};

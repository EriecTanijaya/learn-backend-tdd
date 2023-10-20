const { createFailureResult } = require('../../../../shared/result');

exports.createPostTradeItemErrors = {
  traderDoesntExists(traderId) {
    return createFailureResult(`Trader with id ${traderId} doesn't exists`);
  },
  MaxPostedTradeItemsExceeded() {
    return createFailureResult('MaxPostedTradeItemsExceededError');
  },
};

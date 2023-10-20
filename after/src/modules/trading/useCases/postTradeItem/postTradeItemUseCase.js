const { createSuccessResult, createFailureResult } = require('../../../../shared/result');
const { createPostTradeItemErrors } = require('./postTradeItemErrors');
const { v4: uuidv4 } = require('uuid');

/**
 * @param {Object} deps
 * @param {import('../../repos/mongooseTradeItemRepo').TradeItemRepo} deps.tradeItemRepo
 */
exports.createPostTradeItemUseCase = ({ tradeItemRepo, traderRepo }) => {
  return {
    async execute({ name, price, traderId }) {
      if (!(await traderRepo.exists(traderId))) {
        return createPostTradeItemErrors.traderDoesntExists(traderId);
      }

      const tradeItemsByTrader = await tradeItemRepo.getItems({ traderId });

      if (tradeItemsByTrader.length) {
        return createPostTradeItemErrors.MaxPostedTradeItemsExceeded();
      }
    },
  };
};

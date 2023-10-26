const { replaceValue } = require('../../../shared/replaceValue');

/**
 * @typedef {Object} TradeItemRepo
 * @property {(id: string) => Promise<Boolean>} exists
 * @property {(tradeItem) => Promise<void>} save
 */

exports.createMongooseTradeItemRepo = ({ TradeItemModel } = {}) => {
  return {
    async exists(id) {
      const tradeItem = await TradeItemModel.findOne({ trade_item_id: id });
      const found = !!tradeItem === true;
      return found;
    },
    async save(tradeItem) {
      if (await this.exists(tradeItem.tradeItemId)) {
        const mongooseTradeItem = await TradeItemModel.findOne({ trade_item_id: tradeItem.tradeItemId });

        replaceValue(mongooseTradeItem, tradeItem);

        await mongooseTradeItem.save();
      } else {
        await TradeItemModel.create({
          trade_item_id: tradeItem.tradeItemId,
          name: tradeItem.name,
          price: tradeItem.price,
        });
      }
    },
    async getItems() {
      return [];
    },
  };
};

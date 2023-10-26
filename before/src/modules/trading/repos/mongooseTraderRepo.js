const { replaceValue } = require('../../../shared/replaceValue');

exports.createMongooseTraderRepo = ({ TraderModel } = {}) => {
  return {
    async exists(id) {
      const trader = await TraderModel.findOne({ trader_id: id });
      const found = !!trader === true;
      return found;
    },
    async save(trader) {
      if (await this.exists(trader.traderId)) {
        const mongooseTrader = await TraderModel.findOne({ trader_id: trader.traderId });

        replaceValue(mongooseTrader, trader);

        await mongooseTrader.save();
      } else {
        await TraderModel.create(trader);
      }
    },
  };
};

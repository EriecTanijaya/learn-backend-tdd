// const tradeItemController = (req, res) => {
//   useCase();
// };

const factoryTradeItemController = (service) => {
  return {
    execute: (req, res) => {
      service.postTradeItem(req.body);

      res.sendStatus(200);
    },
  };
};

module.exports = factoryTradeItemController;

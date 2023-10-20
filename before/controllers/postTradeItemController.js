const postTradeItemController = async (req, res) => {
  if (!req.body.traderId) {
    return res.status(400).send(`traderId is required`);
  }

  if (!req.body.name) {
    return res.status(400).send(`name is required`);
  }

  if (!req.body.price) {
    return res.status(400).send(`price is required`);
  }

  await TradeItemModel.create({ trade_item_id: uuidv4(), name: req.body.name, price: req.body.price });

  res.sendStatus(200);
};

module.exports = postTradeItemController;

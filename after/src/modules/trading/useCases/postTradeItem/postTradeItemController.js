exports.createPostTradeItemControllers = (postTradeItemUseCase) => {
  return async (req, res) => {
    const result = await postTradeItemUseCase.execute({
      name: req.body.name,
      price: req.body.price,
      traderId: req.body.traderId,
    });

    if (result.isFailure) {
      return res.status(400).send(result.getErrorValue());
    }

    return res.sendStatus(200);
  };
};

const factoryTradeItemController = require('./tradeController');
const tradeRepo = require('./tradeRepo');
const TradeService = require('./tradeService');
const tradeService = require('./tradeService');

describe('TradeItemController', () => {
  it('should be able to call correct usecase', () => {
    const stubReq = {};
    const stubRes = {
      sendStatus(number) {},
    };

    const fakeTradeRepo = tradeRepo;
    const tradeService = new TradeService(fakeTradeRepo);

    const spyController = jest.spyOn(tradeService, 'postTradeItem');

    const controller = factoryTradeItemController(tradeService);

    controller.execute(stubReq, stubRes);

    expect(spyController).toHaveBeenCalled();
  });
});

/**
 *
 *
 * input from outside ->  controller -> use case (service) -> output controller
 *
 *
 */

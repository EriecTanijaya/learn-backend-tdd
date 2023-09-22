// * user story: as a trader, i want to be able to post my trade item so that my item can be traded
// *
// *  Scenario: Trader succeed to post item to be trade
// *    Given a valid trader
// *    When trader is post the trade item with valid details
// *    Then the item should be listed

const tradeRepo = require('./tradeRepo');
const TradeService = require('./tradeService');

describe('Trader succeed to post item to be trade', () => {
  describe('Given a valid trader', () => {
    describe('When trader is post the trade item with valid details', () => {
      test('Then the item should be listed', () => {
        const tradeItem = {
          name: 'keyboard frozen',
          price: 123,
        };

        const spySaveTradeRepo = jest.spyOn(tradeRepo, 'save');

        // tradeRepo as test double
        const tradeService = new TradeService(tradeRepo);

        tradeService.postTradeItem(tradeItem);

        expect(spySaveTradeRepo).toHaveBeenCalled();
      });
    });
  });
});

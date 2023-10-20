/**
 * as a trader, i want to be able to post my trade item so that my item can be traded
 */

const { createPostTradeItemErrors } = require('./postTradeItemErrors');
const { createPostTradeItemUseCase } = require('./postTradeItemUseCase');

describe('PostTradeItemUseCase', () => {
  describe('Scenario: Trader success post trade item', () => {
    describe('Given valid trade item details', () => {
      describe('When Trader attempt to post trade item', () => {
        test('Then the trade item should posted successfully', async () => {
          const mockTradeItemRepo = {
            exists: jest.fn(),
            save: jest.fn(),
            getItems: jest.fn(() => []),
          };

          const mockTraderRepo = {
            exists: jest.fn(() => true),
            save: jest.fn(),
          };

          const postTradeItemUseCase = createPostTradeItemUseCase({
            tradeItemRepo: mockTradeItemRepo,
            traderRepo: mockTraderRepo,
          });

          const result = await postTradeItemUseCase.execute({ traderId: '1', name: 'frozen keyboard', price: 10 });

          expect(result.isSuccess).toBe(true);
          expect(mockTradeItemRepo.save).toHaveBeenCalled();
        });
      });
    });
  });

  describe('Scenario: Trader fail to post trade item when already has remaining unsold trade item', () => {
    describe('Given Trader has unsold trade item', () => {
      describe('When Trader attempt to post valid trade item', () => {
        test('Then the trade item should not be posted And Trader receive MaxPostedTradeItemsExceededError', async () => {
          // arrange
          const existedTradeItem = {
            name: 'frozen keyboard',
            price: 10,
          };

          const mockTradeItemRepo = {
            exists: jest.fn(),
            save: jest.fn(),
            getItems: jest.fn(() => [existedTradeItem]),
          };

          const mockTraderRepo = {
            exists: jest.fn(() => true),
            save: jest.fn(),
          };

          const postTradeItemUseCase = createPostTradeItemUseCase({
            traderRepo: mockTraderRepo,
            tradeItemRepo: mockTradeItemRepo,
          });

          // act
          const result = await postTradeItemUseCase.execute({ traderId: '1', name: 'heated keyboard', price: 10 });

          // assert
          expect(result.isFailure).toBe(true);

          const maxPostedTradeItemsExceededError = createPostTradeItemErrors.MaxPostedTradeItemsExceeded();
          expect(result.getErrorValue()).toEqual(maxPostedTradeItemsExceededError.getErrorValue());
        });
      });
    });
  });

  describe('Scenario: Trader fail to post trade item with already exists name', () => {
    describe('Given Trader already post an trade item named "frozen keyboard"', () => {
      describe('When Trader attempt to post valid trade item named "frozen keyboard"', () => {
        test('Then the trade item should not be posted And Trader receive PostedTradeItemNameExistsError', () => {});
      });
    });
  });
});

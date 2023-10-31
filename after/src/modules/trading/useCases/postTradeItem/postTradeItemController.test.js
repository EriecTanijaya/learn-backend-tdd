const { createSuccessResult } = require('../../../../shared/result');
const { createPostTradeItemControllers } = require('./postTradeItemController');

describe('PostTradeItemController', () => {
  test('should return 200 http code when the use case is executed successfully', async () => {
    const mockPostTradeItemUseCase = {
      execute: jest.fn(() => createSuccessResult()),
    };

    const postTradeItemController = createPostTradeItemControllers(mockPostTradeItemUseCase);

    const stubRequest = {
      body: {
        traderId: '1',
        name: 'frozen keyboard',
        price: 10,
      },
    };
    const stubResponse = {
      status: 500,
      sendStatus(code) {
        this.status = code;
      },
    };

    await postTradeItemController(stubRequest, stubResponse);

    expect(stubResponse.status).toBe(200);
  });
});

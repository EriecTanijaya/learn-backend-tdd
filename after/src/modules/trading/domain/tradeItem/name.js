const { createSuccessResult, createFailureResult } = require('../../../../shared/result');

exports.createTradeItemName = (inputName) => {
  const MIN_NAME_LENGTH = 4;
  const MAX_NAME_LENGTH = 100;

  if (inputName.length > MAX_NAME_LENGTH) {
    return createFailureResult(`Trade item name should not exceed ${MAX_NAME_LENGTH} chars`);
  }

  if (inputName.length < MIN_NAME_LENGTH) {
    return createFailureResult(`Trade item name should not less than ${MIN_NAME_LENGTH} chars`);
  }

  const name = inputName;

  return createSuccessResult(name);
};

function createResult({ isFailure, value, error }) {
  return {
    isSuccess: !isFailure,
    isFailure,
    getValue() {
      if (isFailure) {
        throw new Error(`Can't get value from the failure result`);
      }

      return value;
    },
    getErrorValue() {
      return error;
    },
  };
}

exports.createSuccessResult = (value) => {
  return createResult({ isFailure: false, value });
};

exports.createFailureResult = (error) => {
  return createResult({ isFailure: true, error });
};

const ErrorMessage = {
  missingUsername: '"username" is required',
  missingPassword: '"password" is required',
  missingLevel: '"level" is required',
  missingName: '"name" is required',
  missingAmount: '"amount" is required',
  missingClass: '"classe" is required',
  amountIsNotAString: '"amount" must be a string',
  nameIsNotAString: '"name" must be a string',
  classIsNotAString: '"classe" must be a string',
  levelIsNotANumber: '"level" must be a number',
  invalidNameLength: '"name" length must be at least 3 characters long',
  invalidAmountLength: '"amount" length must be at least 3 characters long',
  invalidUsername: 'Username or password invalid',
  invalidPassword: 'Username or password invalid',
  invalidUsernameType: '"username" must be a string',
  invalidUsernameLength: '"username" length must be at least 3 characters long',
  invalidPasswordType: '"password" must be a string',
  invalidPasswordLength: '"password" length must be at least 8 characters long',
  invalidClassLength: '"classe" length must be at least 3 characters long',
  invalidLevel: '"level" must be greater than or equal to 1',
};

export default ErrorMessage;
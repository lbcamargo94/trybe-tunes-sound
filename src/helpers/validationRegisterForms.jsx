// Name validate.
const MIN_LENGTH_NAME = 3;
const MAX_LENGTH_NAME = 12;
// Passeord validate.
const MIN_LENGTH_PASSWORD = 6;
const MAX_LENGTH_PASSWORD = 12;
// Email validate.
const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// email field validation.
export const emailValidation = (email) => {
  return REGEX_EMAIL.test(email);
};

export const passwordValidation = (password) => {
  if (password.length < MIN_LENGTH_PASSWORD) return false;
  if (password.length > MAX_LENGTH_PASSWORD) return false;
  return true
};

export const nameValidation = (name) => {
  if (name.length < MIN_LENGTH_NAME) return false;
  if (name.length > MAX_LENGTH_NAME) return false;
  return true;
}

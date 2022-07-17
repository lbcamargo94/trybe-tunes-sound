// Name validate
export const MIN_LENGTH_NAME = 3;
export const MAX_LENGTH_NAME = 12;
// Passeord validate
export const MIN_LENGTH_PASSWORD = 6;
export const MAX_LENGTH_PASSWORD = 24;
// Email validate
const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


export const emailValidation = (email) => {
  const validEmail = {
    status: true,
    message: 'Valid email!',
    color: 'green',
  };

  const invalidEmail = {
    status: false,
    message: 'Invalid email!',
    color: 'red',
  };

  return REGEX_EMAIL.test(email) ? validEmail : invalidEmail;
};

export const fieldsValidation = (field, validate) => {
  const validField = {
    status: true,
    message: `Valid ${field}!`,
    color: 'green',
  };

  const invalidMinField = {
    status: false,
    message: `Your ${field} must be longer than ${validate} characters.`,
    color: 'red',
  };

  const invalidMaxField = {
    status: false,
    message: `Your ${field} must be less than ${validate} characters.`,
    color: 'red',
  };

  return field < validate ? invalidMinField :
  field > validate ? invalidMaxField : validField; 
};

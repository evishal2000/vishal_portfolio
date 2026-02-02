export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  // Basic phone validation - allows various formats
  const re = /^[\d\s\-\+\(\)]+$/;
  return re.test(phone) && phone.length >= 10;
};

export const validateRequired = (value) => {
  return value.trim().length > 0;
};

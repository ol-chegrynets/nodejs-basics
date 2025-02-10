export const parseNumber = (number, defaultValue = 0) => {
  // const isString = typeof number === 'string';
  // if (!isString) return defaultValue;
  if (!(typeof number === 'string')) return defaultValue;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return defaultValue;
  }

  return parsedNumber;
};

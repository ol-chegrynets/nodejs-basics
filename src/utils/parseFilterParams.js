import { GENDERS } from '../constants/gender.js';
import { parseNumber } from './parseNumber.js';

const parseGender = (gender) => {
  if (!(typeof gender === 'string')) return;
  if (Object.values(GENDERS).includes(gender)) return gender;
  return console.log('Filter gender is not valid');
};

const parseBoolean = (onDuty) => {
  if (!(typeof onDuty === 'string')) return;
  if (['true', 'false'].includes(onDuty)) return JSON.parse(onDuty);
};

// const parseBoolean = (value) => {
//   const isString = typeof value === 'string';
//   if (!isString) return;

//   const trimmedValue = value.trim().toLowerCase();
//   if (trimmedValue === 'true') {
//     return true;
//   } else if (trimmedValue === 'false') {
//     return false;
//   }
//   return;
// };

export const parseFilterParams = (query) => {
  const { gender, maxAge, minAge, maxAvgMark, minAvgMark, onDuty } = query;

  const parsedGender = parseGender(gender);
  const parsedMaxAge = parseNumber(maxAge);
  const parsedMinAge = parseNumber(minAge);
  const parsedMaxAvgMark = parseNumber(maxAvgMark);
  const parsedMinAvgMark = parseNumber(minAvgMark);
  const parsedOnDuty = parseBoolean(onDuty);

  return {
    gender: parsedGender,
    maxAge: parsedMaxAge,
    minAge: parsedMinAge,
    maxAvgMark: parsedMaxAvgMark,
    minAvgMark: parsedMinAvgMark,
    onDuty: parsedOnDuty,
  };
};

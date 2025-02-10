import { GENDERS } from '../constants/gender.js';
import { parseNumber } from './parseNumber.js';

const parseGender = (gender) => {
  if (!(typeof gender === 'string')) return;
  if (Object.values(GENDERS).includes(gender)) return gender;
  return console.log('Filter gender is not valid');
};

const parseBoolean = (onDuty) => {
  if ([true, false].includes(onDuty)) return JSON.parse(onDuty);
};

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

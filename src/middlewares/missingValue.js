import createHttpError from 'http-errors';

export const missingValue = (value) => {
  if (value === null) {
    // throw createHttpError(404, 'Student not found');
    throw createHttpError[404]('Student not found');
    // return next(new createHttpError.NotFound('Student not found:('));
  }
};

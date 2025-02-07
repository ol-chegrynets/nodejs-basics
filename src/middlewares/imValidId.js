import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

// export const isValidId = (req, res, next) => {
//   const { studentId } = req.params;
//   if (!isValidObjectId(studentId)) {
//     next(createHttpError(400, ` is not a valid Mongo Id`));
//   }

//   next();
// };
export const isValidId =
  (name = 'id') =>
  (req, res, next) => {
    if (!isValidObjectId(req.params[name])) {
      next(createHttpError(400, `${name} is not a valid Mongo Id`));
    }

    next();
  };


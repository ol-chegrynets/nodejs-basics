import Joi from 'joi';

const userData = {
  'string.base': 'Username should be a string',
  'string.min': 'Username should have at least {#limit} characters',
  'string.max': 'Username should have at most {#limit} characters',
  'any.required': 'Username is required',
};

export const createStudentSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages(userData, { abortEarly: false }),
  age: Joi.number().integer().min(6).max(16).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  avgMark: Joi.number().min(2).max(12).required(),
  onDuty: Joi.boolean(),
});

// const dataToValidate = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   age: 12,
//   gender: 'male',
//   avgMark: 10.2,
// };

// const validationResult = createStudentSchema.validate(dataToValidate);
// if (validationResult.error) {
//   console.error(validationResult.error.message);
// } else {
//   console.log('Data is valid!');
// }
export const updateStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  age: Joi.number().integer().min(6).max(16),
  gender: Joi.string().valid('male', 'female', 'other'),
  avgMark: Joi.number().min(2).max(12),
  onDuty: Joi.boolean(),
});

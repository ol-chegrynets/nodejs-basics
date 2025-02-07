import { HttpError } from 'http-errors';
export const errorHandlerMiddlewqares = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  if (err.isJoi) {
    return res.status(444).json({
      status: 444,
      message: err.message,
      name: 'Validation Error',
    });
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};

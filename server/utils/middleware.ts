import express from 'express';

export const requestLogger = (
  request: express.Request,
  _response: express.Response,
  next: express.NextFunction
): void => {
  console.log('\n/*** Request Made ***/\n');
  const startTime = new Date();
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);

  const endTime = new Date();
  console.log(
    '\n/*** Request Completed in',
    (endTime.getTime() - startTime.getTime()) / 1000,
    'sec ***/\n'
  );
  return next();
};

export const unknownEndpoint = (
  _request: express.Request,
  response: express.Response
): void => {
  response.status(404).send({ error: 'unknown endpoint' });
};

export const errorHandler = (
  error: Error,
  _request: express.Request,
  response: express.Response,
  _next: express.NextFunction
): express.Response => {
  console.log(error.message);
  if (error.name === 'CastError') {
    return response.status(400).send({ errors: [{ msg: 'Malformatted ID' }] });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ errors: [{ msg: error.message }] });
  } else if (error.name === 'TokenExpiredError') {
    return response.status(400).json({ errors: [{ msg: 'Login Again' }] });
  }
  return response.status(500).json({ errors: [{ msg: 'Server error' }] });
};

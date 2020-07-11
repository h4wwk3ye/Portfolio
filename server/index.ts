import express from 'express';
require('express-async-errors');
import cors from 'cors';
import {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} from './utils/middleware';
import connectDB from './mongo';

import users from './controllers/users';
import auth from './controllers/auth';
import profile from './controllers/profile';

const app = express();
// connect to DB
void connectDB();

const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger); //logs every request to the console

// Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);

// Unknown endpoint
app.use(unknownEndpoint);
// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from 'express';
require('express-async-errors');
import cors from 'cors';
import {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} from './utils/middleware';
import connectDB from './mongo';
import path from 'path';

import users from './controllers/users';
import auth from './controllers/auth';
import profile from './controllers/profile';

const app = express();
// connect to DB
connectDB();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger); //logs every request to the console

// Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);

// serving static files
console.log();

app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

app.get('*', (_request, response) => {
  response.sendFile(
    path.resolve(__dirname, '..', 'client', 'build', 'index.html')
  );
});

// Unknown endpoint
app.use(unknownEndpoint);
// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

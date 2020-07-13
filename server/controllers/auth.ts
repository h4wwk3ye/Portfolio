import express, { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import config from 'config';
import bcrypt from 'bcryptjs';
import auth from '../utils/auth';
import User from '../models/User';
const authRouter = express.Router();

/**
 * @route         GET /api/auth
 * @description   Get auth user
 * @access        PRIVATE
 */
authRouter.get(
  '/',
  auth,
  async (request, response): Promise<Response> => {
    const user = await User.findById(request.user.id).select('-password');
    return response.json(user);
  }
);

/**
 * @route         POST /api/auth
 * @description   Authenticate user and get token (Login)
 * @access        PUBLIC
 */
authRouter.post(
  '/',
  [
    check('email', 'Email is invalid').isEmail(),
    check('password', 'Please enter a password').not().isEmpty(),
  ],
  async (request: Request, response: Response): Promise<Response> => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    interface Body {
      email: string;
      password: string;
    }
    const body: Body = request.body as Body;
    const { email, password } = body;

    // Check if user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return response.status(400).json({
        errors: [
          { msg: 'Invalid email or password', param: 'email' },
          { msg: 'Invalid email or password', param: 'password' },
          // both of these so as to show bottom text on both fields
        ],
      });
    }

    // Matching password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return response.status(400).json({
        errors: [
          { msg: 'Invalid email or password', param: 'email' },
          { msg: 'Invalid email or password', param: 'password' },
          // both of these so as to show bottom text on both fields
        ],
      });
    }

    // creating jwt tokem
    const token = jwt.sign(
      { user: { id: user.id as string } },
      config.get('secret')
    );

    return response.json({ token });
  }
);

export default authRouter;

import express, { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import config from 'config';
import { IUser } from '../models/User';

const userRouter = express.Router();

/**
 * @route         POST /api/users
 * @description   Register User
 * @access        PUBLIC
 */
userRouter.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is invalid').isEmail(),
    check(
      'password',
      'Please enter a password of 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (request: Request, response: Response): Promise<Response> => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const body: IUser = request.body as IUser;
    const { name, email, password } = body;

    // Check if user already exists
    let user = await User.findOne({ email: email });
    if (user) {
      return response
        .status(400)
        .json({ errors: [{ msg: 'User already exists' }] });
    }

    // Hashing the password
    const passwordHash = await bcryptjs.hash(password, 10);

    user = new User({
      name,
      email,
      password: passwordHash,
    });

    await user.save();

    // creating jwt tokem
    const token = jwt.sign(
      { user: { id: <string>user.id } },
      config.get('secret'),
      {
        expiresIn: 50000,
      }
    );

    return response.json({ token });
  }
);

export default userRouter;

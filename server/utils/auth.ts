import jwt from 'jsonwebtoken';
import config from 'config';
import { Request, Response, NextFunction } from 'express';

export default function (
  request: Request,
  response: Response,
  next: NextFunction
): Response | void {
  const token = request.header('x-auth-token');
  if (!token) {
    return response
      .status(401)
      .json({ msg: 'No token found, Authorization denied' });
  }

  interface Decoded {
    user: {
      id: string;
    };
  }

  const decoded: Decoded = jwt.verify(token, config.get('secret')) as Decoded;
  request['user'] = decoded['user'];
  next();
}

import { Request, Response, NextFunction } from 'express';
import firebase from '../config/firebaseConfig';

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headerToken = req.headers.authorization;
  if (!headerToken) {
    return res.send({ message: 'No token provided' }).status(401);
  }

  if (headerToken && headerToken.split(' ')[0] !== 'Bearer') {
    res.send({ message: 'Invalid token' }).status(401);
  }

  const token = headerToken.split(' ')[1];
  firebase.admin
    .auth()
    .verifyIdToken(token)
    .then(() => next())
    .catch(() => res.send({ message: `Couldn't authorize` }).status(403));
};

export default authMiddleware;

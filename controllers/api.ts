import { Request, Response, NextFunction } from 'express';
import firebase from '../config/firebaseConfig';

export const addUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, data } = req.body;
    await firebase.db.collection('USERS').doc(userId).set(data);
    res.status(200).json({ message: 'User data added successfully' });
  } catch (error) {
    next(error);
  }
};

export const updateUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, data } = req.body;
    await firebase.db
      .collection('USERS')
      .doc(userId)
      .set(data, { merge: true });
    res.status(200).json({ message: 'User data updated successfully' });
  } catch (error) {
    next(error);
  }
};

export const fetchUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const userDoc = await firebase.db.collection('USERS').doc(userId).get();
    res.status(200).json(userDoc.data());
  } catch (error) {
    next(error);
  }
};

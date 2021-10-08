import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { envs } from '../configs';
import { UserProvider } from '../providers';

const userProvider = new UserProvider();

export async function authenticateToken(
  req: any,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  try {
    const payload = jwt.verify(token, envs.SECRECT_TOKEN_LOGIN) as {
      id: string;
    };
    const userFound = await userProvider.getUserById(payload.id);

    if (!userFound) {
      return res.json({ message: 'Usuario no encontrado' });
    }
    req.user = userFound;
    req.isAuth = Boolean(userFound);

    next();
  } catch (err) {
    req.isAuth = false;
    req.user = null;
    next();
  }
}

import { Request, Response } from 'express';
import { hashSync, genSaltSync } from 'bcryptjs';
import * as yup from 'yup';

export class LoginController {
  async register(req: Request, res: Response) {
    const { name, lastname, birthday, email, password } = req.body;

    const salt = genSaltSync(12);
    const passwordHash = hashSync(password, salt);

    const newUser = {
      name,
      lastname,
      birthday,
      email,
      password: passwordHash,
    };

    console.log(newUser);

    res.send('Hola');
  }
}

import jwt from 'jsonwebtoken';
import User from '../models/User';

export default (req, res, next) => {
  const header = req.headers.authorization; // на сервер пришел заголовок
  let token;
  if (header) token = header.split(' ')[1]; // разделили заголовок на массив, берем 2-й элемент

  if (token) {
    // если в заголовке есть токен
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ errors: { global: 'Invalid token' } });
      } else {
        User.findOne({ email: decoded.email })
          .then(user => {
            console.log('--CHECKING: emeil--', user);

            req.currentUser = user;
            next();
          })
          .catch(error => console.log('--CHECKING: error--', error));
      }
    });
  } else {
    res.status(401).json({ errors: { global: 'No token' } });
  }
};

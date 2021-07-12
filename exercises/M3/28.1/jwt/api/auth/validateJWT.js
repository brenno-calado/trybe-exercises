const jwt = require('jsonwebtoken');
const model = require('../../models/user');
const SECRET = process.env.SECRET;
const JWT_CONFIG = {
  expiresIn: '15m',
  algorithm: 'HS256'
};

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, segredo);

    const user = await model.findUser(decoded.data.username);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    console.log(user);
    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
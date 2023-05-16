import jwt from 'jsonwebtoken';

const generarToken = (id) => {

  return jwt.sign({id}, process.env.SECRET_KEY, {
    expiresIn: '10d'
  });

};

export  {
  generarToken
}
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const checkAuth = async (request, response, next) => {
  let token;
  
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = request.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      request.usuario = await User.findById(decoded.id).select(
        "-password -createdAt -updatedAt -__v"
      );

      return next();
    } catch (error) {
      return response.status(404).json({ msg: "Hubo un error" });
    }
  }

  if (!token) {
    const error = new Error("Token no válido");
    return response.status(401).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
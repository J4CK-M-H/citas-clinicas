import { generarToken } from "../helpers/generarToken.js";
import Consulta from "../models/Consulta.js";
import User from "../models/User.js";


const autenticar = async (request,response) => {

  const { email, password, tipo } = request.body;

  const usuarioExist = await User.findOne({ email });

  if( usuarioExist && (await usuarioExist.comprobarPassword(password)) ) {
    const userRol = await User.find({email}).where('rol').equals(tipo);

    // if(usuarioExist.rol !== tipo) {
    if(!userRol.length) {
      return response.status(400).json({msg: `No existe un ${ tipo } con estas credenciales`});
    }else{

      const [ user ] = userRol;

      return response.json({
        _id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        direccion: user.direccion,
        especialidad: ((user.especialidad).length ? user.especialidad : null),
        email: user.email,
        isAdmin: user.isAdmin,
        token: generarToken(user._id)
      });
    }

  }else {
    return response.status(400).json({msg: "Email y/o Password incorrecto"})
  }

};

const registrar = async (request,response) => {


  const { nombre, apellido, email, password, rol, direccion, especialidad } = request.body;

  // console.log(request.body);

  const usuarioExist = await User.findOne({ email });

  if( usuarioExist ){
    return response.status(400).json({msg: "El usuario ya existe"})
    // return response.status(401).json({msg: "El email y/o password es incorrecto"})
  }else {

    // let isAdmin = false;

    if(rol === 'administrador') {
      request.body.isAdmin = true;
      console.log(request.body);
      // isAdmin = true;
    }

    const usuario = User(request.body);
    // console.log(usuario);
    await usuario.save();
    return response.json(usuario);
  }

};

const perfil = async (request,response) => {

  const { usuario } = request;
  response.json( usuario );

};

const registrarDoctor = async (request,response) => {

  const { nombre, apellido, email, direccion, password, especialidad  } = request.body;

  const usuarioExist = await User.findOne({ email });

  if( usuarioExist ){
    return response.status(400).json({msg: "El usuario ya existe"})
    // return response.status(401).json({msg: "El email y/o password es incorrecto"})
  }else {

    try {
      const usuario = User({
        nombre,
        apellido,
        email,
        direccion,
        password,
        especialidad,
        rol: 'doctor',
        isAdmin: false
      });
      await usuario.save();
      return response.json(usuario);
    } catch (error) {
      console.log(error);
    }
    
  }

};

const editarPerfil = async (request,response) => {

  const { id } = request.params

  const usuario = await User.findById(id);

  if(!usuario) {
    console.log("No existe el usuario");
  }

  usuario.nombre = request.body.nombre;
  usuario.apellido = request.body.apellido;
  usuario.email = request.body.email;
  usuario.direccion = request.body.direccion;
  await usuario.save();
  response.json(usuario);

};

const historialConsultas = async(request,response) => {

  const historial = await Consulta.find().
    populate('doctor').
    populate('paciente');

  return response.json(historial);

};

export {
  autenticar,
  registrar,
  perfil,
  registrarDoctor,
  editarPerfil,
  historialConsultas
}
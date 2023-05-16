import Consulta from "../models/Consulta.js";
import Paciente from "../models/Paciente.js";
import User from "../models/User.js";


const obtenerDoctores = async (request, response) => {

  const { usuario } = request;


  if(!usuario.isAdmin){
    const error = new Error('No tienes los permisos para consultar esta información')
    return response.json({msg: error.message})
  }else {
    
    const doctores = await User.find().where('rol').equals('doctor');
    response.json(doctores);

  }

  
};

const obtenerDoctor = async (request, response) => {

  const { id } = request.params;

  const doctor = await User.findById(id);

  if (doctor) {

    return response.json(doctor);

  } else {
    const error = new Error('No existe información relacionada');
    return response.status(400).json({ msg: error.message });

  }

}

const registrarConsulta = async (request, response) => {

  const { nombre, apellido, edad, dni, sintomas, diagnostico, doctor } = request.body

  try {
    const paciente = await Paciente({ nombre, apellido, edad, documento: dni });
    await paciente.save();
    // console.log(paciente);

    const { _id: idPaciente } = paciente;

    const consulta = await Consulta({ sintomas, diagnostico, doctor, paciente: idPaciente });
    await consulta.save();
    // console.log(consulta);

    return response.json({msg: "Consulta Registrada"});

  } catch (error) {
    return response.json({msg: "No se pudo registrar la consulta"});
    // console.log(error);
  }

};

const obtenerConsultas = async(request,response) => {

  const { doctor: idDoctor } = request.params;
  console.log('asdas',request.params);

  const consultas = await Consulta.find().where('doctor').equals(idDoctor)
    .populate('paciente','-__v');

  return response.json(consultas);

};

const obtenerConsulta = async(request,response) => {


  const { id } = request.params;

  const consulta = await Consulta.findById(id)
    .populate('paciente','-__v')
    .populate('doctor','-__v');

  if(consulta) {
    return response.json(consulta);
  }else{
    console.log(consulta);
    return response.status(404).json({msg: 'No existe la consulta'})
  }


};

export {
  obtenerDoctores,
  obtenerDoctor,
  registrarConsulta,
  obtenerConsultas,
  obtenerConsulta
}
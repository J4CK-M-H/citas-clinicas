import Paciente from "../models/Paciente";


const obtenerPaciente = (request,response) => {

  const paciente = Paciente.find();



};


const registrarPaciente = async (request,response) => {

  const { body } = request;

  const paciente = Paciente(body)

  if(paciente) {

    await paciente.save();
    response.json({})

  }else {
    const error = new Error('Error al registrar al paciente');
    response.json({msg: error.message})
  }

  

};

export {
  obtenerPaciente,
  registrarPaciente
}
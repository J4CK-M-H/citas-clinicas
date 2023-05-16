import obtenerFecha from '../helpers/ObtenerFecha.jsx';

const ConsultaHistorial = ({ cita }) => {
  return (
    <div>
      {
        cita._id && (
          <div className='bg-white p-4 rounded'>
            <h2 className='text-xl font-bold'>Fecha de Consulta:  
              <span className='font-normal ml-1'>
               { obtenerFecha(cita.createdAt) }
              </span>
            </h2>
            <p className='font-bold text-xl'>Nombre: <span className='font-normal'>{cita.paciente.nombre}</span></p>
            <p className='font-bold text-xl'>Apellido: <span className='font-normal'>{cita.paciente.apellido}</span></p>
            <p className='font-bold text-xl'>Edad: <span className='font-normal'>{cita.paciente.edad}</span></p>
            <p className='font-bold text-xl'>N° de DNI: <span className='font-normal'>{cita.paciente.documento}</span></p>
            <p className='font-bold text-xl'>Sintomas: <span className='font-normal'>{cita.sintomas}</span></p>
            <p className='font-bold text-xl'>Diagnostico: <span className='font-normal'>{cita.diagnostico}</span></p>
          </div>
        )
      }
    </div>
  )
}

export default ConsultaHistorial
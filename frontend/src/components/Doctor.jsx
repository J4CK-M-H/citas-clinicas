import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Doctor = ({ doctor }) => {

  return (
    <div className='p-4 shadow-lg bg-white space-y-1'>
      <p className='font-bold'>Nombre: <span className='font-normal'>{ doctor.nombre }</span></p>
      <p className='font-bold'>Apellido: <span className='font-normal'>{ doctor.apellido }</span></p>
      <p className='font-bold'>Especialidad: <span className='font-normal'>{ doctor.especialidad }</span></p>
      <Link 
        to={`/dashboard/doctor-detalle/${doctor._id}`} 
        className='block w-full text-white text-center font-bold bg-indigo-500 rounded py-1'>Detalle</Link>
    </div>
  )
}

export default Doctor
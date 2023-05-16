import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import GestionContext from '../context/GestionProvider';
import HistorialesClinicos from './HistorialesClinicos';

const DoctorDetalle = () => {

  const { obtenerDoctor, doctor } = useContext(GestionContext);

  const params = useParams();

  useEffect(() => {

    obtenerDoctor(params.id);

  }, []);
  
  if(!doctor._id){
    return;
  }

  // console.log(params);

  return (
    <div className='p-8'>
      <h2 className='font-bold text-3xl'>Datos del Doctor</h2>
      <div className='space-y-2 mb-5 bg-white p-4'>
        <div className='font-bold text-xl'>Nombre: <span className='font-normal'>{doctor.nombre}</span></div>
        <div className='font-bold text-xl'>Apellido: <span className='font-normal'>{doctor.apellido}</span></div>
        <div className='font-bold text-xl'>Email: <span className='font-normal'>{doctor.email}</span></div>
        <div className='font-bold text-xl'>Direccion: <span className='font-normal'>{doctor.direccion}</span></div>
        <div className='font-bold text-xl'>Especialidad: <span className='font-normal'>{doctor.especialidad}</span></div>
      </div>

      <div>
        <h2 className='font-bold text-3xl'>Historial Clinico</h2>
        <HistorialesClinicos 
          idDoctor={ doctor._id }
        />
      </div>
    </div>
  )
}

export default DoctorDetalle
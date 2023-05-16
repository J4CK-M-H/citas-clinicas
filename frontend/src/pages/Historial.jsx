import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import obtenerFecha from '../helpers/ObtenerFecha';
import useAxios from '../hooks/useAxios';

const Historial = () => {

  const [historial, setHistorial] = useState([]);

  useEffect(() => {

    const historialConsultas = async() => {

      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      try {
        const { data } = await useAxios(`usuario/historial-consultas`, config);
        setHistorial(data);
      } catch (error) {
        console.log(error)
      }

    };

    historialConsultas();

  }, []);
  
  console.log(historial)


  return (
    <div className='p-4'>
      <div className='grid grid-cols-4 gap-3'>

      {
        historial.length && (
          historial.map( consulta => (
            <div 
              key={consulta._id}
              className="bg-white p-3 rounded"
            >
              <p className='font-bold'>Doctor: <span className='font-normal'>{ consulta.doctor.nombre }</span></p>
              <p className='font-bold'>Paciente: <span className='font-normal'>{ consulta.paciente.nombre }</span></p>
              <p className='font-bold'>Fecha: <span className='font-normal'>{ obtenerFecha(consulta.createdAt) }</span></p>
              <Link 
                to={`/dashboard/doctor-consulta/${consulta._id}`}
                className='block w-full bg-indigo-600 py-2 rounded text-white text-center font-bold up'
              >Ver detalle</Link>
            </div>
          ))
          )
        }
        </div>
    </div>
  )
}

export default Historial
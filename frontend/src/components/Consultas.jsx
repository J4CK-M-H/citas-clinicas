import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthProvider'
import useAxios from '../hooks/useAxios';
import obtenerFecha from '../helpers/ObtenerFecha.jsx';
import { Link } from 'react-router-dom';

const Consultas = () => {

  const { auth } = useContext(AuthContext);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {

    const obtenerConsultas = async () => {

      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      try {
        const { data } = await useAxios.post(`doctor/obtener-consultas/${auth._id}`, config);
        setConsultas(data);
      } catch (error) {
        console.log(error)
      }

    };

    obtenerConsultas();

  }, []);

  return (
    <div className='p-5'>
      {
        (consultas.length) ?
          <div className='grid xl:grid-cols-5 lg:grid-cols-4 gap-3'>
            {
              consultas.map( consulta => (
                <div 
                  className='p-2 shadow-xl bg-white rounded'
                  key={consulta._id}
                >
                  <p className='font-bold'>Paciente: <span className='font-normal'>{ consulta.paciente.nombre }</span></p>
                  <p>{ obtenerFecha(consulta.createdAt) }</p>
                  <Link 
                    to={`/dashboard/consulta-detalle/${consulta._id}`}
                    className='block w-full bg-indigo-600 py-2 rounded text-white text-center font-bold up'
                  >Ver detalle</Link>
                </div>
              ))
            }
          </div>
          : <h2 className='font-bold text-4xl text-center'>No tiene consultas registradas aún</h2>
      }
    </div>
  )
}

export default Consultas
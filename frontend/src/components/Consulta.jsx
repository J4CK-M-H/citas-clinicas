import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../hooks/useAxios';

const Consulta = () => {

  const { id } = useParams();
  const [consulta, setConsulta] = useState({});

  useEffect(() => {

    const obtenerConsulta = async () => {

      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      try {
        const { data } = await useAxios.post(`doctor/obtener-consulta/${id}`, config);
        setConsulta(data);
      } catch (error) {
        console.log(error)
      }

    };

    obtenerConsulta();

  }, []);

  // if(!consulta._id){
  //   return;
  // }
  

  return (
    <div className='p-4'>
      {
        consulta._id && (
          <div className='bg-white p-4 rounded shadow-lg space-y-3'>
          <p className='font-bold text-xl'>Nombre: <span className='font-normal'>{consulta.paciente.nombre}</span></p>
          <p className='font-bold text-xl'>Apellido: <span className='font-normal'>{consulta.paciente.apellido}</span></p>
          <p className='font-bold text-xl'>Edad: <span className='font-normal'>{consulta.paciente.edad}</span></p>
          <p className='font-bold text-xl'>N° de DNI: <span className='font-normal'>{consulta.paciente.documento}</span></p>
          <p className='font-bold text-xl'>Sintomas: <span className='font-normal'>{consulta.sintomas}</span></p>
          <p className='font-bold text-xl'>Diagnostico: <span className='font-normal'>{consulta.diagnostico}</span></p>
        </div>
        )
      }
     
    </div>
  )
}

export default Consulta
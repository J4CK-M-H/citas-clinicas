import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import obtenerFecha from '../helpers/ObtenerFecha';
import useAxios from '../hooks/useAxios';

const DoctorConsulta = () => {

  const [consulta, setConsulta] = useState({});

  const { id } = useParams();

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

  if (!consulta._id) {
    return;
  }

  return (
    <div className='p-8'>
      <h2 className='font-bold text-3xl'>Datos del Doctor</h2>
      <div className='space-y-2 mb-5 bg-white p-4'>
        <div className='font-bold text-xl'>Nombre: <span className='font-normal'>{consulta.doctor.nombre}</span></div>
        <div className='font-bold text-xl'>Apellido: <span className='font-normal'>{consulta.doctor.apellido}</span></div>
        <div className='font-bold text-xl'>Email: <span className='font-normal'>{consulta.doctor.email}</span></div>
        <div className='font-bold text-xl'>Direccion: <span className='font-normal'>{consulta.doctor.direccion}</span></div>
        <div className='font-bold text-xl'>Especialidad: <span className='font-normal'>{consulta.doctor.especialidad}</span></div>
      </div>

      <div>
        <h2 className='font-bold text-3xl'>Historial Clinico</h2>
        <div>
            
          <div className='bg-white p-4 rounded'>
            <h2 className='text-xl font-bold'>Fecha de Consulta:
              <span className='font-normal ml-1'>
                {obtenerFecha(consulta.createdAt)}
              </span>
            </h2>
            <p className='font-bold text-xl'>Nombre: <span className='font-normal'>{consulta.paciente.nombre}</span></p>
            <p className='font-bold text-xl'>Apellido: <span className='font-normal'>{consulta.paciente.apellido}</span></p>
            <p className='font-bold text-xl'>Edad: <span className='font-normal'>{consulta.paciente.edad}</span></p>
            <p className='font-bold text-xl'>N° de DNI: <span className='font-normal'>{consulta.paciente.documento}</span></p>
            <p className='font-bold text-xl'>Sintomas: <span className='font-normal'>{consulta.sintomas}</span></p>
            <p className='font-bold text-xl'>Diagnostico: <span className='font-normal'>{consulta.diagnostico}</span></p>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default DoctorConsulta
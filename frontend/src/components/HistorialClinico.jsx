import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAxios from '../hooks/useAxios';
import ConsultaHistorial from './ConsultaHistorial';

const HistorialClinico = ({ idDoctor }) => {

  const [citas, setCitas] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {

    const obtenerHistorial = async () => {

      setCargando(true);

      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      try {
        const { data } = await useAxios.post(`doctor/obtener-consultas/${idDoctor}`, config);
        setCitas(data);
        setCargando(false);
      } catch (error) {
        console.log(error)
      }

    };

    obtenerHistorial();

  }, [idDoctor]);

  console.log(citas);

  if(cargando){
    return;
  }

  return (
    <div>
      <div className='space-y-4'>

        {
          citas.length ? (
            <>
              {
                citas.map(cita => (
                  <ConsultaHistorial
                    key={cita._id}
                    cita={cita}
                    paciente={cita.paciente}
                  />
                  // <div key={cita._id}>
                  //   <p>Fecha de la Consulta: <span>{ cita.createdAt }</span></p>
                  //   <p>Paciente: <span>{ cita.paciente.nombre }</span></p>
                  //   <p>Paciente: <span>{ cita.paciente.apellido }</span></p>
                  // </div>
                ))
              }
            </>
          )
            : 'No tiene consultas realizadas aun'
        }


      </div>
    </div>
  )
}

export default HistorialClinico;



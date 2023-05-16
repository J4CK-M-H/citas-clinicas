import React, { useContext, useEffect, useState } from 'react'
import GestionContext from '../context/GestionProvider'
import Doctor from './Doctor';

const ListaDoctores = () => {

  const { obtenerDoctores } = useContext(GestionContext);

  const [doctores, setDoctores] = useState([]);

  useEffect(() => {

    const getData = async () => {

      const data = await obtenerDoctores();
      setDoctores(data);
    };

    getData()

  }, []);
  
  return (

    <div className={`${ doctores.length && 'p-8 grid xl:grid-cols-5 gap-4 md:grid-cols-3'}`}>
      {
        doctores.length ? doctores.map( doctor => (
          <Doctor 
            key={doctor._id}
            doctor={doctor} 
          />
        )) : <h2 className='text-4xl text-center block w-full mt-10 font-bold'>{ doctores.msg }</h2>
      }
    </div>
  )
}

export default ListaDoctores
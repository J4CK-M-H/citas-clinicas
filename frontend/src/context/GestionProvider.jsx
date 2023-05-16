import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import useAxios from '../hooks/useAxios';

const GestionContext = createContext();

const GestionProvider = ({ children }) => {

  const [doctores, setDoctores] = useState([]);
  const [doctor, setDoctor] = useState({});
  const [alerta, setAlerta] = useState({});


  // Antes esta funcion se ejecutaba con el useEffect, pero se cambio debido a que primero se deberia comprobar si el usuario tiene
  // la autorizacion para obtener los doctores por ellos se borro el useffect y se puso a disposicion la funcion en el provider
  // para que se ejecute desde el componente correspondiente
  const obtenerDoctores = async () => {

    const token = localStorage.getItem('token');

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    try {
      
      const { data } = await useAxios('usuario/obtener-doctores', config );
      return data;
      // setDoctores(data);

    } catch (error) {
      console.log(error);
    }

  };
  
    // obtenerDoctores();
  const registrarDoctor = async (doctor) => {

    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    }

    try {
      
      const { data } = await useAxios.post('usuario/registrar-doctor', doctor, config );

      setAlerta({
        msg: "Doctor registrado correctamente",
        error: false
      })

      setTimeout(() => {
        setAlerta({});
      }, 2000);

    } catch (error) {
      console.log(error);
    }

  };

  const obtenerDoctor = async (id) => {

    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    }

    try {
      
      const { data } = await useAxios(`usuario/obtener-doctor/${id}`, config);
      setDoctor(data);

    } catch (error) {
      console.log(error);
      // setAlerta({
      //   msg: 
      // })
    }

  };

  const registrarConsulta = async (consulta) => {


    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    }

    try {
      
      await useAxios.post(`doctor/registrar-consulta`, consulta ,config);

      setAlerta({
        msg: "Consulta Registrada",
        error: false
      });

      setTimeout(() => {
        setAlerta({});
      }, 2000);

    } catch (error) {
      console.log(error);
    }

  };


  return (
    <GestionContext.Provider
      value={{
        alerta,
        registrarDoctor,
        setAlerta,
        doctores,
        doctor,
        obtenerDoctor,
        obtenerDoctores,
        registrarConsulta
      }}
    >
      { children }
    </GestionContext.Provider>
  )
}

export {
  GestionProvider
}

export default GestionContext
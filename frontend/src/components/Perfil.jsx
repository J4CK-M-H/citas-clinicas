import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthProvider';
import GestionContext from '../context/GestionProvider';
import useAxios from '../hooks/useAxios';
import Alerta from './Alerta';

const Perfil = () => {

  const { auth, cargando, setAuth } = useContext(AuthContext);
  const { alerta, setAlerta } = useContext(GestionContext);

  console.log(auth)
  // const { nombre: nombreAuth, apellido: apellidoAuth, email: emailAuth } = auth;

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [direccion, setDireccion] = useState('');

  const [modoEdicion, setModoEdicion] = useState(false);


  useEffect(() => {

    setNombre(auth.nombre ? auth.nombre : '');
    setApellido(auth.apellido ? auth.apellido : '');
    setEmail(auth.email ? auth.email : '');
    setEspecialidad(auth.especialidad ? auth.especialidad : '');
    setDireccion(auth.direccion ? auth.direccion : '');

  }, [auth]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre.trim(), apellido.trim(), email.trim(), direccion.trim()].includes("")) {
      setAlerta({
        msg: "Todos los campos deben estar completados",
        error: true
      })
      setTimeout(() => {
        setAlerta({})
      }, 2000);
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const objeto = {

      nombre,
      apellido,
      email,
      direccion
    }

    try {

      const { data } = await useAxios.post(`usuario/editar-usuario/${auth._id}`, objeto, config);
      setAuth(data);
      setAlerta({
        msg: "Se guardaron los cambios correctamente",
        error: false
      })
      setTimeout(() => {
        setAlerta({})
      }, 2000);

    } catch (error) {
      console.log(error);
    }

    setModoEdicion(!modoEdicion);
  };

  const { msg } = alerta;

  return (

    <div className='flex justify-center items-center h-screen'>
      <form
        onSubmit={handleSubmit}
        className='w-[600px] p-8 space-y-4 bg-white shadow-lg'
      >
        {
          msg && <Alerta alerta={alerta} />
        }
        <div className='flex gap-3'>
          <div className='flex-1'>
            <label htmlFor="nombre" className='font-bold text-xl'>Nombre: </label>
            <input
              type="text"
              className={`bg-white block w-full py-2 px-3 rounded outline-none border-2 ${modoEdicion === false ? '' : 'border-green-500'}`}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              id="nombre"
              disabled={!modoEdicion}
            />
          </div>
          <div className='flex-1'>
            <label htmlFor="apellido" className='font-bold text-xl'>Apellido: </label>
            <input
              type="text"
              className={`bg-white block w-full py-2 px-3 rounded outline-none border-2 ${modoEdicion === false ? '' : 'border-green-500'}`}
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              id="apellido"
              disabled={!modoEdicion}
            />
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='flex-1'>
            <label htmlFor="email" className='font-bold text-xl'>Email: </label>
            <input
              type="text"
              className={`bg-white block w-full py-2 px-3 rounded outline-none border-2 ${modoEdicion === false ? '' : 'border-green-500'}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              disabled={!modoEdicion}
            />
          </div>
          <div className='flex-1'>
            <label htmlFor="direccion" className='font-bold text-xl'>Direccion: </label>
            <input
              type="text"
              className={`bg-white block w-full py-2 px-3 rounded outline-none border-2 ${modoEdicion === false ? '' : 'border-green-500'}`}
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              id="direccion"
              disabled={!modoEdicion}
            />
          </div>

        </div>

        {
          auth.especialidad && (
            <div className='flex gap-3'>
              <div className='flex-1'>
                <label htmlFor="especialidad" className='font-bold text-xl'>Especialidad: </label>
                <input
                  type="text"
                  className={`bg-white block w-full py-2 px-3 rounded outline-none border-2`}
                  value={especialidad}
                  onChange={(e) => setNombre(e.target.value)}
                  id="especialidad"
                  disabled
                />
              </div>
            </div>
          )
        }


        {
          modoEdicion ? <input
            type="submit"
            className='block w-full p-2 text-center text-white font-bold bg-indigo-500 rounded cursor-pointer'
          /> :
            <button
              onClick={() => setModoEdicion(!modoEdicion)}
              className='block w-full p-2 text-center text-white font-bold bg-indigo-500 rounded cursor-pointer'
              type='button'
            >Editar</button>
        }


      </form>
    </div>

  )
}
export default Perfil
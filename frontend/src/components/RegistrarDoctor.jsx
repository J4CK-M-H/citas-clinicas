import { useEffect } from "react";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthProvider";
import GestionContext from "../context/GestionProvider";
import Alerta from "./Alerta";

const ESPECIALIDADES = [
  'Pediatra',
  'Oftalmologo',
  'Cirujano',
  'Dermatologia'
]

const RegistrarDoctor = () => {

  const { alerta, setAlerta, registrarDoctor } = useContext(GestionContext);

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [direccion, setDireccion] = useState('')
  const [password, setPassword] = useState('')
  const [especialidad, setEspecialidad] = useState('')

  const handleRegistro = (e) => {
    e.preventDefault();

    if([nombre.trim(),apellido.trim(),email.trim(),direccion.trim(),password.trim(),especialidad.trim()].includes("")){
      setAlerta({
        msg: "Todo los campos deben ser rellenados",
        error: true
      });

      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }

    registrarDoctor({nombre,apellido,email,direccion,password,especialidad});
    setNombre('')
    setApellido('')
    setEmail('')
    setDireccion('')
    setPassword('')
    setEspecialidad('')
  };

  const { msg } = alerta;

  return (
    <div className='flex h-screen justify-center items-center w-[85%] sm:w-[470px] md:w-[650px] mx-auto'>
      <form 
        onSubmit={ handleRegistro }
        className='p-8 h-auto w-[1000px] bg-white space-y-2 sm:space-y-10 shadow-lg'>

        {
          msg && <Alerta alerta={alerta}/>
        }

        <div className='flex flex-col sm:flex-row gap-2 sm:gap-5'>

          <div className='flex-1'>
            <label htmlFor="nombre" className='block mb-2 text-xl font-bold'>Nombre</label>
            <input
              className='block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500 focus:outline-2'
              value={nombre}
              onChange={ (e) => setNombre(e.target.value) }
              type="text"
              id="nombre"
            />
          </div>

          <div className='flex-1'>
            <label htmlFor="apellido" className='block mb-2 text-xl font-bold'>Apellido</label>
            <input
              className='block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500 focus:outline-2'
              value={apellido}
              onChange={ (e) => setApellido(e.target.value) }
              type="text"
              id="apellido"
            />
          </div>

        </div>


        <div className='flex flex-col sm:flex-row gap-2 sm:gap-5'>

          <div className='flex-1'>
            <label htmlFor="email" className='block mb-2 text-xl font-bold'>Email</label>
            <input
              className='block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500 focus:outline-2'
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
              type="text"
              id="email"
            />
          </div>

          <div className='flex-1'>
            <label htmlFor="direccion" className='block mb-2 text-xl font-bold'>Dirección</label>
            <input
              className='block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500 focus:outline-2'
              value={direccion}
              onChange={ (e) => setDireccion(e.target.value) }
              type="text"
              id="direccion"
            />
          </div>

        </div>
        

        <div>
          <label htmlFor="password" className='block mb-2 text-xl font-bold'>Password</label>
          <input
            className='block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500 focus:outline-2'
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
            type="password"
            id="password"
          />
        </div>

        <select 
          value={especialidad}
          onChange={ (e) => setEspecialidad(e.target.value) }
          className='bg-slate-200 w-full py-4 rounded px-2 font-bold text-lg '
        >
          <option>---Eligen una especialidad---</option>
          {
            ESPECIALIDADES.map( especialidad => (
              <option
                className='font-bold text-lg'
                key={especialidad} value={especialidad}
              >{especialidad}</option>
            ))
          }
        </select>

        <input
          className={`block bg-indigo-500 text-white py-3 w-full rounded text-center font-bold uppercase cursor-pointer hover:bg-indigo-700`}
          type="submit"
          value="Registrar"
        />
        {/* <div>
        <label htmlFor="nombre">Especialidad</label>
          <input type="text" id="nombre" />
        </div> */}

      </form>

    </div>
  )
}

export default RegistrarDoctor
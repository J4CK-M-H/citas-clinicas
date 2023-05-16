import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthProvider";
import GestionContext from "../context/GestionProvider";
import Alerta from "./Alerta";


const RegistrarConsulta = () => {

  const { alerta, setAlerta, registrarConsulta } = useContext(GestionContext);
  const { auth } = useContext(AuthContext);

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const [dni, setDni] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [diagnostico, setDiagnostico] = useState('')

  const handleRegistro = (e) => {
    e.preventDefault();

    if ([nombre.trim(), apellido.trim(), edad.trim(), dni.trim(), sintomas.trim(), diagnostico.trim()].includes("")) {
      setAlerta({
        msg: "Todo los campos deben ser rellenados",
        error: true
      });

      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }

    const dniNumber = Number(dni);
    const edadNumber = Number(edad);

    console.log(typeof Number(edad))

    if( typeof edadNumber !== 'number' ) {
      setAlerta({
        msg: "Edad no puede tener letras",
        error: true
      });

      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }

    if( typeof dniNumber !== 'number' ) {
      setAlerta({
        msg: "DNI no puede tener letras",
        error: true
      });

      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }
  
    const { _id: doctor } = auth;

    setEdad(edadNumber)
    setDni(dniNumber)

    registrarConsulta({ nombre, apellido, edad , dni , sintomas, diagnostico, doctor });

    setNombre('')
    setApellido('')
    setEdad('')
    setDni('')
    setSintomas('')
    setDiagnostico('')
  };

  const { msg } = alerta;

  return (
    <div className='flex h-screen justify-center items-center w-[85%] sm:w-[470px] md:w-[650px] mx-auto'>
      <form
        onSubmit={handleRegistro}
        className='p-8 h-auto w-[1000px] bg-white space-y-2 sm:space-y-10 shadow-lg'>

        {
          msg && <Alerta alerta={alerta} />
        }

        <div className="space-y-2 sm:space-y-8">
          <h2 className="text-xl mb-5 sm:-mb-2 font-bold uppercase text-center">Formulario de Consulta</h2>
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-5'>

            <div className='flex-1'>
              <label htmlFor="nombre" className='block mb-2 text-xl font-bold'>Nombre</label>
              <input
                className='block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500 focus:outline-2'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                id="nombre"
              />
            </div>

            <div className='flex-1'>
              <label htmlFor="apellido" className='block mb-2 text-xl font-bold'>Apellido</label>
              <input
                className='block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500 focus:outline-2'
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                type="text"
                id="apellido"
              />
            </div>

          </div>

          <div className='flex flex-col sm:flex-row gap-2 sm:gap-5'>

            <div className='flex-1'>
              <label htmlFor="email" className='block mb-2 text-xl font-bold'>Edad:</label>
              <input
                className='block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500 focus:outline-2'
                value={edad}
                maxLength="2"
                onChange={(e) => setEdad(e.target.value)}
                type="text"
                id="email"
              />
            </div>

            <div className='flex-1'>
              <label htmlFor="direccion" className='block mb-2 text-xl font-bold'>DNI</label>
              <input
                className='block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500 focus:outline-2'
                value={dni}
                maxLength="8"
                onChange={(e) => setDni(e.target.value)}
                type="text"
                id="direccion"
              />
            </div>

          </div>

          <div>
            <label htmlFor="sintomas" className='block mb-2 text-xl font-bold'>Sintomas y/o Complicaciones</label>
            <textarea
              id="sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              className="block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500
          focus:outline-2 h-32"
            ></textarea>
          </div>

          <div>
            <label htmlFor="diagnostico" className='block mb-2 text-xl font-bold'>Diagnostico</label>
            <textarea
              id="diagnostico"
              value={diagnostico}
              onChange={(e) => setDiagnostico(e.target.value)}
              className="block w-full bg-slate-100 py-3 px-2 rounded outline outline-slate-300 text-xl focus:outline-slate-500
          focus:outline-2 h-32"
            ></textarea>
          </div>

        </div>



        <input
          className={`block bg-indigo-500 text-white py-3 w-full rounded text-center font-bold uppercase cursor-pointer hover:bg-indigo-700`}
          type="submit"

          value="Registrar"
        />

      </form>

    </div>
  )
}

export default RegistrarConsulta
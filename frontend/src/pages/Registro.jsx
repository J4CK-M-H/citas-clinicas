import React from 'react'
import { Link } from 'react-router-dom'

const Registro = () => {
  return (
    <div className='flex w-full justify-between p-5 items-center'>

      <div className=''>
        <img src="../../public/img/logo.svg" className='w-[800px]' alt="" />
      </div>

      <form className='lg:w-[600px] bg-white shadow-lg p-5 space-y-5 h-max'>

        <h2 className='text-4xl text-center text-indigo-800 font-bold'>Registro</h2>

        <div className='flex bg-indigo-400 w-[400px] mx-auto rounded-md'>
          <Link className='text-xl block text-white flex-1 font-bold text-center hover:bg-indigo-700  py-2 rounded-l-md'>Doctor</Link>
          <Link className='text-xl block text-white flex-1 font-bold text-center hover:bg-indigo-700  py-2 rounded-r-md'>Adminstrador</Link>
        </div>

        <div>
          <img src="../../public/img/nuevo.png" className='block w-20 h-20 mx-auto' alt="" />
        </div>

        <div>
          <label htmlFor="email" className='font-bold text-xl'>Email</label>
          <input
            className='block bg-slate-100 w-full py-2 px-3 rounded outline-none text-xl border-2 border-indigo-400'
            type="text"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="password" className='font-bold text-xl'>Password</label>
          <input
            className='block bg-slate-100 w-full py-2 px-3 rounded outline-none text-xl border-2 border-indigo-400'
            type="password"
            id="password"
          />
        </div>

        <input
          type="submit"
          className='text-white bg-indigo-400 text-center py-2 w-full rounded-md font-bold text-xl hover:bg-indigo-700'
          value="Iniciar Sesion"
        />

        {/* <div>
          <p className='text-center'>¿No tienes cuenta?
            <span>
              <Link className='font-bold'> Registrate</Link>
            </span>
          </p>
        </div> */}

      </form>
    </div>
  )
}

export default Registro
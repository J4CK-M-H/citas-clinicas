import React, { useContext } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import Cargando from '../components/Cargando';
import AuthContext from '../context/AuthProvider'

const Auth = () => {

  const { cargando, auth } = useContext(AuthContext);

  console.log('Se cargo el componente auth');

  return (

    <>

      <div className='bg-slate-200 h-screen'>
        <>
          <nav className='bg-white h-20 flex items-center justify-between px-8 shadow-lg'>
            <div>
              <h2 className='text-xl font-bold '>Clinica</h2>
            </div>

            <div className='flex items-center gap-4'>
              <div>
                <Link to='/' className='text-xl hover:bg-slate-600 hover:text-white py-2 px-4 rounded-sm'>Inicio</Link>
              </div>
              <div>
                <Link className='text-xl hover:bg-slate-600 hover:text-white py-2 px-4 rounded-sm'>Nosotros</Link>
              </div>
              <div>
                <Link className='text-xl hover:bg-slate-600 hover:text-white py-2 px-4 rounded-sm'>Contacto</Link>
              </div>
            </div>

          </nav>

          <Outlet />
        </>
      </div>


    </>
  )
}

export default Auth
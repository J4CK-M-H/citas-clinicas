import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'

const SideBarAdmin = () => {

  const { logout } = useContext(AuthContext);

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={`shadow-xl z-10 h-screen w-32 -left-1/2 lg:relative lg:left-0 duration-200 ${ isActive && 'left-0 w-[80%] absolute' }`}>

        {/* <div className='flex lg:justify-start justify-center '>
          <Link to='/dashboard'>
            <h2 className='font-bold text-xl my-5 hidden lg:block'>Panel Principal</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block block lg:hidden my-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </Link>
        </div> */}

        <button
          className={`bg-black text-white w-40 lg:w-full z-20 lg:left-0 h-20 flex items-center justify-center relative left-full ${ isActive && 'left-0 w-[50%]' }`}
          onClick={() => setIsActive(!isActive)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[50%] h-[50%]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>

        </button>

        <div className=''>

          <div className='flex justify-center lg:justify-start items-center  hover:bg-blue-200 py-3'>
            <Link className='w-full flex flex-col items-center' to='/dashboard/historial'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hover:scale-150 md:hover:scale-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
              <span className={`font-bold lg:relative lg:duration-200 ${isActive && 'lg:left-0 lg:relative'}`}>Historial</span>
            </Link>
          </div>

          <div className='flex justify-center lg:justify-start items-center relative hover:bg-blue-200 py-3'>
            <Link className='w-full flex flex-col items-center' to='/dashboard/lista-doctores'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <span className='font-bold lg:relative lg:left-0 lg:duration-200'>Doctores</span>
            </Link>
          </div>

          <div className='flex justify-center lg:justify-start hover:bg-blue-200 py-3'>
            <Link className='w-full flex flex-col items-center' to='/dashboard/registrar-doctor'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className='font-bold lg:relative lg:left-0 lg:duration-200 text-center'>Agregar Doctor</span>
            </Link>
          </div>

          <div className='flex justify-center lg:justify-start hover:bg-blue-200 py-3'>
            <Link className='w-full flex flex-col items-center' to='/dashboard/perfil'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className='font-bold lg:relative lg:left-0 lg:duration-200'>Perfil</span>
            </Link>
          </div>

          <div className='flex justify-center lg:justify-start hover:bg-blue-200 py-3'>
            <button className='w-full flex flex-col items-center'
              onClick={() => logout()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
              <span className='font-bold lg:relative lg:left-0 lg:duration-200'>Salir</span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default SideBarAdmin
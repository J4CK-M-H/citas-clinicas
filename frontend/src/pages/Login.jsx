import { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Alerta from '../components/Alerta';
import AuthContext from '../context/AuthProvider';
import useAxios from '../hooks/useAxios';

const Login = () => {

  const { auth, setAuth, cargando, setCargando } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('doctor');
  const [alerta, setAlerta] = useState({});


  const handleSubmit = async (e) => {

    e.preventDefault();

    if ([email.trim(), password.trim()].includes("")) {
      setAlerta({
        msg: "Todo los campos son necesarios",
        error: true
      });

      setTimeout(() => {
        setAlerta({})
      }, 2000);
      return;
    }

    try {

      const { data } = await useAxios.post('usuario/autenticar', { email, password, tipo }, {
        headers: { "Content-Type": "application/json" }
      });

      setCargando(true);

      localStorage.setItem('token',  data.token );
      setAuth(data);

      setTimeout(() => {
        setCargando(false);
        navigate('/dashboard');
      }, 2000);


    } catch (error) {
      console.log(error);
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });

      setTimeout(() => {
        setAlerta({})
      }, 2000);

    }


  };

  const { msg } = alerta;

  // if(auth._id) {
  //   return;
  // }

  return (

    <>
    {
      auth._id ? <Navigate to="/dashboard" /> : (
        <div className='flex w-full justify-between p-5 items-center'>

      <div className=''>
        <img src="../../public/img/logo.svg" className='w-[800px]' alt="" />
      </div>

      <form
        onSubmit={handleSubmit}
        className='lg:w-[600px] bg-white shadow-lg p-5 space-y-5 h-max'
        >

        <h2 className='text-4xl text-center text-indigo-800 font-bold'>Login</h2>

        <div className='flex bg-indigo-400 w-[400px] mx-auto rounded-md'>
          <button
            onClick={() => setTipo('doctor')}
            type='button'
            className={`text-xl block text-white flex-1 font-bold text-center hover:bg-indigo-700 ${tipo === 'doctor' && 'bg-indigo-700'}  py-2 rounded-l-md`}
            >Doctor</button>
          <button
            type='button'
            className={`text-xl block text-white flex-1 font-bold text-center hover:bg-indigo-700 ${tipo === 'administrador' && 'bg-indigo-700'}  py-2 rounded-r-md`}
            onClick={() => setTipo('administrador')}
            >Administrador</button>
        </div>

        {
          msg && <Alerta alerta={alerta} />
        }

        <div>
          <img src="../../public/img/nuevo.png" className='block w-20 h-20 mx-auto' alt="" />
        </div>

        <div>
          <label htmlFor="email" className='font-bold text-xl'>Email</label>
          <input
            className='block bg-slate-100 w-full py-2 px-3 rounded outline-none text-xl border-2 border-indigo-400'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            />
        </div>

        <div>
          <label htmlFor="password" className='font-bold text-xl'>Password</label>
          <input
            className='block bg-slate-100 w-full py-2 px-3 rounded outline-none text-xl border-2 border-indigo-400'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <input
          type="submit"
          className='text-white bg-indigo-400 text-center py-2 w-full rounded-md font-bold text-xl hover:bg-indigo-700'
          value="Iniciar Sesion"
        />

      </form>
    </div>
      )
    }
    
          </>
  )
}

export default Login
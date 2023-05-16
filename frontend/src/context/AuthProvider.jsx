import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const obtenerUsuario = async () => {

      const token = localStorage.getItem('token');
      
      if (!token) {
        console.log('no paso')
        navigate('/');
        return;
      }
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      
      try {

        const { data } = await useAxios('usuario/perfil', config);
        setAuth(data);

      } catch (error) {
        console.log(error);
        setAuth({});
        navigate('/');
      }

    };

    obtenerUsuario();

  }, []);

  const logout = () => {
    setAuth({});
    localStorage.clear();
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        setCargando,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthProvider
}

export default AuthContext;
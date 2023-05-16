import { useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Consulta from "./components/Consulta"
import Consultas from "./components/Consultas"
import DoctorDetalle from "./components/DoctorDetalle"
import ListaDoctores from "./components/ListaDoctores"
import Perfil from "./components/Perfil"
import RegistrarConsulta from "./components/RegistrarConsulta"
import RegistrarDoctor from "./components/RegistrarDoctor"
import ReportesDoctor from "./components/ReportesDoctor"
import AuthContext, { AuthProvider } from "./context/AuthProvider"
import { GestionProvider } from "./context/GestionProvider"
import Auth from "./layout/Auth"
import Dashboard from "./pages/Dashboard"
import DoctorConsulta from "./pages/DoctorConsulta"
import Historial from "./pages/Historial"
import Login from "./pages/Login"

function App() {

  // const { auth } = useContext(AuthContext);

  // console.log(auth);

  return (

    <BrowserRouter>
      <AuthProvider>
        <GestionProvider>

        <Routes>

          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard/>}>
            <Route index element={<Consultas/>} />
            <Route path="lista-doctores" element={<ListaDoctores/>} />
            <Route path="registrar-doctor" element={<RegistrarDoctor/>} />
            <Route path="doctor-detalle/:id" element={<DoctorDetalle />} />
            <Route path="perfil" element={<Perfil/>} />
            <Route path="registrar-consulta" element={<RegistrarConsulta/>} />
            <Route path="reportes-doctor" element={<ReportesDoctor/>} />
            <Route path="consulta-detalle/:id" element={<Consulta/>} />
            <Route path="historial" element={<Historial/>} />
            <Route path="doctor-consulta/:id" element={<DoctorConsulta/>} />
          </Route>

        </Routes>
        
        </GestionProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

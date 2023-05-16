import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider'
import SideBar from '../layout/SideBar';

const Dashboard = () => {


  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  //   const location = useLocation()
  // useEffect(() => {

  //   if(!auth._id) {
  //     return navigate('/')
  //   }

  // }, [])


  if(!auth._id){
    return <Navigate to="/" />
  }

  return (
    <>
      <div className='flex relative'>
        <SideBar />

        <div className='h-screen bg-slate-200 w-full shadow-lg'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard
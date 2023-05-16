import React, { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import SideBarAdmin from './SideBarAdmin';
import SidebarDoctor from './SidebarDoctor';

const SideBar = () => {

  const { auth } = useContext(AuthContext);

  return (
    <>

      {
        auth.isAdmin ? (
          <SideBarAdmin />
        ): (
          <SidebarDoctor />
        )
      }

    </>
  )
}

export default SideBar
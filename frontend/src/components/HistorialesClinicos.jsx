import React from 'react'
import HistorialClinico from './HistorialClinico'

const HistorialesClinicos = ({ idDoctor }) => {
  return (
    <div>
      <HistorialClinico 
        idDoctor={ idDoctor }
      />
    </div>
  )
}

export default HistorialesClinicos
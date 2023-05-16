import React from 'react'

const Alerta = ({alerta}) => {
  return (
    <div>
      <h2 className={`${alerta.error ? 'bg-red-500 text-white py-2 rounded text-center text-xl' : 'bg-green-500 text-white py-2 rounded text-center text-xl'}`}>{alerta.msg}</h2>
    </div>
  )
}

export default Alerta
import React from 'react'
import { Oval } from 'react-loader-spinner';

const Cargando = () => {
  return (

    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col items-center'>
        <h2 className='text-center mb-5 font-bold text-xl'>Espere un momento</h2>
        <Oval
          height={100}
          width={100}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}

        />
      </div>
    </div>
  )
}

export default Cargando
import React from 'react'
import DataHeader from '../data/DataHeader';

function Rol() {
  return (
    <div className="flex justify-center items-center w-full">
      <h1 className="bg-neutral-600 text-white text-center py-1 px-4 tracking-[0.2em] uppercase font-light text-sm md:text-base">
        {DataHeader.ocupation}
      </h1>
    </div>
  )
}

export default Rol;
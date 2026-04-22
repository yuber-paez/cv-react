import React from 'react'
import { BsPeopleFill } from "react-icons/bs"; 
import DataReferences from '../data/DataReferences';

function References() {
    return (
        <div className="w-full font-sans text-white">

            {/* Encabezado Principal con Icono */}
            <div className="flex items-center gap-3 mb-5 mt-5">
                <BsPeopleFill className="text-2xl" />
                <h1 className="text-[26px] font-bold">Referencias</h1>
            </div>

            {/* Listado de Referencias */}
            <div className="flex flex-col gap-7">

                {/* Primera Referencia */}
                <section>
                    <h2 className="text-[18px] font-bold uppercase tracking-tight">
                        {DataReferences.name1}
                    </h2>
                    {/* Ocupación con peso normal y color suavizado */}
                    <p className="text-[18px] font-medium leading-tight text-gray-200">
                        {DataReferences.ocupation1}
                    </p>
                    <p className="text-[17px] font-normal leading-[1.3] text-gray-200">
                        Tel: {DataReferences.phone1}
                    </p>
                </section>

                {/* Segunda Referencia */}
                <section>
                    <h2 className="text-[18px] font-bold uppercase tracking-tight">
                        {DataReferences.name2}
                    </h2>
                    {/* Ocupación con peso normal y color suavizado */}
                    <p className="text-[18px] font-medium leading-tight text-gray-200">
                        {DataReferences.ocupation2}
                    </p>
                    <p className="text-[17px] font-normal leading-[1.3] text-gray-200">
                        Tel: {DataReferences.phone2}
                    </p>
                </section>

            </div>
        </div>
    )
}

export default References
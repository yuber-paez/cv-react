import React from 'react'
import { BsMortarboardFill } from "react-icons/bs";
import DataEducation from '../data/DataEducation';

function Education() {
    return (
        <div className="w-full font-sans text-white">

            {/* Encabezado Principal con Icono */}
            <div className="flex items-center gap-3 mb-5 mt-5">
                <BsMortarboardFill className="text-2xl" />
                <h1 className="text-[26px] font-bold">Formación</h1>
            </div>

            {/* Listado de Formación */}
            <div className="flex flex-col gap-7">

                {/* Tecnólogo */}
                <section>
                    <h2 className="text-[18px] font-bold uppercase tracking-tight ">
                        {DataEducation.tecnologo.titulo}
                    </h2>
                    <h3 className="text-[18px] font-bold leading-tight ">
                        {DataEducation.tecnologo.programa}
                    </h3>
                    <p className="text-[17px] font-medium leading-[1.3] text-gray-200">
                        {DataEducation.tecnologo.institucion}
                    </p>
                    <p className="text-[17px] font-medium leading-[1.3] text-gray-200">
                        {DataEducation.tecnologo.ubicacion}
                    </p>
                </section>

                {/* Formación en Inglés */}
                <section>
                    <h2 className="text-[18px] font-bold uppercase tracking-tight ">
                        {DataEducation.english.titulo}
                    </h2>
                    <h3 className="text-[17px] font-bold leading-tight ">
                        {DataEducation.english.programa}
                    </h3>
                    <p className="text-[17px] font-medium leading-[1.3] text-gray-200">
                        {DataEducation.english.institucion}
                    </p>
                    <p className="text-[17px] font-medium leading-[1.3] text-gray-200">
                        {DataEducation.english.ubicacion}
                    </p>
                </section>

                {/* Técnico */}
                <section>
                    <h2 className="text-[18px] font-bold uppercase tracking-tight ">
                        {DataEducation.tecnico.titulo}
                    </h2>
                    <h3 className="text-[17px] font-bold leading-tight ">
                        {DataEducation.tecnico.programa}
                    </h3>
                    <p className="text-[17px] font-medium leading-[1.3] text-gray-200">
                        {DataEducation.tecnico.institucion}
                    </p>
                </section>

                {/* Bachiller */}
                <section>
                    <h2 className="text-[18px] font-bold uppercase tracking-tight ">
                        {DataEducation.school.titulo}
                    </h2>
                    <h3 className="text-[18px] font-bold leading-tight ">
                        {DataEducation.school.programa} <span className="font-normal">| {DataEducation.school.institucion}</span>
                    </h3>
                    <p className="text-[17px] font-medium leading-[1.3] text-gray-200">
                        {DataEducation.school.ubicacion}
                    </p>
                </section>

            </div>
        </div>
    )
}

export default Education
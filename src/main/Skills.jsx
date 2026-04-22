import React from 'react'
import DataSkills from '../data/DataSkills';
import { FaBrain } from "react-icons/fa";

function Skills() {
    return (
        <div className="font-sans text-black p-[5px]">

            {/* Cabecera compacta alineada con Perfil Personal */}
            <div className="flex items-center gap-[6px] mb-[6px]">
                <FaBrain className="text-[22px] text-black" />
                <h1 className="text-[20px] font-bold tracking-tight">
                    Habilidades
                </h1>
            </div>

            {/* Contenedor con borde lateral y espaciado ajustado */}
            <div className="border-l-[1.5px] border-black ml-[10px] pl-[18px] pr-[0px] max-w-[700px]">

                {/* gap-[0px] o muy pequeño para ahorrar espacio vertical entre líneas */}
                <div className="flex flex-col gap-[2px] text-[15px] leading-tight">

                    <p>
                        <span className="font-bold text-[15px]">Lenguajes: </span>
                        {DataSkills.languages}
                    </p>

                    <p>
                        <span className="font-bold text-[15px]">Frameworks: </span>
                        {DataSkills.framework}
                    </p>

                    <p>
                        <span className="font-bold text-[15px]">Bases de datos: </span>
                        {DataSkills.databases || "MySQL, MongoDB"}
                    </p>

                    <p>
                        <span className="font-bold text-[15px]">Web: </span>
                        {DataSkills.web}
                    </p>

                    <p>
                        <span className="font-bold text-[15px]">Herramientas: </span>
                        {DataSkills.tools}
                    </p>

                    <p>
                        <span className="font-bold text-[15px]">Otros: </span>
                        {DataSkills.others}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Skills;
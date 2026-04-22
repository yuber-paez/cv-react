import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import DataProfile from '../data/DataProfile';

function ProfileSection() {
    return (
        <div className="p-[5px] font-sans text-black"> {/* Reducido de 10px a 8px */}

            <div className="flex items-center gap-[6px] mb-[6px]"> {/* gap y mb reducidos */}
                <FaUserCircle className="text-[22px] text-black" /> {/* Icono ligeramente más pequeño */}

                <h1 className="text-[20px] font-bold tracking-tight"> {/* Título de 24px a 18px */}
                    Perfil Personal
                </h1>
            </div>

            {/* Reducido el padding izquierdo de 25px a 15px para ganar espacio visual horizontal interno */}
            <div className="border-l-[1.5px] border-black ml-[10px] pl-[18px] pr-[0px] max-w-[700px]">

                <p className="text-justify leading-tight whitespace-pre-line text-[15px]">
                    {/* leading-tight (1.25) en lugar de 22px y fuente de 14px */}
                    {DataProfile.profile}
                </p>
            </div>

        </div>
    )
}

export default ProfileSection
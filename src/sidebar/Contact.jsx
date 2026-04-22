import React from 'react';
import DataContact from '../data/DataContact';
import { IoIosContact } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div className='flex flex-col gap-4 w-full max-w-full overflow-hidden'>
            {/* Título de contacto con icono */}
            <div className='flex items-center gap-3'>
                <IoIosContact className='text-2xl' /> {/* Icono un poco más chico */}
                <h1 className='text-[26px] font-bold'>Contacto</h1> {/* Título más pequeño */}
            </div>

            {/* Lista de Información */}
            <div className='flex flex-col gap-3 mt-0 pl-2'>

                {/* Ciudad */}
                <div className='flex items-center gap-2'>
                    <ImLocation2 className='text-xl shrink-0' />
                    <h3 className='text-sm'>{DataContact.city}</h3>
                </div>

                {/* Teléfono */}
                <div className='flex items-center gap-2'>
                    <MdPhone className='text-xl shrink-0' />
                    <h3 className='text-sm'>{DataContact.phone || "+57 320 253 4042"}</h3>
                </div>

                {/* Email - Aquí está la clave para que no sobresalga */}
                <div className='flex items-center gap-2 overflow-hidden'>
                    <TfiEmail className='text-xl shrink-0' />
                    <h3 className='text-sm truncate' title={DataContact.email}>
                        {DataContact.email}
                    </h3>
                </div>

                {/* Birthdate */}
                <div className='flex items-center gap-2'>
                    <MdOutlineCalendarMonth className='text-xl shrink-0' />
                    <h3 className='text-sm'>{DataContact.birthdate}</h3>
                </div>

                {/* Id */}
                <div className='flex items-center gap-2'>
                    <FaRegIdCard className='text-xl shrink-0' />
                    <h3 className='text-sm'>{DataContact.id}</h3>
                </div>

                {/* GitHub */}
                <div className='flex items-center gap-2 overflow-hidden'>
                    <FaGithub className='text-xl shrink-0' />
                    <a
                        href={DataContact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-sm underline truncate hover:text-gray-300'
                    >
                        {DataContact.github}
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Contact;
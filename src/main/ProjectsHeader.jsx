import React from 'react'
import DataProjects from '../data/DataProjects';
import { FaFolder } from "react-icons/fa";
import Project from './Project';

function ProjectsHeader() {
    return (
        <div className="font-sans text-black p-l-[5px]">
            <div className="flex items-center gap-[6px] mb-[5px]">
                <FaFolder className="text-[22px] text-black" />
                <h1 className="text-[20px] font-bold tracking-tight">
                    Proyectos
                </h1>
            </div>
        </div>
    );
}

export default ProjectsHeader
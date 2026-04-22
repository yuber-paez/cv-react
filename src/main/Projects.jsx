import React from 'react';
import DataProjects from '../data/DataProjects';
import { FaFolder } from "react-icons/fa";
import Project from './Project';

function Projects() {
    return (
        <div className="p-[8px] font-sans text-black"> 
            <div className="flex flex-col gap-[8px]">
                {DataProjects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
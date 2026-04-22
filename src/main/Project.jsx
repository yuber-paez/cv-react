import React from 'react';

function Project({
    project,
    showDescription = true,
    showResponsibilities = true,
    showTech = true,
    showLinks = true,
    isContinuation = false
}) {

    return (
        <div className="font-sans text-black p-[5px] pt-[0px]">

            <h2 className="text-[16px] font-bold mb-[4px]"> {/* Reducido de 18px a 16px */}
                {project.name} {isContinuation && "(continuación)"}
            </h2>

            {/* Ajustado ml-[10px] y pl-[18px] para consistencia total */}
            <div className="border-l-[1.5px] border-black ml-[10px] pl-[18px] pr-[0px] max-w-[700px]">

                {showDescription && (
                    <p className="text-justify leading-tight whitespace-pre-line text-[15px]">
                        {project.description}
                    </p>
                )}

                <div className="flex flex-col gap-[6px]"> {/* gap reducido de 10px a 6px */}

                    {showResponsibilities && (
                        <div>
                            <h3 className="font-bold text-[15px] mb-[2px]">Responsabilidades:</h3>
                            <ul className="list-disc ml-[18px] space-y-[1px]">
                                {project.responsibility.map((resp, index) => (
                                    <li key={index} className="text-[15px] leading-tight">
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {showTech && (
                        <div>
                            <h3 className="font-bold text-[15px] mb-[2px]">
                                Tecnologías utilizadas:
                            </h3>
                            <div className="flex flex-col gap-y-1"> {/* Flex wrap ayuda a ahorrar espacio vertical */}
                                {project.techs.map((tech, index) => {
                                    const [title, content] = tech.split(':');
                                    return (
                                        <p key={index} className="text-[14px] leading-tight">
                                            <strong className="font-semibold">{title}:</strong> {content}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {showLinks && (
                        <div>
                            <h3 className="font-bold text-[15px] mb-[1px]">Repositorio:</h3>
                            <div className="text-[14px] flex flex-col gap-[1px]">
                                <p>
                                    GitHub:{" "}
                                    <a href={project.repository} target="_blank" rel="noreferrer" className="underline font-medium hover:text-gray-700">
                                        Aquí
                                    </a>
                                </p>
                                {project.web && (
                                    <p>
                                        Sitio web:{" "}
                                        <a href={project.web} target="_blank" rel="noreferrer" className="underline font-medium hover:text-gray-700">
                                            Aquí
                                        </a>
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Project;
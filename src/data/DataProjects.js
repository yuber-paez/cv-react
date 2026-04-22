const DataProjects = [
    {
        id: 1,
        name: "Sistema de Gestión Documental Empresarial",
        description:
            `Sistema web para la gestión de correspondencia empresarial que permite organizar, registrar y consultar documentos de manera eficiente.
        Incluye funcionalidades de trazabilidad para el seguimiento de cada comunicación dentro de la organización.
        Garantiza el control y la seguridad de la información, optimizando los procesos administrativos internos.
        `,
        responsibility: [
            "Coordiné el desarrollo del proyecto mediante la planificación y seguimiento de tareas, facilitando la organización del equipo de trabajo.",
            "Diseñé e implementé la arquitectura completa de la aplicación (base de datos, backend y frontend).",
            "Desarrollé un sistema que mejora la gestión y trazabilidad de la correspondencia, optimizando los procesos internos de control documental. "
        ],

        techs: [
            "Lenguaje y Framework: PHP 8.2, Laravel, Tailwind",
            "Base de datos: MySQL",
            "Generación de archivos: PDF (barryvdh/laravel-dompdf), Excel (Maatwebsite/Laravel-Excel)",
            "Otras herramientas: Procesamiento de imágenes (Intervention Image)"
        ],

        repository: "https://github.com/yuber-paez/gyc-correspondencia",

        web: "https://myjob.solutions/control-documental/public/",

    
},
{
        id: 2,
        name: "Red Social",


        description:
            `Aplicación web tipo red social orientada a la creación y gestión de contenido por parte de los usuarios.
        Implementa funcionalidades como autenticación, publicaciones, sistema de likes, comentarios y seguimiento entre usuarios.
        Desarrollada para garantizar una experiencia interactiva, optimizando la gestión y visualización de información en la plataforma.
        `,

        responsibility: [
            "Desarrollé de forma integral la aplicación, abarcando el diseño de la base de datos, implementación del backend y construcción del frontend.",
            "Implementé funcionalidades clave como autenticación de usuarios, creación de publicaciones, sistema de likes, comentarios y seguimiento entre usuarios.",
            "Construí una plataforma interactiva tipo red social, optimizando la gestión y visualización de contenido para mejorar la experiencia del usuario."
        ],

        techs: [
            "Frontend: React, Sass",
            "Backend: Node.js, Express",
            "Base de datos: MySQL",
            "Otras herramientas: React Query, Axios, Material UI, React Router, manejo de fechas (Moment.js)"
        ],

        repository: "https://github.com/yuber-paez/social-media",

    }
];


export default DataProjects;
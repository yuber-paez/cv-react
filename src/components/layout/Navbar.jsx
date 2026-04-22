import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineDownload } from "react-icons/hi";
import DataHeader from "../../data/DataHeader";

// --- IMPORTACIONES PARA LA PREVIEW ---
import Layout from "../layout/Layout";
import Page from "../layout/Page";
import Contact from "../../sidebar/Contact";
import Education from "../../sidebar/Education";
import References from "../../sidebar/References";
import Header from "../../main/Header";
import ProfileSection from "../../main/ProfileSection";
import Skills from "../../main/Skills";
import DataProjects from "../../data/DataProjects";
import Project from "../../main/Project";
import Picture from "../../sidebar/Picture";
import Rol from "../../main/Rol";
import ProjectsHeader from "../../main/ProjectsHeader";

function Navbar({ zoom, setZoom, openMenu, setOpenMenu }) {
    const [currentPage, setCurrentPage] = useState(1);
    const menuRef = useRef(null);

    // Cerrar el menú al hacer clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Si el menú está abierto y el clic no es dentro del contenedor del menú 
            // ni en el botón que lo abre
            if (
                openMenu &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest(".menu-toggle-button")
            ) {
                setOpenMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu, setOpenMenu]);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = process.env.PUBLIC_URL + "/assets/Yuber_Paez_CV_React.pdf";
        link.download = "Yuber_Paez_CV_React.pdf";
        link.click();
    };

    const pagePreviews = {
        1: (
            <Page>
                <Layout
                    sidebarContent={<><Picture /><Contact /><Education /></>}
                    mainContent={<><Header /><Rol /><ProfileSection /><Skills /><ProjectsHeader /><Project project={DataProjects[0]} showTech={false} showLinks={false} /></>}
                />
            </Page>
        ),
        2: (
            <Page>
                <Layout
                    sidebarContent={<><References /></>}
                    mainContent={<><Project project={DataProjects[0]} showDescription={false} showResponsibilities={false} isContinuation={true} /><div className="mt-6" /><Project project={DataProjects[1]} /></>}
                />
            </Page>
        )
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const pageNumber = parseInt(entry.target.id.split('-')[1]);
                    setCurrentPage(pageNumber);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const pageElements = document.querySelectorAll('[id^="page-"]');
        pageElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollToPage = (page) => {
        const element = document.getElementById(`page-${page}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const zoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2));
    const zoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));

    return (
        <nav className="text-white fixed top-0 left-0 w-full bg-neutral-700 shadow-lg px-4 flex justify-between items-center z-50 h-14">

            {/* SECCIÓN IZQUIERDA */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="menu-toggle-button hover:bg-neutral-600 p-1 rounded transition-colors"
                >
                    <GiHamburgerMenu className="text-xl" />
                </button>
                <h1 className="font-normal text-sm hidden md:block">
                    {DataHeader.name} {DataHeader.lastName}
                </h1>
            </div>

            {/* MENÚ LATERAL (SIDEBAR) */}
            <div
                ref={menuRef}
                className={`fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-64 bg-neutral-800 text-white shadow-lg z-40 transform transition-transform duration-200 border-r border-white/20 overflow-y-auto ${openMenu ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-4 flex flex-col items-center">
                    {[1, 2].map((page) => (
                        <div
                            key={page}
                            onClick={() => {
                                scrollToPage(page);
                                setOpenMenu(false); // Cierra el menú al seleccionar página
                            }}
                            className="group cursor-pointer flex flex-col items-center w-full"
                        >
                            <div className={`relative w-fit mx-auto shadow-md overflow-hidden mb-2 ${currentPage === page ? "border-[4px] border-blue-500" : "border border-neutral-700"}`}>
                                <div className="relative w-[140px] aspect-[1/1.41] bg-white overflow-hidden">
                                    <div className="absolute inset-0 origin-top-left scale-[0.18]">
                                        {pagePreviews[page]}
                                    </div>
                                </div>
                                {currentPage !== page && <div className="absolute inset-0 bg-black/10"></div>}
                            </div>
                            <span className="text-sm font-bold mb-4">{page}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* SECCIÓN CENTRAL: CONTROLES DE ZOOM */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6 bg-neutral-800/50 px-4 py-1 rounded-md border border-neutral-600">
                <div className="flex items-center gap-2 text-sm border-r border-neutral-500 pr-4">
                    <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-500 min-w-[24px] text-center">
                        {currentPage}
                    </span>
                    <span className="text-neutral-400">/</span>
                    <span>2</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <button onClick={zoomOut} className="hover:text-blue-400 font-bold text-lg px-2">-</button>
                    <span className="min-w-[50px] text-center">{Math.round(zoom * 100)}%</span>
                    <button onClick={zoomIn} className="hover:text-blue-400 font-bold text-lg px-2">+</button>
                </div>
            </div>

            {/* SECCIÓN DERECHA: DESCARGA */}
            <div className="flex items-center">
                <button
                    title="Descargar PDF"
                    onClick={handleDownload}
                    className="hover:bg-neutral-600 p-2 rounded-full transition-all"
                >
                    <HiOutlineDownload className="text-xl" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
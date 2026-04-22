import React, { useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Page from "./components/layout/Page";

// Sidebar
import Contact from "./sidebar/Contact";
import Education from "./sidebar/Education";
import References from "./sidebar/References";

// Main
import Header from "./main/Header";
import ProfileSection from "./main/ProfileSection";
import Skills from "./main/Skills";
import DataProjects from "./data/DataProjects";
import Project from "./main/Project";
import Picture from "./sidebar/Picture";
import Rol from "./main/Rol";
import ProjectsHeader from "./main/ProjectsHeader";
import Navbar from "./components/layout/Navbar";


// ... tus importaciones se mantienen igual

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [zoom, setZoom] = useState(1);
  const BASE_HEIGHT = 2260;
  const BASE_WIDTH = 794; // El ancho de una hoja A4 en píxeles aprox (o lo que mida tu componente <Page>)
  const scaledWidth = BASE_WIDTH * zoom;

  useEffect(() => {
    const handleInitialScale = () => {
      const screenWidth = window.innerWidth;

      // Si el ancho de la pantalla es menor al de tu CV (móvil/tablet)
      if (screenWidth < BASE_WIDTH) {
        // Calculamos el porcentaje exacto para que encaje al ancho
        // Ejemplo: si la pantalla mide 390px y el CV 794px, el zoom será ~0.49
        const targetZoom = screenWidth / (BASE_WIDTH + 40); // +40 por los paddings
        setZoom(targetZoom);
      } else {
        // Si es desktop, podemos dejarlo en 1 o un valor por defecto
        setZoom(0.8);
      }
    };

    handleInitialScale();
    // Opcional: Re-ajustar si el usuario voltea el teléfono (landscape)
    window.addEventListener("resize", handleInitialScale);
    return () => window.removeEventListener("resize", handleInitialScale);
  }, []);

  return (
    <div className="bg-neutral-800 min-h-screen overflow-hidden" id="cv-content">
      <Navbar
        zoom={zoom}
        setZoom={setZoom}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <div className="pt-14">
        <div className="w-full h-[calc(100vh-3.5rem-40px)] overflow-auto scroll-smooth">
          <div
            className="flex justify-center transition-all duration-300 ease-in-out py-5"
            style={{
              marginLeft: openMenu ? "16rem" : "0px",
              height: `${BASE_HEIGHT * zoom + 60}px`,
              minHeight: "100%",
              /* --- EL TRUCO ESTÁ AQUÍ --- */
              // Si el ancho escalado es mayor al 100%, usamos el ancho escalado.
              // Esto "empuja" las paredes del contenedor y activa el scroll horizontal.
              width: scaledWidth > window.innerWidth
                ? `${scaledWidth + 40}px`
                : (openMenu ? `calc(100% - 16rem)` : "100%"),
            }}
          >
            <div
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "top center",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                width: `${BASE_WIDTH}px`,
                height: "fit-content",
              }}
            >
              {/* Página 1 */}
              <div id="page-1" className="scroll-mt-20">
                <Page>
                  <Layout
                    sidebarContent={<><Picture /><Contact /><Education /></>}
                    mainContent={<><Header /><Rol /><ProfileSection /><Skills /><ProjectsHeader /><Project project={DataProjects[0]} showTech={false} showLinks={false} /></>}
                  />
                </Page>
              </div>

              {/* Página 2 */}
              <div id="page-2" className="scroll-mt-20">
                <Page>
                  <Layout
                    sidebarContent={<><References /></>}
                    mainContent={<><Project project={DataProjects[0]} showDescription={false} showResponsibilities={false} isContinuation={true} /><div className="mt-6" /><Project project={DataProjects[1]} /></>}
                  />
                </Page>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 w-full text-center text-xs text-neutral-300 py-3 bg-neutral-900/70 backdrop-blur-md border-t border-neutral-700">
        © {new Date().getFullYear()} Yuber Paez - Desarrollador de Software
      </footer>
    </div>

  );
}

export default App;

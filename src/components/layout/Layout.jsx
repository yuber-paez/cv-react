import React from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';


function Layout({ sidebarContent, mainContent }) {
  return (
    <div className="flex h-full">

      <div className="w-[30%] bg-neutral-600 text-white p-4">
        {sidebarContent}
      </div>

      <div className="w-[70%] p-6">
        {mainContent}
      </div>

    </div>
  );
}

export default Layout;

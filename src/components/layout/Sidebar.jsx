import React from "react";
import Picture from "../../sidebar/Picture";
import Contact from "../../sidebar/Contact";
import Education from "../../sidebar/Education";
import References from "../../sidebar/References";

function Sidebar() {
  return (
    <aside
      className="bg-neutral-600 text-white p-6 h-300vh flex flex-col items-center gap-6"
      style={{ paddingTop: "50px" }}
    >
      <Picture />

      <Contact />

      <Education />

      <References />
      
    </aside>
  );
}

export default Sidebar;
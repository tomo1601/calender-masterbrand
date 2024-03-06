import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendaer from "./SmallCalendaer";

const Sidebar = () => {
  return (
    <aside className="border p-5 w-80 bg-white">
      <CreateEventButton />
      <SmallCalendaer/>
    </aside>
  );
};

export default Sidebar;
 
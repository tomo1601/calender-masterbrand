import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendaer from "./SmallCalendaer";
import Labels from "./Labels";
import EventOfDay from "./EventOfDay";
import SelectTimeForm from "./TimeOfDay";

const Sidebar = () => {
  return (
    <aside className="border p-5 w-80 bg-white">
      <CreateEventButton />
      <SmallCalendaer/>
      <Labels/>
      <EventOfDay/>
    </aside>
  );
};

export default Sidebar;
 
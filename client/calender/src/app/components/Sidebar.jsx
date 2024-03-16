import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendaer from "./SmallCalendaer";
import Labels from "./Labels";
import EventOfDay from "./EventOfDay";
import SelectTimeForm from "./TimeOfDay";

const Sidebar = () => {
  return (
    <aside className="border p-5 bg-white mx-4 w-full md:w-80 md:mr-0">
      <CreateEventButton />
      <SmallCalendaer/>
      <Labels/>
      <EventOfDay/>
    </aside>
  );
};

export default Sidebar;
 
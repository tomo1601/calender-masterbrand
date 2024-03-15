"use client";
import React, { useEffect, useState, useContext } from "react";
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";
import EventModal from "./EventModal";

const FullCalendar = () => {
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
      {showEventModal&&<EventModal/>}
          <div className="max-w-screen-xl mx-auto flex mt-4 mb-2">
            <Sidebar />
            <div className="h-screen flex flex-col w-full mx-4 bg-white">
              <CalendarHeader />
              <div className="flex flex-1">
                <Month month={currentMonth} />
              </div>
            </div>
          </div>
    </React.Fragment>
  );
};

export default FullCalendar;

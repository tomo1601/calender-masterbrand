"use client";
import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { useListEvents } from "./EventStore";



const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonthIndex, setSmallCalendarMonthIndex] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(null);
  useEffect(() => {
    smallCalendarMonthIndex && setMonthIndex(smallCalendarMonthIndex);
  }, [smallCalendarMonthIndex]);

  const {setListEvent} = useListEvents()

  const initEvents = () => {
    const storageEvents = localStorage.getItem("listEvents");
    const parseEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parseEvents;
  };
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setListEvent(initEvents())
    }
  },[])
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonthIndex,
        setSmallCalendarMonthIndex,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;

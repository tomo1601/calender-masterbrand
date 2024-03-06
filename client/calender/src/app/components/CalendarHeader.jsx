'use client'
import React, { useContext } from "react";
import Image from "next/image";
import logo_calendar from "../assets/images.png";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

const CalendarHeader = () => {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext)

  const handleOnClickToPrevMonth = ()=> setMonthIndex(monthIndex-1)
  const handleOnClickToNextMonth = ()=> setMonthIndex(monthIndex+1)
  const handleOnClickToday = ()=> setMonthIndex(dayjs().month())
  return (
    <header className="px-4 py-2 flex items-center">
      <Image
        src={logo_calendar}
        alt="calendar-logo"
        className="mr-2 w-12 h-12"
      />
      <h1 className="mr-10 text-xl text-grey-500 fond-bold">Calendar</h1>
      <button className="border rounded border-blue-500 py-1 px-4 mr-5" onClick={()=>handleOnClickToday()}>Today</button>
      <button onClick={()=>handleOnClickToPrevMonth()}>
        <span className="material-icons-outlined cursor-pointer text-grey-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={()=>handleOnClickToNextMonth()}>
        <span className="material-icons-outlined cursor-pointer text-grey-600 mx-2">
          chevron_right
        </span>
      </button>
      {/* <h1 className="mr-10 text-xl text-grey-500 fond-bold font-semibold">{dayjs().month(monthIndex).format('MMM')}</h1> */}
      <h1 className="mr-10 text-xl text-grey-500 fond-bold">{dayjs(new Date(dayjs().year(), monthIndex)).format('MMM YYYY')}</h1>
    </header>
  );
};

export default CalendarHeader;

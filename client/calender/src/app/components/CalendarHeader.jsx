"use client";
import React, { useContext } from "react";
import Image from "next/image";
import logo_calendar from "../assets/images.png";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handleOnClickToPrevMonth = () => setMonthIndex(monthIndex - 1);
  const handleOnClickToNextMonth = () => setMonthIndex(monthIndex + 1);
  const handleOnClickToday = () => setMonthIndex(dayjs().month());
  return (
    <header className="px-4 py-2 flex flex-wrap items-center">
      <div className="flex justify-between w-full md:w-auto">
        <div className="flex items-center">
          <Image
            src={logo_calendar}
            alt="calendar-logo"
            className="mr-2 w-12 h-12"
          />
          <h1 className="mr-10 text-xl text-grey-500 fond-bold">Calendar</h1>
        </div>
        <button
          className="border rounded border-blue-500 md:py-1 px-4 md:mr-5"
          onClick={() => handleOnClickToday()}
        >
          Today
        </button>
      </div>
      <div className="flex justify-center w-full md:w-auto">
        <button onClick={() => handleOnClickToPrevMonth()}className="order-1 md:order-1">
          <span className="material-icons-outlined cursor-pointer text-grey-600 mx-2">
            chevron_left
          </span>
        </button>
        <button onClick={() => handleOnClickToNextMonth()} className="order-2 md:order-1">
          <span className="material-icons-outlined cursor-pointer text-grey-600 mx-2">
            chevron_right
          </span>
        </button>
        {/* <h1 className="mr-10 text-xl text-grey-500 fond-bold font-semibold">{dayjs().month(monthIndex).format('MMM')}</h1> */}
        <h1 className="text-xl text-grey-500 fond-bold order-1 md:mr-10">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMM YYYY")}
        </h1>
      </div>
    </header>
  );
};

export default CalendarHeader;

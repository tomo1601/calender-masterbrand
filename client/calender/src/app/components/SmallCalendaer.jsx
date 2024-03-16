"use client";
import React, { useState, useEffect, useContext } from "react";
import { getCurrentDayClass, getMonth } from "../util";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

const SmallCalendaer = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);
  const { monthIndex, setSmallCalendarMonthIndex, daySelected, setDaySelected } =
    useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  const handleOnClickToPrevMonth = () =>
    setCurrentMonthIndex(currentMonthIndex - 1);
  const handleOnClickToNextMonth = () =>
    setCurrentMonthIndex(currentMonthIndex + 1);

  return (
    <div className="mt-5">
      <header className="flex gap-1 justify-center md:justify-between">
        <button onClick={() => handleOnClickToPrevMonth()}>
          <span className="material-icons-outlined cursor-pointer text-grey-600 mx-2">
            chevron_left
          </span>
        </button>
        <h1 className="text-xl text-grey-500 fond-bold text-center">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMM YYYY"
          )}
        </h1>
        <button onClick={() => handleOnClickToNextMonth()}>
          <span className="material-icons-outlined cursor-pointer text-grey-600 mx-2">
            chevron_right
          </span>
        </button>
      </header>
      <div className="grid grid-cols-7 grid-row-6">
        {currentMonth[0].map((day, index) => (
          <span className="text-sm py-2 text-center font-semibold" key={index}>
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, index2) => (
              <button
                className={`py-1 w-full ${getCurrentDayClass(day, daySelected)}`}
                key={index2}
                onClick={() => {
                  setSmallCalendarMonthIndex(currentMonthIndex);
                  setDaySelected(day)
                }}
              >
                <span className="text-sm">{day.format("DD")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendaer;

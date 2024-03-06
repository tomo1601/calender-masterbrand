"use client";
import React, { useContext, useEffect, useState } from "react";
import { getCurrentDayClass } from "../util";
import GlobalContext from "../context/GlobalContext";
import { useListEvents } from "../context/EventStore";
import dayjs from "dayjs";

const Day = ({ day, rowIndex }) => {
  const { setDaySelected, setShowEventModal } = useContext(GlobalContext);
  const [dayEvents, setDayEvents] = useState([]);
  const { listEvents} = useListEvents();

  useEffect(() => {
    const events = listEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [listEvents]);

  return (
    <div className="border border-grey-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm mt-1 font-semibold">
            {" "}
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center ${getCurrentDayClass(day)}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, index) => (
          <div className={`bg-${evt.label}-500 p-1 ml-1 mr-3 mb-1 text-gray-600 text-sm rounded truncate`} key={index}>
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;

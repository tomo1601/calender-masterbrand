"use client";
import React, { useContext, useEffect, useState } from "react";
import { useListEvents } from "../context/EventStore";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

const EventOfDay = () => {
  const { listEvents } = useListEvents();
  const { daySelected } = useContext(GlobalContext);
  const [currentEvents, setCurrentEvents] = useState([]);

  useEffect(() => {
    setCurrentEvents(
      listEvents.filter(
        (evt) =>
          dayjs(evt.day).format("DD-MM-YY") === daySelected.format("DD-MM-YY")
      )
    );
  }, [daySelected, listEvents]);

  return (
    <div className="mt-5">
      <header className="flex flex-col text-blue-500 font-bold text-lg">
        Upcoming Events
      </header>
      <p className="text-gray-600 text-sm">
        {daySelected.format("ddd, DD MMM YYYY")}
      </p>
      {currentEvents.map((evt, index)=>(
        <div className={`rounded pl-5 border-l-4 border-${evt.label}-500 my-5 bg-orange-50 py-2 flex flex-wrap gap-2`} key={index}>
            <header className="text-sm text-blue-600 font-semibold">
                {evt.title}
            </header>
            <span className="text-sm text-gray-600 uppercase">{dayjs(evt.day).format("ddd, DD MMM YYYY")}</span>
            <div className="grid grid-cols-10">
                <p className={`col-span-1 w-5 h-5 uppercase bg-${evt.label}-500 text-white rounded-full flex items-center justify-center`}>{evt.email.charAt(0)}</p>
                <p className="col-span-9 pl-2 text-blue-400 cursor-pointer text-sm">{evt.name}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default EventOfDay;

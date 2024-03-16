"use client";
import React, { useEffect, useMemo, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { useListEvents } from "./EventStore";
import { useEvent } from "../hooks/useEvent";

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonthIndex, setSmallCalendarMonthIndex] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [eventSelected, setEventSelected] = useState(dayjs());
  const [labels, setLabels] = useState([]);
  const [showEventModal, setShowEventModal] = useState(null);
  useEffect(() => {
    smallCalendarMonthIndex && setMonthIndex(smallCalendarMonthIndex);
  }, [smallCalendarMonthIndex]);

  const { listEvents, setListEvent } = useListEvents();
  const {GetEvent} = useEvent()
  const {data} = GetEvent()
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      data&&setListEvent(data);
    }
  }, [data]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(listEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => (lbl.label = label));
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [listEvents]);

  const updateLabel = (label) => {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  };

  const filteredEvent = useMemo(() => {
    return listEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl => lbl.label))
        .includes(evt.label)
    );
  }, [listEvents, labels]);

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
        eventSelected,
        setEventSelected,
        labels,
        setLabels,
        updateLabel,
        filteredEvent,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;

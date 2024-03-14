import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonthIndex: null,
  setSmallCalendarMonthIndex: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  eventSelected: null,
  setEventSelected: (evt) => {},
  labels: [],
  setLabels: () => {},
  updateLabel: () => {},
  filteredEvent:[],
});

export default GlobalContext;

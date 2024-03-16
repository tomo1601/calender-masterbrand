"use client";
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { useListEvents } from "../context/EventStore";
import { generateTimeOptions } from "../util";
import { createEvent, deleteEventById, updateEventById } from "../context/eventContext";

const labelsClass = ["indigo", "gray", "green", "blue", "red", "purple"];

const EventModal = () => {
  const { setShowEventModal, daySelected, eventSelected, setEventSelected } =
    useContext(GlobalContext);
  const [title, setTitle] = useState(eventSelected ? eventSelected.title : "");
  const [description, setDescription] = useState(
    eventSelected ? eventSelected.description : ""
  );
  const [email, setEmail] = useState(eventSelected ? eventSelected.email : "");
  const [name, setName] = useState(eventSelected ? eventSelected.name : "");
  const [address, setAddress] = useState(
    eventSelected ? eventSelected.address : ""
  );
  const [selectedColor, setSelectedColor] = useState(
    eventSelected
      ? labelsClass.find((lbl) => lbl === eventSelected.label)
      : labelsClass[0]
  );
  const { listEvents, setListEvent } = useListEvents();

  const timeOfDay = generateTimeOptions();
  const [timeStartOptions, setTimeStartOptions] = useState(timeOfDay);
  const [timeEndOptions, setTimeEndOptions] = useState(timeOfDay);
  const [startTime, setStartTime] = useState("08:00 AM");
  const [endTime, setEndTime] = useState("08:00 AM");

  // Function to handle time start change
  const handleStartTimeChange = (e) => {
    const { value } = e.target;
    setStartTime(value);
    const index = timeOfDay.findIndex(
      (item) => item.props.value === value
    );
    const newOptions = timeOfDay.slice(index + 1);
    setTimeEndOptions(newOptions);
  };

  // Function to handle time end change
  const handleEndTimeChange = (e) => {
    const { value } = e.target;
    setEndTime(value);
    const index = timeOfDay.findIndex(
      (item) => item.props.value === value
    );
    const newOptions = timeOfDay.slice(0,index);
    setTimeStartOptions(newOptions);
  };

  const pushEventCalendar = (newEvent) => {
    setListEvent([...listEvents, newEvent]);
    createEvent(newEvent)
  };

  const updateEventCalendar = (updateEvent) => {
    setListEvent(
      listEvents.map((evt) => (evt.id === updateEvent.id ? updateEvent : evt))
    );
    updateEventById(updateEvent)
  };

  const deleteEventCalendar = (deleteEvent) => {
    setEventSelected(null);
    setListEvent(listEvents.filter((evt) => evt.id !== deleteEvent.id));
    deleteEventById(deleteEvent)
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      email,
      name,
      address,
      description,
      startTime: startTime,
      endTime: endTime,
      label: selectedColor,
      day: daySelected.valueOf(),
      id: eventSelected ? eventSelected.id : Date.now(),
    };
    if (eventSelected) {
      updateEventCalendar(calendarEvent);
    } else {
      pushEventCalendar(calendarEvent);
    }
    setEventSelected(null);
    setShowEventModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div className="">
            {eventSelected && (
              <span
                className="material-icons-outlined text-gray-400 cursor-pointer"
                onClick={() => {
                  deleteEventCalendar(eventSelected);
                  setShowEventModal(false);
                }}
              >
                delete
              </span>
            )}
            <button>
              <span
                className="material-icons-outlined text-gray-400"
                onClick={() => {
                  setEventSelected(null);
                  setShowEventModal(false);
                }}
              >
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-10 items-end gap-y-7">
            <div className="col-span-1"></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="col-span-9 pt-3 border-0 text-gray-600 text-lg font-semibold pd-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="col-span-1 material-icons-outlined text-gray-400">
              schedule
            </span>
            <p className="col-span-9">
              {daySelected.format("dddd, DD MMMM YY")}
            </p>
            <span className="col-span-1 material-icons-outlined text-gray-400">
              email
            </span>
            <input
              type="text"
              name="email"
              placeholder="Add email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="col-span-9 pt-3 border-0 text-gray-600 pd-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="col-span-1 material-icons-outlined text-gray-400">
              perm_identity
            </span>
            <input
              type="text"
              name="name"
              placeholder="Add name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="col-span-9 pt-3 border-0 text-gray-600 pd-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="col-span-1 material-icons-outlined text-gray-400">
              place
            </span>
            <input
              type="text"
              name="address"
              placeholder="Add address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="col-span-9 pt-3 border-0 text-gray-600 pd-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="col-span-1 material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="col-span-9 pt-3 border-0 text-gray-600 pd-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <div className="grid grid-cols-6 col-span-10">
              <label className="col-span-1 flex items-center justify-left">
                From:
              </label>
              <select
                name="starttime"
                value={startTime}
                onChange={handleStartTimeChange}
                className="col-span-2"
              >
                {timeStartOptions}
              </select>

              <label className="col-span-1 flex items-center justify-center">
                To:
              </label>
              <select
                name="endtime"
                value={endTime}
                onChange={handleEndTimeChange}
                className="col-span-2"
              >
                {timeEndOptions}
              </select>
            </div>
            <span className="col-span-1 material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="col-span-9 flex gap-x-2">
              {labelsClass.map((clClass, i) => (
                <span
                  className={`bg-${clClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  key={i}
                  onClick={() => setSelectedColor(clClass)}
                >
                  {selectedColor === clClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-3 mt-5">
          <button
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
            type="submit"
            onClick={handleSubmitEvent}
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;

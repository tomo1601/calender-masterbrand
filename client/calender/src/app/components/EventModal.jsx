"use client";
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { useListEvents } from "../context/EventStore";

const labelsClass = ["indigo", "gray", "green", "blue", "red", "purple"];

const EventModal = () => {
  const { setShowEventModal, daySelected } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { listEvents, setListEvent } = useListEvents();

  const pushEventCalendar = (newEvent) => {
    localStorage.setItem("listEvents", JSON.stringify([...listEvents, newEvent]));
    setListEvent([...listEvents, newEvent]);
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedColor,
      day: daySelected.valueOf(),
      id: Date.now(),
    };
    pushEventCalendar(calendarEvent);
    setShowEventModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button>
            <span
              className="material-icons-outlined text-gray-400"
              onClick={() => setShowEventModal(false)}
            >
              close
            </span>
          </button>
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

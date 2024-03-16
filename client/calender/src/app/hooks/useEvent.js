import useSWR from "swr";
import { createEvent, deleteEventById, getAllEvent, getEventById, updateEventById } from "../context/eventContext";

export const useEvent = () => {
  return {
    GetEvent: () => useSWR("allEvent", async () => {
        const res = await getAllEvent()
        return res
    }),
    GetEventById: (id) => useSWR("eventById", async () => {
        const res = await getEventById(id)
        return res
    }),
    CreateEvent: (event) => useSWR("createEvent", async () => {
        const res = await createEvent(event)
        return res
    }),
    UpdateEvent: (event) => useSWR("updateEvent", async () => {
        const res = await updateEventById(event)
        return res
    }),
    DeleteEventById: (id) => useSWR("deleteEvent", async () => {
        const res = await deleteEventById(id)
        return res
    }),
  };
};



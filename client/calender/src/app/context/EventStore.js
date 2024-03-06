import { create } from "zustand";

export const useListEvents = create((set) => ({
  listEvents: [],
  setListEvent: (data) => {
    set({ listEvents: data });
  },
}));

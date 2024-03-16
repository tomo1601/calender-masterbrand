import axios from "axios";

export const getAllEvent = async () => {
  const res = await axios.get(
    `https://calendar-be-example-441cc47b8eda.herokuapp.com/api/event`
  );
  if (res.data.success) {
    return res.data.events;
  } else throw new Error("Failed to fetch data");
};

export const getEventById = async (id) => {
  const res = await axios.get(
    `https://calendar-be-example-441cc47b8eda.herokuapp.com/api/event/${id}`
  );
  if (res.data.success) {
    return res.data.events;
  } else throw new Error("Failed to fetch data");
};

export const createEvent = async (event) => {
  const res = await fetch(
    "https://calendar-be-example-441cc47b8eda.herokuapp.com/api/event/new",
    {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await res.json();
  if (data.success) {
    return data.events;
  } else throw new Error("Failed to fetch data");
};

export const updateEventById = async (event) => {
  const res = await fetch(
    `https://calendar-be-example-441cc47b8eda.herokuapp.com/api/event/update/${event._id}`,
    {
      method: "PUT",
      body: JSON.stringify(event),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await res.json();
  if (data.success) {
    return data.events;
  } else throw new Error("Failed to fetch data");
};

export const deleteEventById = async (event) => {
  const res = await fetch(
    `https://calendar-be-example-441cc47b8eda.herokuapp.com/api/event/delete/${event._id}`,
    {
      method: "DELETE",
      body: JSON.stringify(event),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await res.json();
  if (data.success) {
    return data.events;
  } else throw new Error("Failed to fetch data");
};

import axios from "axios";

export async function getAllEvent() {
  const res = await axios.get(`http://localhost:5000/api/event`);
  if (res.data.success) {
    return res.data.events;
  } else throw new Error("Failed to fetch data");
}

export async function getEventById() {
  const res = await axios.get(`http://localhost:5000/api/event/1709976045506`);
  if (res.data.success) {
    return res.data.events;
  } else throw new Error("Failed to fetch data");
}

export async function createEvent(event) {
  const res = await axios.post(`http://localhost:5000/api/event/new`, event);
  console.log(res.data)
  if (res.data.success) {
    return res.data.events;
  } else throw new Error("Failed to fetch data");
}

export async function updateEventById() {
  const res = await axios.put(
    `http://localhost:5000/api/event/update/65f40d101fc63e6294af7fce`,
    {}
  );
  if (res.data.success) {
    return res.data.events;
  } else throw new Error("Failed to fetch data");
}

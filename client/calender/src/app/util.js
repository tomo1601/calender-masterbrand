import dayjs from "dayjs";

export const getMonth = (month = dayjs().month()) => {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();

  let currentMonthCuont = 0 - firstDayOfMonth;
  const dayMatrix = new Array(5).fill([]).map(() =>
    new Array(7).fill(null).map(() => {
      currentMonthCuont++;
      return dayjs(new Date(year, month, currentMonthCuont));
    })
  );
  return dayMatrix;
};

export const getCurrentDayClass = (day, daySelected) => {
  const currentDay = day.format("DD-MM-YY");
  const slcDay = daySelected && daySelected.format("DD-MM-YY");
  return currentDay === dayjs().format("DD-MM-YY")
    ? "bg-blue-600 text-white rounded-full w-7"
    : slcDay === currentDay
    ? "bg-blue-100 rounded-full text-blue-600 font-bold"
    : "";
};

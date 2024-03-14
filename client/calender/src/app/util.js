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

// Function to generate time options
export const generateTimeOptions = () => {
    const options = [];
    let hour = 8;
    let minute = 0;
    let period = 'AM';

    while (!(hour === 22 && minute === 15 && period === 'PM')) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${period}`;
      options.push(<option key={time} value={time}>{time}</option>);
      minute += 15;
      if (minute === 60) {
        minute = 0;
        hour++;
      }
      if (hour === 12 && minute === 0 && period === 'AM') {
        period = 'PM';
      }
    }

    return options;
  };

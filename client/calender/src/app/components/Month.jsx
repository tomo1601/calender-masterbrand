import React from "react";
import Day from "./Day";

const Month = ({ month }) => {
  return (
      <div className="flex-1 grid grid-cols-7 grid-rows-5">
        {month.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, index2) => (
              <Day day={day} key={index2} rowIndex={index}/>
            ))}
          </React.Fragment>
        ))}
      </div>
  );
};

export default Month;

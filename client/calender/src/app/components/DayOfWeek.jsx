import React from "react";

const DayOfWeek = () => {
  return (
    <React.Fragment>
      <div className="border border-grey-200 flex flex-col">
        <header className="flex flex-col items-center">
          <p className="text-sm mt-1 font-semibold"> SUN</p>
        </header>
      </div>
      <div className="border border-grey-200 flex flex-col">
        <header className="flex flex-col items-center">
          <p className="text-sm mt-1 font-semibold"> MON</p>
        </header>
      </div>
      <div className="border border-grey-200 flex flex-col">
        <header className="flex flex-col items-center">
          <p className="text-sm mt-1 font-semibold"> TUE</p>
        </header>
      </div>
      <div className="border border-grey-200 flex flex-col">
        <header className="flex flex-col items-center">
          <p className="text-sm mt-1 font-semibold"> WEB</p>
        </header>
      </div>
      <div className="border border-grey-200 flex flex-col">
        <header className="flex flex-col items-center">
          <p className="text-sm mt-1 font-semibold"> THU</p>
        </header>
      </div>
      <div className="border border-grey-200 flex flex-col">
        <header className="flex flex-col items-center">
          <p className="text-sm mt-1 font-semibold"> FRI</p>
        </header>
      </div>
      <div className="border border-grey-200 flex flex-col">
        <header className="flex flex-col items-center">
          <p className="text-sm mt-1 font-semibold"> SAT</p>
        </header>
      </div>
    </React.Fragment>
  );
};

export default DayOfWeek;

"use client";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Labels = () => {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <React.Fragment>
      {labels.length > 0 && (
        <p className="text-gray-500 font-bold mt-5">Label</p>
      )}
      <div className="grid grid-cols-2">
        {labels.map(({ label: lbl, checked }, index) => (
          <label key={index} className="items-center mt-3 block">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => updateLabel({ label: lbl, checked: !checked })}
              className={`form-checkbox h-5 w-5 text-${lbl}-500 rounded focus:ring-0 cursor-pointer`}
            />
            <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
          </label>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Labels;

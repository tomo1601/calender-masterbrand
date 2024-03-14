'use client'
import React, { useState } from 'react';
import { generateTimeOptions } from '../util';

const SelectTimeForm = () => {
  const timeOfDay = generateTimeOptions()
  const [timeStartOptions, setTimeStartOptions] = useState(timeOfDay)
  const [timeEndOptions, setTimeEndOptions] = useState(timeOfDay)
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Function to handle time start change
  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  // Function to handle time end change
  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  return (
    <div className='grid grid-cols-6 col-span-10'>
      <label className='col-span-1 flex items-center justify-left'>From:</label>
      <select value={startTime} onChange={handleStartTimeChange} className='col-span-2'>
        <option value="">00:00</option>
        {generateTimeOptions()}
      </select>

      <label className='col-span-1 flex items-center justify-center'>To:</label>
      <select value={endTime} onChange={handleEndTimeChange} className='col-span-2'>
        <option value="">00:00</option>
        {generateTimeOptions()}
      </select>
    </div>
  );
};

export default SelectTimeForm;
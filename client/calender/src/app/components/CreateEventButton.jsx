'use client'
import React, { useContext } from 'react'
import Image from "next/image";
import plusIcon from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext';
const CreateEventButton = () => {
  const {setShowEventModal} = useContext(GlobalContext)
  return (
    <button className='border p-2 rounded-full flex items-center shadow-md hover:shadow-xl mx-auto' onClick={()=>setShowEventModal(true)}>
        <Image
        src={plusIcon}
        alt="create-event-icon"
        className="w-7 h-7"
      />
      <span className='pl-3 pr-7'>Create</span>
    </button>
  )
}

export default CreateEventButton
import React from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
  return (
    <div className='font-mono bg-emerald-100 flex justify-center '>
      <div>
      <h1 className='text-4xl text-sky-500 mt-9'>Calender</h1>
      <p className='mt-10 '><DayPicker /></p>
      </div>
    </div>
  )
}

export default Calender
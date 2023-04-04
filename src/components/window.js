import React from 'react'
import WindowTracker from './windowtracker';
import { useState } from 'react';

function Window() {
    const [show, setShow] = useState(true)

    function toggle() {
        return setShow(prevShow => !prevShow)
    }
   

  return (
    <div className='m-5'>
      <button className='border rounded-lg px-3 py-1 font-semibold text-xl bg-orange-500' onClick={toggle}>Toggle Window Tracker</button>
      {show && <WindowTracker />}
    </div>
  )
}

export default Window;

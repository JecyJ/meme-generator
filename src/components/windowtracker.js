import React, { useEffect, useState } from 'react'

function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    useEffect(() => {
        function WatchWindow() {
            console.log('setting up...')
            return setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', WatchWindow)

        return function() {
            console.log('cleaning up...')
            window.removeEventListener('resize', WatchWindow)
        }      
    }, [])

  return (
    <div>
      <h1 className='text-xl'>Window Width: {windowWidth}</h1>
    </div>
  )
}

export default WindowTracker;

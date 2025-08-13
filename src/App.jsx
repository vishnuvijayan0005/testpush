import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Team1 from './components/team1'
import Users from './components/Users'
import Bookdetails from './components/Bookdetails'
function App() {
  
  return(
    <>
    {/* <div id='teams'>
      <div className='team'>
    <Team1 team="team1"/>
    </div>
    <div className='team'>
    <Team1 team="team2"/>
    </div>
    </div> */}
    {/* <Users/> */}
 <Bookdetails/>
    </>
  )
}

export default App

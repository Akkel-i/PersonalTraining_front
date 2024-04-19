import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      
      <h1>Trainig app</h1>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/customerlist">Customers</Link>
        </button>
        <button>
          <Link to="/traininglist">Training</Link>
        </button>
      </nav>
      <Outlet />
    </div>
  )
}


export default App
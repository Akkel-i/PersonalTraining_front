import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { AppBar, Toolbar, Typography  } from "@mui/material"
import Button from '@mui/material/Button';
import { HashRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom/dist'



import { Link, Outlet } from 'react-router-dom';
import Stats from './components/Stats';
import TrainingCalendar from './components/Calendar';
import CustomerList from './components/CustomerList';
import TrainingList from './components/TrainingList';
import Home from './components/Home';
import Navbar from './Navbar';
import Error from './components/Error';

function App() {

  // Router ei toimi
  /* return (
    <div className='App'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Trainig app</Typography>

          <nav>
          <Link to="/">
            <Button variant="contained" color="inherit" style={{ margin: "10px" }}>
              <p>Home</p>
            </Button>
            </Link>

            <Link to="/customerlist">
            <Button variant="contained" color="inherit" style={{ margin: "10px" }}>
            <p>Customers</p>
            </Button>
            </Link>

            <Link to="/traininglist">
            <Button variant="contained" color="inherit" style={{ margin: "10px" }}>
              <p>Traing</p>
            </Button>
            </Link>

            <Link to="/trainingcalendar">
            <Button variant="contained" color="inherit" style={{ margin: "10px" }}>
              <p>Training Calendar</p>
            </Button>
            </Link>

            <Link to="/stats">
            <Button variant="contained" color="inherit" style={{ margin: "10px" }}>
              <p>Stats</p>
            </Button>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  ) */


  // hashrouter juttuja
  return (
    <>
          <nav>
      {/* <div className='App'> */}
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h5">Training app</Typography>
            <Navbar />
          </Toolbar>
        </AppBar>
        <Outlet />
      {/* </div> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customerlist" element={<CustomerList />} />
          <Route path="/traininglist" element={<TrainingList />} />
          <Route path="/trainingcalendar" element={<TrainingCalendar />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </nav>

    </>
  );
}


export default App
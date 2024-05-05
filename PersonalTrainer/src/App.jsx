import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { AppBar, Toolbar, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { HashRouter } from "react-router-dom";



import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
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
  )
}


export default App
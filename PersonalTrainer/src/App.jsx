import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { AppBar, Toolbar, Typography } from "@mui/material"
import Button from '@mui/material/Button';



import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Trainig app</Typography>

          <nav>
            <Button variant="contained" color="inherit" style={{ margin: "10px" }}>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="contained" color="inherit" style={{ margin: "10px" }}>
              <Link to="/customerlist">Customers</Link>
            </Button>
            <Button variant="contained" color="inherit" style={{ margin: "10px" }}>
              <Link to="/traininglist">Training</Link>
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  )
}


export default App
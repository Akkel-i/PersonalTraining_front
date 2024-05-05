import { Link } from "react-router-dom";
import './App.css';
import Button from '@mui/material/Button';


export default function Navbar() {
    return (
        <div className="App">
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
            </Link>        </div>
    )
}
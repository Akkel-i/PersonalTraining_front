import { Link } from "react-router-dom";
import './App.css';

export default function Navbar() {
    return (
        <div className="App">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/customerlist">Customers</Link></p> 
                <p><Link to="/traininglist">Trainings</Link></p>
                <p><Link to="/trainingcalendar">Calendar</Link></p>
                <p><Link to="/stats">Statistics</Link></p>
        </div>
    )
}
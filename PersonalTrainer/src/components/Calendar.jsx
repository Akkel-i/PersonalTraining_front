import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

//import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// https://www.npmjs.com/package/react-big-calendar

export default function TrainingCalendar() {

    const localizer = momentLocalizer(moment);
    const URL = 'https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings';

    const [trainings, setTrainings] = useState([{
        id: '',
        date: '',
        duration: '',
        activity: '',
        customer: {
            id: '',
            firstname: '',
            lastname: ''
        }
    }]);

    useEffect(() => getTrainings(), []);

    // haetaan harjoitukset
    const getTrainings = () => {
        fetch(URL, { method: 'GET' })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log("Error in fetching data");
                }
            })
            .then(data => {
                setTrainings(data);
                console.log(trainings);
            })
            .catch(err => console.error('Error fetching data:', err))
    };

    /*     const calendarEvents = [{
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2024, 4, 0),
            end: new Date(2024, 4, 1)
        },
        {
            title: 'DTS STARTS',
            start: new Date(2024, 3, 13, 0, 0, 0),
            end: new Date(2024, 3, 20, 0, 0, 0)
        }
        ]
     */
    const calendarEvents = trainings.map(training => ({
        id: training.id,
        title: (
            <>
                {training.customer.firstname} {training.customer.lastname}: {training.activity}
            </>
        ),
        /*         title: (
                    <>
                        {training.customer.firstname} {training.customer.lastname} <br />
                        {training.activity}
                    </>
                ), */
        start: new Date(training.date),
        end: moment(training.date).add(training.duration, 'minutes').toDate()
    }))





    return (
        <div className="App" style={{margin: '10px'}}>
            {<Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={calendarEvents}
                style={{ height: "90vh" }}
                step={60}
            />}
        </div>
    );

}
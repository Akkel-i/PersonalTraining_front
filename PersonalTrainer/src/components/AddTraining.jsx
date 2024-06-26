import * as React from 'react';
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { DatePicker, LocalizationProvider, DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function AddTraining(props) {

    // customer: "https://customerrestservice-personaltraining.rahtiapp.fi/api/customers/3609"
    // ylläoleva muoto linkittää asiakkaan treeniin

    const [inputTraining, setInputTraining] = useState({
        activity: '',
        date: null,
        duration: '',
        customer: null
    });

    const [training, setTraining] = useState({
        activity: '',
        date: '',
        duration: '',
        customer: null
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setTraining({
            customer: props.params.data._links.customer.href
        })
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const addTraining = () => {
        console.log(training)
        props.saveTraining(training);
        handleCancel();
    };

    //useEffect(() => console.log(props), []); 


    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add new training
            </Button>

            <Dialog open={open}>

                <DialogTitle>
                    Add training
                </DialogTitle>

                <DialogContent>

                    <TextField

                        margin='dense'
                        label="Activity"
                        name="activity"
                        value={inputTraining.activity}
                        onChange={(e) => {
                            setInputTraining({ ...inputTraining, [e.target.name]: e.target.value })
                            setTraining({ ...training, [e.target.name]: e.target.value })
                        }}
                        variant="standard"
                        fullWidth
                    >
                    </TextField>

                    <TextField
                        margin="dense"
                        label="Duration"
                        name="duration"
                        value={inputTraining.duration}
                        onChange={(e) => {
                            setInputTraining({ ...inputTraining, [e.target.name]: e.target.value })
                            setTraining({ ...training, [e.target.name]: e.target.value })
                        }}
                        variant="standard"
                        fullWidth>
                    </TextField>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker name="date" value={inputTraining.date} onChange={(date) => {
                            //console.log("tallennuksesta lähtee:", date.toString());
                            setInputTraining({ ...inputTraining, date: date })
                            setTraining({ ...training, date: date.toString() })
                        }}
                        />
                    </LocalizationProvider>

                </DialogContent>

                <DialogActions>
                    <Button onClick={addTraining} color="success">Save training</Button>
                    <Button onClick={handleCancel} color="error">Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )

}
import * as React from 'react';
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

export default function AddCustomer(props) {

    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const addCustomer = () => {
        props.saveCustomer(customer);
        handleCancel();
    };


    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add new Customer
            </Button>

            <Dialog open={open}>

                <DialogTitle>
                    Add customer
                </DialogTitle>

                <DialogContent>

                    <TextField
                        margin='dense'
                        label="First name"
                        name="firstname"
                        value={customer.firstname}
                        onChange={(e) => setCustomer({ ...customer, [e.target.name]: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="Last name"
                        name="lastname"
                        value={customer.lastname}
                        onChange={(e) => setCustomer({ ...customer, [e.target.name]: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="Street address"
                        name="streetaddress"
                        value={customer.streetaddress}
                        onChange={(e) => setCustomer({ ...customer, [e.target.name]: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="Postcode"
                        name="postcode"
                        value={customer.postcode}
                        onChange={(e) => setCustomer({ ...customer, [e.target.name]: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="City"
                        name="city"
                        value={customer.city}
                        onChange={(e) => setCustomer({ ...customer, [e.target.name]: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="Email"
                        name="email"
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, [e.target.name]: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="Phonenumber"
                        name="phone"
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, [e.target.name]: e.target.value })}
                        variant="standard">
                    </TextField>
                </DialogContent>

                <DialogActions>
                    <Button onClick={addCustomer}>Save customer</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )


}
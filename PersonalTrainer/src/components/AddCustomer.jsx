import * as React from 'react';
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

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
        // tallentaa uuden asiakkaan
        props.saveCustomer(customer);
        // tyhjentää tekstikentät uudelle asiakkaalle, ettei tule samoja tietoja
        setCustomer({
            firstname: '',
            lastname: '',
            streetaddress: '',
            postcode: '',
            city: '',
            email: '',
            phone: ''
        });
        // sulje 
        handleCancel();
    };


    return (
        <>
            <Button variant="outlined" color="success" onClick={handleClickOpen}>
                Add new Customer
            </Button>

            <Dialog open={open}>

                <DialogTitle>
                    Add customer
                </DialogTitle>

                <DialogContent>


                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        margin='dense'
                        label="First name"
                        name="firstname"
                        value={customer.firstname}
                        onChange={(e) => setCustomer({ ...customer, [e.target.name]: e.target.value })}
                        variant="standard"
                        required> {/* ei toimi kunnolla? */}
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
                    <Button onClick={addCustomer} color="success">Save customer</Button>
                    <Button onClick={handleCancel} color="error">Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )


}
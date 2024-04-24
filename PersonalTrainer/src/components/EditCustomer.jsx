import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function EditCustomer(props) {

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

        setOpen(true)
        setCustomer({
            firstname: props.params.data.firstname,
            lastname: props.params.data.lastname,
            streetaddress: props.params.data.streetaddress,
            postcode: props.params.data.postcode,
            city: props.params.data.city,
            email: props.params.data.email,
            phone: props.params.data.phone

        });
    }

    const handleSave = () => {
        props.editCustomer(customer, props.params.data._links.customer.href);
        setOpen(false)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    return (
        <>
            <Button onClick={handleClickOpen}>Edit customer</Button>

            <Dialog open={open}>
                <DialogTitle>
                    Edit customer
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
                        onChange={(e) => setCustomer({ ...customer, firstname: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="Last name"
                        name="lastname"
                        value={customer.lastname}
                        onChange={(e) => setCustomer({ ...customer, lastname: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="Street address"
                        name="streetaddress"
                        value={customer.streetaddress}
                        onChange={(e) => setCustomer({ ...customer, streetaddress: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="Postcode"
                        name="postcode"
                        value={customer.postcode}
                        onChange={(e) => setCustomer({ ...customer, postcode: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="City"
                        name="city"
                        value={customer.city}
                        onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                        variant="standard">
                    </TextField>

                    <TextField
                        margin="dense"
                        label="Email"
                        name="email"
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
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

                    <Button onClick={handleSave}>Save change</Button>
                    <Button onClick={handleCancel}>Cancel</Button>

                </DialogActions>
            </Dialog>
        </>
    )
}

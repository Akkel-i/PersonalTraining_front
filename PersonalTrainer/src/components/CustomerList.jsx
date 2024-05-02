import * as React from 'react';
import { useEffect, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import Button from '@mui/material/Button';
import { CSVLink, CSVDownload } from "react-csv";


import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';

/* import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; */

export default function CustomerList() {
    const [customers, setCustomers] = useState([{
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    }]);

    const URL = 'https://customerrestservice-personaltraining.rahtiapp.fi/api/customers';
    const URLnewTraining = 'https://customerrestservice-personaltraining.rahtiapp.fi/api/trainings';



    useEffect(() => getCustomers(), []); // haetaan asiakkaat ensimmäisella render kerralla.



    // hae asiakkaat
    const getCustomers = () => {
        fetch(URL, { method: 'GET' })
            .then(response => {
                if (response.ok)
                    return response.json();
            })
            .then(data => {
                setCustomers(data._embedded.customers); // haetaan asiakkaat ._embedded 
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // tallenna uusi asiakas
    const saveCustomer = (customer) => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(response => {
                if (response.ok) {
                    return response.json;
                } else {
                    throw new Error('Error in sending data to server');
                }
            }
            )
            .then(data => {
                getCustomers();
            })
            .catch(err => console.error(err))
    };


    // poista asiakas
    const deleteCustomer = (params) => {

        if (window.confirm("Are you sure?")) {
            //console.log(params)
            fetch(params.data._links.customer.href, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        window.alert("Customer has been deleted")
                        getCustomers();
                    }
                    else {
                        window.alert("some error")
                    }
                })
                .catch(err => console.error(err))
        }
    }

    // Muokkaa asiakasta
    const editCustomer = (customer, url) => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(response => getCustomers())
            .catch(err => console.error(err))
    };


    const [colDefs, setColDefs] = useState([
        { headerName: 'First Name', field: 'firstname', sortable: true, filter: true, floatingFilter: true, minWidth: 300 },
        { headerName: 'Last Name', field: 'lastname', sortable: true, filter: true, floatingFilter: true, minWidth: 300 },
        { headerName: 'Street address', field: 'streetaddress', sortable: true, filter: true, floatingFilter: true, minWidth: 200 },
        { field: 'postcode', sortable: true, filter: true, floatingFilter: true, minWidth: 200 },
        { field: 'city', sortable: true, filter: true, floatingFilter: true, minWidth: 200 },
        { field: 'email', sortable: true, filter: true, floatingFilter: true, minWidth: 200 },
        { field: 'phone', sortable: true, filter: true, floatingFilter: true, minWidth: 200 },
        {
            cellRenderer: (params) =>
                <EditCustomer editCustomer={editCustomer} params={params} />
        },
        {
            cellRenderer: (params) =>
                <Button size="small" color="error" onClick={() => deleteCustomer(params)}>Delete</Button>, width: 90
        },
        {
            cellRenderer: (params) =>
                <AddTraining saveTraining={saveTraining} params={params} />
        }
    ]);

    // CSV dataan headers?
    const headerss = [
        { label: "First Name", key: "firstname" },
        { label: "Last Name", key: "lastname" },
        { label: "Street Address", key: "streetaddress" },
        { label: "Postcode", key: "postcode" },
        { label: "City", key: "city" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" }
    ];

    // CSV data testilataus tiedot
    /*     const csvData = [
            ["firstname", "lastname", "email"],
            ["Ahmed", "Tomi", "ah@smthing.co.com"],
            ["Raed", "Labes", "rl@smthing.co.com"],
            ["Yezzi", "Min l3b", "ymin@cocococo.com"]
        ]; */

    // filtteröi pois _links customers datasta
    const filteredCustomers = customers.map(customer => {
        const { _links, ...filteredCustomer } = customer;
        return filteredCustomer;
    });

    // csv datan mappausta, ei toimi?
    const csvData = [
        ["firstname", "lastname", "streetaddress", "postcode", "city", "email", "phone"],
        ...filteredCustomers.map(({ firstname, lastname, streetaddress, postcode, city, email, phone }) => [
            firstname,
            lastname,
            streetaddress,
            postcode,
            city,
            email,
            phone
        ]),
    ];


    //tallenna uusi treeni
    const saveTraining = (training) => {
        fetch(URLnewTraining, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
        })
            .then(response => {
                if (response.ok) {
                    getCustomers();
                } else {
                    window.alert("error in saving training")
                }
            })
            .catch(err => console.error(err))
    };

    return (
        <>
            <h1>Tässä lista asiakkaista</h1>
            <div className="ag-theme-material" style={{ height: 600, width: 2200, margin: 'auto' }}>
                <AgGridReact
                    rowData={customers}
                    columnDefs={colDefs}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>

            <AddCustomer saveCustomer={saveCustomer} />

            <Button variant="outlined" /* onClick={console.log(csvData)} */>
                <CSVLink
                    data={csvData}
                    headers={headerss}
                    filename={"customer_list.csv"}
                    className="btn btn-primary"
                    target="_blank" >
                    Download Customer List in CSV
                </CSVLink>
            </Button>
        </>

    );

}
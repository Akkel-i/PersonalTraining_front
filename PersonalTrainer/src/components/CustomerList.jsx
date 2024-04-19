import * as React from 'react';
import { useEffect, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

/* import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; */

export default function CustomerList() {
    const [customers, setCustomers] = useState([{ firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: '' }]);
    const URL = 'https://customerrestservice-personaltraining.rahtiapp.fi/api/customers';



    useEffect(() => getCustomers(), []); // haetaan asiakkaat ensimmäisella render kerralla.




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

/*     const colDefs = [
        { headerName: 'First Name', field: 'firstname' },
        { headerName: 'Last Name', field: 'lastname' }
    ]; */
    const [colDefs, setColDefs] = useState([
        { headerName: 'First Name', field: 'firstname', sortable: true, filter: true, floatingFilter: true, minWidth: 300 },
        { headerName: 'Last Name', field: 'lastname', sortable: true, filter: true, floatingFilter: true, minWidth: 300 },
        { headerName: 'Street address', field: 'streetaddress', sortable: true, filter: true, floatingFilter: true, minWidth: 200 },
        { field: 'postcode', sortable: true, filter: true, floatingFilter: true, minWidth: 200 },
        { field: 'city', sortable: true, filter: true, floatingFilter: true, minWidth: 200 },
        { field: 'email', sortable: true, filter: true, floatingFilter: true, minWidth: 200 },
        { field: 'phone', sortable: true, filter: true, floatingFilter: true, minWidth: 200 }
    ]);

    return (
        <>
            <h1>Tässä lista asiakkaista</h1>
            <div className="ag-theme-material" style={{ height: 600, width: 2500 }}>
                <AgGridReact
                    rowData={customers}
                    columnDefs={colDefs}
                />
            </div>
        </>

    );

}
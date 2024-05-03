import * as React from 'react';
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { format } from "date-fns";
import Button from '@mui/material/Button';

import AddTraining from './AddTraining';

export default function TrainingList() {

  const [trainings, setTrainings] = useState([]);

  const URL = 'https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings';

  const URLdelete = 'https://customerrestservice-personaltraining.rahtiapp.fi/api/trainings/';
  var combineURL = "";

  const URLnewTraining = 'https://customerrestservice-personaltraining.rahtiapp.fi/api/trainings';

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: 'Customer first name',
      field: 'customer.firstname',
      sortable: true,
      filter: true,
      floatingFilter: true,
      minWidth: 300
    },
    {
      headerName: 'Customer last name',
      field: 'customer.lastname',
      sortable: true,
      filter: true,
      floatingFilter: true,
      minWidth: 300
    },
    {
      headerName: 'Activity',
      field: 'activity',
      sortable: true,
      filter: true,
      floatingFilter: true,
      minWidth: 300
    },
    {
      headerName: 'Date', field: 'date',
      valueFormatter: params => format(new Date(params.value), 'dd.MM.yyyy HH:mm'),
      sortable: true,
      filter: true,
      floatingFilter: true,
      minWidth: 300
    },
    {
      headerName: 'Duration',
      field: 'duration',
      sortable: true,
      filter: true,
      floatingFilter: true,
      minWidth: 300
    },
    {
      cellRenderer: (params) =>
        <Button size="small" color="error" onClick={() => deleteTraining(params)}>Delete</Button>, width: 90
    }

  ]);

  // hae treenit ekalla renderillä
  useEffect(() => {
    getTrainings();
  }, []);

  // fetchaa treenit
  const getTrainings = () => {
    fetch(URL)
      .then(response => response.json())
      .then(responseData => {
        setTrainings(responseData);
      })
      .catch(error => console.error(error));
  }

  // poista treeni
  const deleteTraining = (params) => {

    if (window.confirm("Are you sure?")) {
      //console.log(params)
      //console.log(URLdelete + params.data.id)
      combineURL = (URLdelete + params.data.id)
      //console.log(combineURL)
      fetch(combineURL, { method: 'DELETE' })
        .then(response => {
          if (response.ok) {
            window.alert("Training has been deleted")
            getTrainings();
          }
          else {
            window.alert("some error")
          }
        })
        .catch(err => console.error(err))
    }
  }

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
          getTrainings();
        } else {
          window.alert("error in saving training")
        }
      })
      .catch(err => console.error(err))
  };

  return (
    <>
      <h1>Tässä lista kaikista treeneistä</h1>

      <div className="ag-theme-material" style={{ height: 800, width: 2000, margin: 'auto' }}>

        <AgGridReact
          rowData={trainings}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
{/*       <AddTraining saveTraining={saveTraining} />
 väärä paikka linkitykselle*/}    </>
  );
}
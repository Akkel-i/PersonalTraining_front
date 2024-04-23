
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { format } from "date-fns";

export default function TrainingList() {

  const [trainings, setTrainings] = useState([]);

  const URL = 'https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings';

  const columnDefs = [
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
    }
 
  ];

  useEffect(() => {
    getTrainings();
  }, []);

  const getTrainings = () => {
    fetch(URL)
      .then(response => response.json())
      .then(responseData => {
        setTrainings(responseData);
      })
      .catch(error => console.error(error));
  }
  return (
    <>
      <div className="ag-theme-material" style={{ height: 700, width: 2000, margin: 'auto' }}>

        <AgGridReact
          rowData={trainings}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={9}
        />
      </div>
    </>
  );
}
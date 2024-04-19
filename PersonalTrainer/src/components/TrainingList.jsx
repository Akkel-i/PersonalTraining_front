
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { format } from "date-fns";

export default function TrainingList() {

  const [trainings, setTrainings] = useState([]);

  const columnDefs = [
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
      headerName: 'Activity',
      field: 'activity',
      sortable: true,
      filter: true,
      floatingFilter: true,
      minWidth: 300
    },
    {
      headerName: 'Customer',
      field: 'customer',
      /* valueGetter: params => params.data.customer.name, */
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
    fetch("https://customerrestservice-personaltraining.rahtiapp.fi/api/trainings")
      .then(response => response.json())
      .then(responseData => {
        setTrainings(responseData._embedded.trainings);
      })
      .catch(error => console.error(error));
  }
  return (
    <>
      <div className="ag-theme-material" style={{ height: 600, width: '120%', margin: 'auto' }}>

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
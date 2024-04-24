//import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Button from '@mui/material/Button';


import App from './App';
import Home from './components/Home';
import CustomerList from './components/CustomerList';
import TrainingList from './components/TrainingList';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: "customerlist",
        element: <CustomerList />,
      },
      {
        path: "traininglist",
        element: <TrainingList />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
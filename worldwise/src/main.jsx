import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import App from './App.jsx';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout.jsx';
import CityList from './components/CityList.jsx';
import City from './components/City';
import CountriesList from './components/CountryList.jsx';
import Form from './components/Form.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'product', element: <Product /> },
      { path: 'login', element: <Login /> },
      {
        path: 'app',
        element: <AppLayout />,
        children: [
          { index: true, element: <Navigate to='cities' replace={true} /> },
          { path: 'cities', element: <CityList /> },
          { path: 'cities/:id', element: <City /> },
          { path: 'countries', element: <CountriesList /> },
          { path: 'form', element: <Form /> },
        ],
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import AppLayout from './pages/AppLayout.jsx';
import CityList from './components/CityList.jsx';
import City from './components/City';
import CountriesList from './components/CountryList.jsx';
import Form from './components/Form.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import { AuthProvider } from './contexts/FakeAuthContext.jsx';
import { CitiesProvider } from './contexts/CitiesContext.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <PageNotFound />,
  },
  { path: 'pricing', element: <Pricing /> },
  { path: 'product', element: <Product /> },
  { path: 'login', element: <Login /> },
  {
    path: 'app',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to='cities' replace />,
      },
      { path: 'cities', element: <CityList /> },
      { path: 'cities/:id', element: <City /> },
      { path: 'countries', element: <CountriesList /> },
      { path: 'form', element: <Form /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CitiesProvider>
        <RouterProvider router={router} />
      </CitiesProvider>
    </AuthProvider>
  </React.StrictMode>
);

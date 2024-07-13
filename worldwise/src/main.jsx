/* eslint-disable react-refresh/only-export-components */
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { AuthProvider } from './contexts/FakeAuthContext.jsx';
import { CitiesProvider } from './contexts/CitiesContext.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';

import CityList from './components/CityList.jsx';
import City from './components/City';
import CountriesList from './components/CountryList.jsx';
import Form from './components/Form.jsx';
import SpinnerFullPage from './components/SpinnerFullPage';

// import Homepage from './pages/Homepage';
// import Pricing from './pages/Pricing';
// import Product from './pages/Product';
// import Login from './pages/Login';
// import AppLayout from './pages/AppLayout.jsx';
// import PageNotFound from './pages/PageNotFound.jsx';

const Homepage = lazy(() => import('./pages/Homepage'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Product = lazy(() => import('./pages/Product'));
const Login = lazy(() => import('./pages/Login'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

// dist/assets/index-C65cazXB.css   29.94 kB │ gzip:   5.05 kB
// dist/assets/index-BNDWgByY.js   549.73 kB │ gzip: 162.15 kB

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
        <Suspense fallback={<SpinnerFullPage />}>
          <RouterProvider router={router} />
        </Suspense>
      </CitiesProvider>
    </AuthProvider>
  </React.StrictMode>
);

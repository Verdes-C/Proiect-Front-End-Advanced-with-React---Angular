import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Account from './components/body/Account';
import User from './components/body/User';
import Products from './components/body/Products';
import { store } from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './components/body/Product';
import Basket from './components/body/Basket';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Page Not Found! Change</div>,
    children: [
      // {
      //   path: '/',
      //   element: <LandingPage />,
      // },
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <Product />,
      },
      {
        path: '/basket',
        element: <Basket />,
      },
      {
        path: '/subscription',
        element: <div>subscription to include</div>,
      },
      {
        path: '/offer',
        element: <div>offer to include</div>,
      },
      {
        path: '/favorite',
        element: <div>favorite to include</div>,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
  {
    path: '/login',
    element: <Account scope={'login'} />,
  },
  {
    path: '/register',
    element: <Account scope={'register'} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<App />} />
    </Provider>
  </StrictMode>
);

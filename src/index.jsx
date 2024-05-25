import { createRoot } from 'react-dom/client';

import { HomePage } from './pages/HomePage';
import './global.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './components/App';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);

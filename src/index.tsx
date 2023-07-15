import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Cadastro from './components/Cadastro/Cadastro';
import Login from './components/Login/Login';
import Biblioteca from './components/Bibliioteca/Biblioteca';

const router = createBrowserRouter([
  {
    children: [
      { path: '/', element: <Home /> },
      { path: '/cadastro', element: <Cadastro /> },
      { path: '/login', element: <Login /> },
      { path: '/biblioteca', element: <Biblioteca /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

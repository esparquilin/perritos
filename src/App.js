import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import CatalogoPage from "./pages/Catalogo";

import { loadPerritos } from "./pages/Catalogo";
import PerroPagina from "./pages/Perro";
import RequisitosPage from "./pages/Requisitos";
import { DataProvider } from "./store/form-context";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/requisitos",
        element: <RequisitosPage />,
      },
      {
        path: "/catalogo",
        element: <CatalogoPage />,
        id: "perritos-catalogo",
        loader: loadPerritos,
      },
      {
        path: "/catalogo/:perro",
        id: "perritos-descripcion",
        element: <PerroPagina />,
      },
    ],
  },
]);

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router}></RouterProvider>
    </DataProvider>
  );
}

export default App;

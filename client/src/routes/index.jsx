import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AutorDetalle from "../pages/autores/AutorDetalle";
import AutorEditar from "../pages/autores/AutorEditar";
import Autores from "../pages/autores/Autores";
import AutoresAdd from "../pages/autores/AutoresAdd";

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "autores",
                element: <Autores />,
            },
            {
                path: "autores/agregar",
                element: <AutoresAdd />,
            },
            {
                path: "autores/:id",
                element: <AutorDetalle />,
            },
            {
                path: "autores/:id/editar",
                element: <AutorEditar />,
            },
        ],
    },
]);

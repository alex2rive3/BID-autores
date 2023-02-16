import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "../../components/DeleteButton";

const Autores = () => {
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(
                `${process.env.REACT_APP_API_URL}/autores`
            );
            setAutores(respuesta.data);
        };

        getData();
    }, []);

    const quitarAutor = (autorID) => {
        setAutores(autores.filter((autor) => autor._id !== autorID));
    };

    return (
        <>
            <h1>Autores Favoritos</h1>
            <Link to="/autores/agregar" className="btn btn-primary">
                Agregar Autor
            </Link>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map((autor, index) => (
                        <tr key={index}>
                            <td>{autor.nombre}</td>
                            <td>{autor.apellido}</td>
                            <td>
                                <Link
                                    className="btn btn-primary"
                                    to={`/autores/${autor._id}`}
                                >
                                    Detalle
                                </Link>
                                <Link
                                    className="btn btn-success ms-2"
                                    to={`/autores/${autor._id}/editar`}
                                >
                                    Editar
                                </Link>
                                <DeleteButton
                                    id_autor={autor._id}
                                    successCallback={quitarAutor}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Autores;

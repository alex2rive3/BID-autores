import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const AutorDetalle = () => {
    const { id } = useParams();
    const [autor, setAutor] = useState({});

    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(
                `${process.env.REACT_APP_API_URL}/autores/${id}`
            );
            setAutor(respuesta.data);
        };

        getData();
    }, [id]);

    return (
        <div className="card">
            <div className="card-header">Detalle del Autor</div>
            <div className="card-body">
                <h5 className="card-title">Nombre: {autor.nombre}</h5>
                <h5 className="card-title">Apellido: {autor.apellido}</h5>
                <Link className="btn btn-primary" to="/autores">
                    Volver
                </Link>
            </div>
        </div>
    );
};

export default AutorDetalle;

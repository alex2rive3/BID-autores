import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AutorForm from "../../components/AutorForm";
import axios from "axios";
import Swal from "sweetalert2";

const AutorEditar = () => {
    const navigate = useNavigate();

    const initialValues = {
        nombre: "",
        apellido: "",
    };

    const { id } = useParams();
    const [autor, setAutor] = useState(initialValues);

    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(
                `${process.env.REACT_APP_API_URL}/autores/${id}`
            );
            setAutor(respuesta.data);
        };

        getData();
    }, [id]);

    const actualizarAutor = async (values, actions) => {
        try {
            const respuesta = await axios.put(
                `${process.env.REACT_APP_API_URL}/autores/${id}`,
                values
            );
            console.log(respuesta);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "GENIAL!!!",
                    text: `Se ha actualizado ${respuesta.data.nombre} perfectamente!`,
                });

                navigate("/autores");
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Ops que mal!!!",
                text: `Error: ${
                    error?.response?.data?.message || error.message
                }`,
            });
        }
    };

    return (
        <>
            <h1>Editar Autor</h1>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <AutorForm
                        initialValues={autor}
                        botonTexto="Actualizar"
                        onSubmit={actualizarAutor}
                    />
                </div>
            </div>
        </>
    );
};

export default AutorEditar;

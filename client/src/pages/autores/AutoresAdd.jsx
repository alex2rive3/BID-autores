import React from "react";
import AutorForm from "../../components/AutorForm";
import axios from "axios";
import Swal from "sweetalert2";

const AutoresAdd = () => {
    const initialValues = {
        nombre: "",
        apellido: "",
    };

    const crearAutor = async (values, actions) => {
        try {
            const respuesta = await axios.post(
                `${process.env.REACT_APP_API_URL}/autores`,
                values
            );
            console.log(respuesta);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "GENIAL!!!",
                    text: `Se ha agregado ${respuesta.data.nombre} perfectamente!`,
                });

                actions.resetForm(initialValues);
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
            <h1>Agregar Autor</h1>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <AutorForm
                        initialValues={initialValues}
                        botonTexto="Agregar"
                        onSubmit={crearAutor}
                    />
                </div>
            </div>
        </>
    );
};

export default AutoresAdd;

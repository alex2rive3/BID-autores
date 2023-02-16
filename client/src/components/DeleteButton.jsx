import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const DeleteButton = ({ id_autor, successCallback }) => {
    const eliminarAutor = async (autorId) => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/autores/${autorId}`
            );
            successCallback(autorId);
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

    const confirmarEliminar = (autorId) => {
        Swal.fire({
            title: "Estas seguro de eliminar?",
            text: "No podrás arrepentirte!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "SI, eliminalo ahora!",
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarAutor(autorId);
            }
        });
    };

    return (
        <button
            className="btn btn-danger ms-2"
            onClick={() => {
                confirmarEliminar(id_autor);
            }}
        >
            Eliminar
        </button>
    );
};

export default DeleteButton;

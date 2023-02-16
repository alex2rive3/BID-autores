import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const AutorsErrores = Yup.object().shape({
    nombre: Yup.string()
        .min(5, "El nombre debe tener como minimo 5 caracteres")
        .max(15, "El nombre no puede superar los 15 caracteres.")
        .required("Requerido"),
    apellido: Yup.string()
        .required("El apellido es requerido.")
        .min(5, "Se necesita como minumo 5 caracteres.")
        .max(15, "No puede superar los 15 caracteres"),
});

const AutorForm = ({ initialValues, botonTexto, onSubmit }) => {
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={AutorsErrores}
        >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                    <Field
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre"
                    />
                    {touched.nombre && errors.nombre && (
                        <div className="ms-3 mt-1 text-danger">
                            {errors.nombre}
                        </div>
                    )}
                    <Field
                        name="apellido"
                        className="form-control mt-2"
                        placeholder="Apellido"
                    />
                    {touched.apellido && errors.apellido && (
                        <div className="ms-3 mt-1 text-danger">
                            {errors.apellido}
                        </div>
                    )}
                    <Link className="btn btn-primary m-2 " to="/autores">
                        Volver
                    </Link>

                    <button
                        className="btn btn-primary m-2"
                        disabled={!(isValid && dirty)}
                    >
                        {botonTexto} Autor
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AutorForm;

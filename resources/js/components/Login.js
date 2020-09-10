import React, {Component} from 'react';
import {ErrorMessage, Field, Formik} from 'formik'

const Login = () => (
    <>
        <Formik
            initialValues={{ email:'', password:'' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = <div className="alert alert-danger mt-2" role="alert">Email required</div>;
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = <div className="alert alert-danger mt-2" role="alert">Invalid email address</div>;
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
              }) => (
                <div className="vh-100 pt-5">
                    <form className="bg-dark text-light m-auto align-self-center p-5 rounded-lg col-md-4" onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Connection Administrateur</h2>
                        <div className="form-group">
                            {/*<input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Votre adresse mail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />*/}
                            <Field type="email" name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="form-group">
                            {/*<input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Votre mot de passe"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />*/}
                            <Field type="password" name="password" className="form-control" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button type="submit" className="btn btn-light w-100 mt-3" disabled={isSubmitting}>Submit</button>

                    </form>
                </div>
            )}
        </Formik>
    </>
)

export default Login;

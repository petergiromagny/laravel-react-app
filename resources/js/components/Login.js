import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik'

const Login = () => (
    <>
        <Formik
            initialValues={{ email:'', password:'' }}
            validate={values => {
                const errors = {};


                if (!values.email) {
                    errors.email = 'Email required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }

                if (!values.password) {
                    errors.password = 'Password required';
                } else if (values.password.length < 6) {
                    errors.password = 'Must be 6 characters or more';
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
            {({ isSubmitting}) => (
                <div className="vh-100 pt-5">
                    <Form className="bg-dark text-light m-auto align-self-center p-5 rounded-lg col-md-4">
                        <h2 className="text-center mb-4">Connection Administrateur</h2>
                        <div className="form-group">
                            <Field type="email" name="email" className="form-control" placeholder="Votre adresse mail" />
                            <ErrorMessage name="email" component="div" className="alert alert-danger mt-2" />
                        </div>
                        <div className="form-group">
                            <Field type="password" name="password" className="form-control" placeholder="Votre mot de passe" />
                            <ErrorMessage name="password" component="div" className="alert alert-danger mt-2" />
                        </div>
                        <button type="submit" className="btn btn-light w-100 mt-3" disabled={isSubmitting}>Submit</button>

                    </Form>
                </div>
            )}
        </Formik>
    </>
)

export default Login;

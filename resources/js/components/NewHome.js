import React from 'react'
import {Field, Form, Formik} from "formik";
import Axios from "axios";


const NewHome = () => (
    <div className="container min-vh-100 pt-5">
        <Formik
            initialValues={{ title:'', body:'' }}
            onSubmit={(values, {isSubmitting} ) => {
                if(this.state.id === 0){
                    Axios.post(`/api`, {
                        title: values.title,
                        body: values.body
                    })
                        .then((res) => {
                            this.getAll();
                        })
                } else {
                    Axios.put(`/api/${id}`, {
                        title: values.title,
                        body: values.body
                    })
                        .then((res) => {
                            this.getAll();
                        })
                }
            }}
        >
            {({ isSubmitting }) =>(
                <div className="row justify-content-center mb-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <Form onSubmit={(e) => this.submit(e, this.state.id)}>
                                    <div className="form-group">
                                        <label htmlFor="titleInput">Title</label>
                                        <Field type="text" name="title" className="form-control" placeholder="Post title"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bodyInput">Body</label>
                                        <Field type="text" name="body" className="form-control"/>
                                    </div>
                                    <button type='submit' className='btn btn-primary w-100'>Create</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    </div>
)

export default NewHome;

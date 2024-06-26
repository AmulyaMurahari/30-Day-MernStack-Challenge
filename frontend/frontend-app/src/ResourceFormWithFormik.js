import React from 'react'
import { Form, Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ResourceFormWithFormik = () => {

    const initialValues = {
        name: '',
        description: '',
        email:'',
    };

    const validationSchema = Yup.object ({
        name: Yup.string()
        .required('Required')
        .matches(/^[a-zA-Z\s]*$/, 'Name should contain only letters'),
        description: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
    });

    const onSubmit = async(values, {setSubmitting, resetForm}) => {
        try{
            await axios.post('/api/resource', values);
            resetForm();
            alert('Resource created successfully');
        } catch(error){
            alert('Error creating resource');
        } finally {
            setSubmitting(false);
        }
    };

  return (
    <div>
        <h1>Create Resource</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
            {({isSubmitting }) => (
                <Form>
                    <div>
                        <label>Name</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div"/>
                    </div>
                    <div>
                        <label>Description</label>
                        <Field type="text" name="description" />
                        <ErrorMessage name="description" component="div"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <button type='submit' disabled={isSubmitting}>
                        Create
                    </button>
                </Form>
            )}

        </Formik>
    </div>
  )
}

export default ResourceFormWithFormik
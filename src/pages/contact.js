import React from 'react';
import Layout from '../components/Layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ContactForm from '../components/ContactForm';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  subject: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Contact = () => {
  return (
    <Layout>
      <h3>If you have any cool project in mind or any question you can let me know by filling out the form below</h3>
      <Formik
        render={props => <ContactForm {...props} />}
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={ (values, actions) => {
          // Handle form submit, reach an endpoint, w/e.
        }}
      />
    </Layout>
  )
}

export default Contact;
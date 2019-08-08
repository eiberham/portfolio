import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function ContactForm(){
  return (
    <div>
      <h3>
        If you have some fancy project to develop or any question just let me
        know by filling out the form below
      </h3>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
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
        {({ isSubmitting }) => (
          <Form>
            <TextField
              id="name"
              name="name"
              label="Name"
              fullWidth

            />
            <ErrorMessage name="name" component="div" />
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
            />
            <ErrorMessage name="email" component="div" />
            <TextField
              id="subject"
              name="subject"
              label="Subject"
              fullWidth
            />
            <ErrorMessage name="subject" component="div" />
            <TextField
              id="message"
              name="message"
              label="Message"
              margin="dense"
              variant="outlined"
              multiline
              fullWidth
              rowsMax="4"
            />
            <ErrorMessage name="message" component="div" />
            <Button
              type="submit"
              variant="outlined"
              size="large"
              color="primary"
              disabled={isSubmitting}>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm;
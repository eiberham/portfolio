import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

function ContactForm(props){
  const {
    values: { name, email, subject, message },
    errors,
    touched,
    handleChange,
    handleSubmit,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
    <React.Fragment>
      <Grid
        item xs={12} style={{textAlign: "center"}}
      >
      <form
        /*onSubmit={handleSubmit}*/
        action="https://formspree.io/cedenoabraham@gmail.com"
        method="POST">
        <TextField
          id="name"
          name="name"
          label="Name"
          helperText={touched.name ? errors.name : ""}
          error={touched.name && Boolean(errors.name)}
          value={name}
          onChange={change.bind(null, "name")}
          fullWidth
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          helperText={touched.email ? errors.email : ""}
          error={touched.email && Boolean(errors.email)}
          value={email}
          onChange={change.bind(null, "email")}
          fullWidth
        />
        <TextField
          id="subject"
          name="subject"
          label="Subject"
          helperText={touched.subject ? errors.subject : ""}
          error={touched.subject && Boolean(errors.subject)}
          value={subject}
          onChange={change.bind(null, "subject")}
          fullWidth
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          margin="dense"
          variant="outlined"
          multiline
          fullWidth
          rowsMax="4"
          rows="4"
          helperText={touched.message ? errors.message : ""}
          error={touched.message && Boolean(errors.message)}
          value={message}
          onChange={change.bind(null, "message")}
        />
        <Button
          type="submit"
          variant="outlined"
          size="large"
          color="primary"
          disabled={!isValid}
          >
          Send
        </Button>
      </form>
    </Grid>
  </React.Fragment>
  )
}

export default ContactForm;
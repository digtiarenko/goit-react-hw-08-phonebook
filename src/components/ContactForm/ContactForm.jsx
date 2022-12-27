// import { useRef } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  // useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contacts/contactsSlice';
import { Box, styled, Button, TextField, Typography } from '@mui/material';

const phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const StyledTextField = styled(TextField)({
  marginBottom: 10,
  display: 'block',
});

export default function ContactForm() {
  const [addContact, { isLoading }] = useAddContactMutation();

  const validationSchema = yup.object({
    name: yup.string('Enter your name').required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    phone: yup
      .string()
      .matches(phoneRegEx, 'Phone number is not valid')
      .min(8, 'Phone number should be of minimum 8 characters length')
      .required('Phone number is required'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await addContact(values);
      resetForm();
    },
  });

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      width="400px"
      height="400px"
      bgcolor="white"
      Validate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h6" marginBottom="20px">
        Create contact
      </Typography>
      <StyledTextField
        required
        autoFocus
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        // inputRef={nameInput}
      />
      <StyledTextField
        required
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <StyledTextField
        required
        id="phone"
        name="phone"
        label="Phone number"
        variant="outlined"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ my: 2, color: 'white', display: 'block' }}
        disabled={isLoading}
      >
        Add new contact
      </Button>
    </Box>
  );
}
// const handleSubmit = async (event) => {
//   event.preventDefault();
//   const data = new FormData(event.currentTarget);
//   const name = data.get("name");
//   const phone = data.get("number");
//   const email = data.get("email");

//   if (contacts.find((contact) => contact.name === name)) {
//     alert(`${name} is already here`);
//     return;
//   }
//   nameInput.current.value = "";
//   numberInput.current.value = "";
//   emailInput.current.value = "";
//   const newContact = {
//     name,
//     phone,
//     email,
//   };

//   await addContact(newContact);
// };

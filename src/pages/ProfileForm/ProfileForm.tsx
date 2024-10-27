import * as Yup from "yup";
import { Formik } from "formik";
import { Box, Button, TextField, useTheme } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import { tokens } from "../../utils/theme";

type StringObject = {
  [key: string]: string;
};

const initialValues: StringObject = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const phoneRegx = /^01[0-2]sd{1,8}$/;

const profileValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid Email"),
  contact: Yup.string()
    .required("Required")
    .matches(phoneRegx, "Invalid Phone Number"),
  address1: Yup.string().required("Required"),
  address2: Yup.string().required("Required"),
});

export default function ProfileForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleFormSubmit = (values: StringObject) => {
    console.log(values);
  };
  return (
    <Box bgcolor={colors.primary[400]} p={2} borderRadius={1}>

      <PageHeader title="CREATE USER" subTitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={profileValidationSchema}
      >
        {({
          handleBlur,
          touched,
          errors,
          handleChange,
          handleSubmit,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="1.5rem"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
            >
              <TextField
                name="firstName"
                type="text"
                label="First Name"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
                InputProps={{ sx: { backgroundColor: colors.primary[400] } }}
              />
              <TextField
                name="lastName"
                type="text"
                label="Last Name"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                InputProps={{ sx: { backgroundColor: colors.primary[400] } }}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                name="email"
                type="text"
                label="Email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
                InputProps={{ sx: { backgroundColor: colors.primary[400] } }}
              />
              <TextField
                name="contact"
                type="text"
                label="Contact"
                value={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
                InputProps={{ sx: { backgroundColor: colors.primary[400] } }}
              />
              <TextField
                name="address1"
                type="text"
                label="Address 1"
                value={values.address1}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
                InputProps={{ sx: { backgroundColor: colors.primary[400] } }}
              />
              <TextField
                name="address2"
                type="text"
                label="Address 2"
                value={values.address2}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
                InputProps={{ sx: { backgroundColor: colors.primary[400] } }} // Updated line
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="1rem">
              <Button color="info" sx={{color:"white"}} variant="contained" type="submit">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

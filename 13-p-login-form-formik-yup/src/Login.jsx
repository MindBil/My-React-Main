import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="login-form">
      <h2>Prisijunkite</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="email">El.paštas</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Įveskite savo el.pašto adresą"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Slaptažodis</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Įveskite savo slaptažodį"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">Prisijungti</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;

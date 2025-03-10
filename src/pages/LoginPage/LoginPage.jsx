import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.formStyle}>
          <label className={s.labelStyle}>
            <span>Email:</span>
            <Field name="email" placeholder="Enter email" />
          </label>
          <label>
            <span>Password:</span>
            <Field
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </label>

          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;

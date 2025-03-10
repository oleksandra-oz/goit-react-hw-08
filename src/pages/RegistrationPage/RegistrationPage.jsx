import { Field, Form, Formik } from "formik";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const initialValues = {
    email: "",
    name: "",
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
            <span>Name:</span>
            <Field name="name" placeholder="Enter your name" />
          </label>
          <label>
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

          <button type="submit" className={s.button}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;

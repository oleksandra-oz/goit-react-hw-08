import { Field, Form, Formik } from "formik";
import s from "./RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
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
          <p className={s.paragraphStyle}>
            You already have account?
            <Link className={s.linkStyle} to="/login">
              Login!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

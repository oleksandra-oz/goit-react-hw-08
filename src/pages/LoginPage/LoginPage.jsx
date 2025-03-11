import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid data"));
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.formStyle}>
          <label className={s.labelStyle}>
            <span className={s.spanStyle}>Email:</span>
            <Field name="email" placeholder="Enter email" />
          </label>
          <label>
            <span className={s.spanStyle}>Password:</span>
            <Field
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </label>

          <button className={s.button} type="submit">
            Login
          </button>
          <p className={s.paragraphStyle}>
            You do not have account yet.{" "}
            <Link className={s.linkStyle} to="/register">
              Get it!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthRouter } from "../Context/RouterContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik, Formik, Form, Field } from "formik";
import { Helmet } from "react-helmet";

function Login() {
  const navigate = useNavigate();

  const location = useLocation();

  const { setUser } = useAuthRouter();

  // const loginHandle = () => {
  //   setUser({ id: 1 });
  //   navigate(location?.state?.return_url || "/", {
  //     replace: true,
  //     state: {
  //       name: "kadir",
  //     },
  //   });
  // };

  // const { handleSubmit, handleChange, values } = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   onSubmit: (values) => {
  //     setUser(values);

  //   },
  // });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "lightblue",
        gap: "10px",
      }}
    >
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          setUser(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Field
              style={{ border: "1px solid black" }}
              type="text"
              name="username"
            />{" "}
            <br />
            <Field
              style={{ border: "1px solid black" }}
              type="password"
              name="password"
            />
            <br />
            <button
              style={{ padding: "5px 10px", border: "1px solid blue" }}
              type="submit"
            >
              Giriş yap
            </button>
          </Form>
        )}
      </Formik>
      <Link
        style={{
          padding: "10px 20px",
          backgroundColor: "purple",
          margin: "20px",
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        to="/contact"
      >
        CONTACT
      </Link>
    </div>
  );
}

export default Login;

{
  /* <Helmet>
  <title>Login</title>
</Helmet>
login page <br /> */
}

{
  /* <form onSubmit={handleSubmit}>
  <label htmlFor="username"> Kullanıcı adı : </label>
  <input
  style={{ border: "1px solid black" }}
            type="text"
            value={values.username}
            onChange={handleChange}
            id="username"
          />{" "}
          <br />
          <label htmlFor="password"> Şifre : </label>
          <input
            value={values.password}
            onChange={handleChange}
            type="password"
            id="password"
            style={{ border: "1px solid black" }}
          />
          <br />
          <button
            style={{ padding: "5px 10px", border: "1px solid blue" }}
            type="submit"
          >
            {" "}
            Giriş yap
          </button>
        </form> */
}

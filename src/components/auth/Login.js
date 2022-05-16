import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="text"
          name="Email"
          placeholder="Email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          name="Password"
          placeholder="Password"
        />
        <button className="btn btn-primary btn-block">Login</button>
        <hr />
        <div className="auth_social-network">
          <p className="auth_social-network--title">Login con redes sociales</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon "
                src={require("../../assets/icons/icons-google.png")}
                alt="Icon de google"
              />
            </div>
            <p className="btn-text">
              <b>Sign in con Google</b>
            </p>
          </div>
        </div>
      </form>
      <Link to="/auth/register" className="btn-create-account">
        Crear nueva cuenta
      </Link>
    </>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";
const SingUp = () => {
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <>
      <h3 className="auth__title">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="name"
          name="Name"
          placeholder="Name"
        />

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

        <input
          className="auth__input"
          type="text"
          name="confirm-password"
          placeholder="Confirm Password"
        />

        <button className="btn btn-primary btn-block mb-signup">Sign Up</button>
      </form>
      <Link to="/auth/login" className="btn-create-account pointer">
        Ya estás registrado?
      </Link>
    </>
  );
};

export default SingUp;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/auth/Login";
import SingUp from "../components/auth/SingUp";

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-contianer">
        <Switch>
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/register" component={SingUp} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthRouter;

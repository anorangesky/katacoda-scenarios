import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import "./style.css";

const LoginForm = ({ loginCallback }) => {
  const [email, setEmail] = useState("");
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [passwordValidationError, setPasswordValidationError] = useState(false);
  const [password, setPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email, () => setEmailValidationError(true))) return;
    if (!validatePassword(password, () => setPasswordValidationError(true)))
      return;

    const err = await loginCallback(email, password);
    if (err) {
      setLoginError(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="login-form"
      data-testid="login-form"
    >
      <TextField
        error={!!emailValidationError}
        helperText={!!emailValidationError && "Invalid email address"}
        color="secondary"
        label="Email"
        variant="filled"
        className="login-field"
        data-testid="login-email-field"
        value={email}
        onInput={(e) => setEmail(e.target.value)}
      ></TextField>
      <TextField
        error={!!passwordValidationError}
        helperText={!!passwordValidationError && "Invalid password"}
        color="secondary"
        label="Password"
        type="password"
        variant="filled"
        className="login-field"
        data-testid="login-password-field"
        onInput={(e) => setPassword(e.target.value)}
      ></TextField>
      <Button
        type="submit"
        variant="contained"
        data-testid="login-submit-button"
        color="secondary"
      >
        Submit
      </Button>
      {!!loginError && <Alert severity="error">{loginError}</Alert>}
    </form>
  );
};

const validateEmail = (email, validationErrorCallback) => {
  const match = email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  if (!match) validationErrorCallback();
  return match ? true : false;
};

const validatePassword = (password, validationErrorCallback) => {
  const match = !!password;
  if (!match) validationErrorCallback();
  return match ? true : false;
};

LoginForm.propTypes = {
  loginCallback: PropTypes.func,
};

export default LoginForm;

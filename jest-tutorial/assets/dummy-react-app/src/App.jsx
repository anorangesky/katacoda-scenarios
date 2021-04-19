import "./App.css";

import React from "react";
import PropTypes from "prop-types";
import LoginForm from "./components/loginForm";
import { connect } from "react-redux";
import { authenticate } from "./redux/actions";

const App = ({ user, handleAuthentication }) => {
  return (
    <div className="App">
      <header className="App-header">
        {!user ? (
          <>
            <LoginForm loginCallback={handleAuthentication} />
          </>
        ) : (
          <>
            <div data-testid="greeting">hello {user.username}!</div>
          </>
        )}
      </header>
    </div>
  );
};

App.propTypes = {
  user: PropTypes.object,
  handleAuthentication: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuthentication: (payload) => dispatch(authenticate(payload)),
  };
};

const AppWithStore = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWithStore;

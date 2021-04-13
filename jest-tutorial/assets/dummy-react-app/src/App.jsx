import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

const users = {
  0: {
    id: 0,
    username: "adahen",
    email: "adahen@kth.se",
  },
};

const passwords = {
  "adahen@kth.se": {
    id: 0,
    password: "admin",
  },
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const errorMsg = "Invalid user credentials";
    const res = passwords[email];
    if (res?.password !== password) return errorMsg;

    setIsLoggedIn(true);
    setUser(users[res.id]);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isLoggedIn ? (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <LoginForm loginCallback={login} />
          </>
        ) : (
          <>
            <div>hello {user.username}!</div>
          </>
        )}
      </header>
    </div>
  );
};

export default App;

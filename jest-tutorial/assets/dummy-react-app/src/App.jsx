import "./App.css";

import React, { useState } from "react";
import LoginForm from "./components/loginForm";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

  const authenticate = async (email, password) => {
    try {
      const response = await axios.post("localhost:5000/authenticate", {
        email,
        password,
      });
      setUser(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {!user ? (
          <>
            <LoginForm loginCallback={authenticate} />
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

export default App;

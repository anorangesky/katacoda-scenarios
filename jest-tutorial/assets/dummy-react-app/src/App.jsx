import "./App.css";

import React, { useEffect, useState } from "react";
import LoginForm from "./components/loginForm";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const response = await axios.get("localhost:5000/me");
    if (response.status === 200) {
      setUser(response.data);
    }
  }, []);

  const authenticate = async (email, password) => {
    try {
      const response = await axios.post("localhost:5000/authenticate", {
        email,
        password,
      });
      if (response.status === 200) {
        setUser(response.data);
      }
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="columns is-centered" style={{ backgroundColor: "#A9B5DF", minHeight: "100vh", padding: "2rem" }}>
      <div className="column is-half">
        <div className="box" style={{ padding: "2rem", borderRadius: "12px", backgroundColor: "#EAE2C6" }}>
          <h1 className="title has-text-centered" style={{ color: "#27445D" }}>Login</h1>
          {errorMessage && <div className="notification is-danger">{errorMessage}</div>}
          <form onSubmit={handleLogin}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>
            <div className="field has-text-centered">
              <button type="submit" className="button is-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      await axios.post("/login", { email, password });
      alert("login successful");
      setRedirect(true);
    } catch (e) {
      alert("login failed");
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="mt-4">
      <h1 className="text-4xl text-center">Login</h1>
      <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className="primary">Login</button>
        <div className="text-center py-2 text-gray-500">
          Don't have an account yet?
          <Link className="underline text-black" to={"/register"}>
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

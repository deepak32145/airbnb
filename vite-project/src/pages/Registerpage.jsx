import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registerpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration successful now you can login");
    } catch (e) {
      alert("Registration failed please try again later..");
    }
  }
  return (
    <div className="mt-4">
      <h1 className="text-4xl text-center">Login</h1>
      <form className="max-w-md mx-auto" onSubmit={registerUser}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="primary">Register</button>
        <div className="text-center py-2 text-gray-500">
          Already a member
          <Link className="underline text-black" to={"/login"}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registerpage;

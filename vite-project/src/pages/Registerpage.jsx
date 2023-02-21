import React from "react";
import { Link } from "react-router-dom";

const Registerpage = () => {
  return (
    <div className="mt-4">
      <h1 className="text-4xl text-center">Login</h1>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="John Doe" />
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="primary">Sign Up</button>
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

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-4 shadow-lg rounded-md overflow-hidden">
      <div className="px-8 py-8 bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form>
          <div className="mb-4 relative">
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none transition duration-200 ${
                email !== "" ? "border-blue-500" : ""
              }`}
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-200 ${
                email !== "" ? "text-blue-500 -translate-y-full" : ""
              }`}
              htmlFor="email"
            >
              Email *
            </label>
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              id="password"
              name="password"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none transition duration-200 ${
                password !== "" ? "border-blue-500" : ""
              }`}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-200 ${
                password !== "" ? "text-blue-500 -translate-y-full" : ""
              }`}
              htmlFor="password"
            >
              Password *
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    console.log("Logging in with:", user);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Login Form Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login Page
        </h1>

        {/* Email Input */}
        <div className="my-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        {/* Password Input */}
        <div className="my-4">
          <label
            htmlFor="password"
            className="block text-gray-600 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={onLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-300"
        >
          Login
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-500 text-sm">
          Dont have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    console.log("Signup clicked", user);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Signup Card */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Signup Page
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
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        {/* Username Input */}
        <div className="my-4">
          <label
            htmlFor="username"
            className="block text-gray-600 font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            name="username"
            placeholder="Enter your username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
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
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        {/* Signup Button */}
        <button
          onClick={onSignup}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-300"
        >
          Signup
        </button>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-500 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}

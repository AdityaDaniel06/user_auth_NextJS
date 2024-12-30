/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    console.log("Signup clicked", user);

    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log(response.data);
      toast.success("Signup successful");
      router.push("/login");
    } catch (err: any) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Signup Card */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {loading ? "Creating a new Account..." : "Signup"}
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
            className="w-full p-3 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="w-full p-3 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="w-full p-3 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        {/* Signup Button */}
        <button
          onClick={onSignup}
          className={`w-full py-3 rounded-lg font-medium transition duration-300 ${
            error
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          disabled={error}
        >
          {error ? "Enter some Values" : "Signup"}
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

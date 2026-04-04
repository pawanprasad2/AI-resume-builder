import React from "react";
import { Link } from "react-router";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#b5b5b5a7] flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold">
            R
          </div>
          <h1 className="mt-3 text-xl font-semibold tracking-tight">
            ResumeAI
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">

          <h2 className="text-lg font-medium text-center mb-6">
            Create your account
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/80 transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/80 transition"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/80 transition"
            />

            <button className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition">
              Create account
            </button>

          </form>


          <p className="text-xs text-center text-gray-500 mt-6">
            Already have an account?{" "}
          <Link to="/login">  <span className="text-black font-medium cursor-pointer hover:underline">
              Log in
            </span></Link>
          </p>

        </div>
      </div>
    </div>
  );
}
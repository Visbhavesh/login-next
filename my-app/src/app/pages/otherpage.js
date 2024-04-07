'use client'
import React from "react";

export default function Otherpage() {
  

  return (
    <div className="text-3xl text-white h-full ">
      <h1 className="text-center text-black mt-6 font-bold mb-4">Login Form</h1>
      <form onSubmit={handleSubmit} className="bg-gray-200 px-8 py-4 rounded-lg shadow-md mx-auto max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
          <button onClick={handleRedirect} className="bg-blue-500 text-base m-10 text-white mt-10 px-2 py-2 w-20 rounded font-bold ml-4">
            Login
          </button>
       
      </form>
    </div>
  );
}

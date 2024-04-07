'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';


export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
  });

  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(formData);
  };
  const router = useRouter();
  const handleRedirect = () => {
    router.push('/otherpage');
  };

  return (
    <div className="text-3xl text-black bg-gray-100 h-screen">
      <h1 className="text-center text-black pt-5  font-bold mb-4">Sign Up Form</h1>
      <form onSubmit={handleSubmit} className="bg-gray-200 px-8 py-4 rounded-lg shadow-md mx-auto max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
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
          <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">
            Contact
          </label>
          <input
            type="tel"
            id="contact"
            value={formData.contact}
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
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className='flex flex-box'>
        <button  type="submit" className="bg-blue-500 text-base m-10 text-white mt-8 px-2 py-2 rounded font-bold ">
          Sign Up
        </button>
        <button onClick={handleRedirect} className="bg-blue-500 text-base m-10 text-white mt-8 w-20 px-2 py-2 rounded font-bold">
        Login 
        </button>
        </div>
      </form>
    </div>
  );
}

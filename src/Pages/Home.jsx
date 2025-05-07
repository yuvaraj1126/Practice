import React, { useState } from 'react';

function Home() {
    const [formInput, setformInput] =useState({
        name :"",
        age : "",
        email:"",
        contact: "",

    });

    const handleChange =(e)=>{
        const {name,value} =e.target;
        setformInput((curInput)=>{
            return{
                ...curInput,
                [name]:value,
            };
        });
    };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-semibold text-center text-blue-600">User Form</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input name='name' type="text" value={formInput.name}  onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input name='age' type="number" value={formInput.age} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="text" name='email' value={formInput.email}  onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Contact</label>
          <input type="number" name='contact' value={formInput.contact} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Add
        </button>
      </form>
    </div>
  );
}

export default Home;

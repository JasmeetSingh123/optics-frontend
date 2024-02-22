import axios from 'axios';
import React, { useState } from 'react'

export default function Register() {
    const [email,setEmail]=useState('');
    const[password, setPassword]=useState('');
    const [name,setName]=useState('');

    const handleEmailChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value)    
    }
    const handleNameChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)    
    }
    const handlePassChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(event.target.value)    
    }

    const handleSubmit=(event: React.ChangeEvent<HTMLInputElement>)=>{
        event.preventDefault()
        const userData = {
            name : name,
            email: email,
            password: password,
            };
        axios.post('http://localhost:8001/api/user/auth/register',userData)
        .then((res)=>{
            console.log('registration Successful');

        }).catch((e)=>{
            console.log("error: "+e)
        })
    }
  return (
    <>
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
      
    </>
  )
}


import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const userData = {
        email: email,
        password: password,
        };

        // Send the user data to the backend server
        axios.post('https://pothiwalopticals.onrender.com/api/user/auth/login',userData,{
            withCredentials: true
          })
        .then((response) => {
            console.log('Login successful:', response);
            // Handle success, such as redirecting to a dashboard page
        })
        .catch((error) => {
            console.error('Error logging in:', error);
            // Handle error, such as displaying an error message to the user
        });
    };

    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    
    //     const userData = {
    //         email: email,
    //         password: password,
    //     };
    
    //     // Send the user data to the backend server
    //     fetch('http://localhost:8001/api/user/auth/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(userData),
    //         credentials: 'same-origin', // Include credentials (cookies) in the request
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('Login successful:', data);
    //         // Handle success, such as redirecting to a dashboard page
    //     })
    //     .catch(error => {
    //         console.error('Error logging in:', error);
    //         // Handle error, such as displaying an error message to the user
    //     });
    // };
    

    // useEffect(()=>{
    
    // },[])

    return (
        <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Login</button>
        </form>
        </div>
    );
}
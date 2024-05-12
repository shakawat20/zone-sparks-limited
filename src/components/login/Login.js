import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const data = {
        email: email,
        password: password
    }

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('https://summerfield.store/login/',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log("important data", data)
                localStorage.setItem('access_token', data.tokens.access_token)
            });
            // if(!data.tokens.access_token){
            //     navigate('/login')
            // }
        navigate('/')
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password:</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                                    required
                                />
                                <input
                                    type="checkbox"
                                    className="absolute right-3 top-2"
                                    onChange={() => setShowPassword(!showPassword)}
                                />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className='flex flex-col justify-center items-center'>
                        <span>or</span>
                        <Link to='/registration'>
                            <button type="submit" className="border rounded border-blue text-gray py-2 px-4">
                                create account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const minLength = 6;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    //   const navigate = useNavigate();
    const data={
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            image: image
            }
            
        
    


    const handleRegister = async (e) => {
        e.preventDefault();

        fetch('https://summerfield.store/register/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        )
            .then(res => res.json())
            .then(data=>console.log("hope",data))

     

        if (!image) {
            alert('Please select an image.');
            return;
        }

        // Perform registration logic here, including image upload

        try {
            // Your registration logic goes here
            console.log('Registration data:', { firstName, lastName, email, password, image });

            // Example: Register user with email and password
            // await createUserWithEmailAndPassword(email, password);

            // Navigate to dashboard after successful registration

        } catch (error) {
            console.error('Registration Error:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Registration</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">
                            Email:
                        </label>
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
                        <label htmlFor="password" className="block text-gray-700">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700">
                            Profile Image:
                        </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
                    >
                        {/* {loading ? 'Registering...' : 'Register'} */}
                        Registration
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;

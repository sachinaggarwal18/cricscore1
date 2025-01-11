import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [errors, setErrors] = useState({}); // State to store validation errors

    const navigate = useNavigate();

    // Validation function
    const validateForm = () => {
        const newErrors = {};

        if (!username || username.length < 4) {
            newErrors.username = "Username must be at least 4 characters long.";
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!password || password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        } else if (!/[A-Z]/.test(password)) {
            newErrors.password = "Password must include at least one uppercase letter.";
        } else if (!/[a-z]/.test(password)) {
            newErrors.password = "Password must include at least one lowercase letter.";
        } else if (!/[0-9]/.test(password)) {
            newErrors.password = "Password must include at least one number.";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            newErrors.password = "Password must include at least one special character.";
        }

        if (!age || age <= 0) {
            newErrors.age = "Age must be a positive number.";
        }

        if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be a valid 10-digit number.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fix the errors in the form.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        const newUser = {
            username,
            email,
            password,
            age,
            phoneNumber,
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/signup`, newUser);

            if (response.status === 201) {
                toast.success('🏏 Account created successfully! Redirecting...', {
                    position: "top-right",
                    autoClose: 1200,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                localStorage.setItem('token', response.data.token);
                setTimeout(() => {
                    navigate('/');
                }, 1400);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "❌ An error occurred during signup.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        setUsername('');
        setEmail('');
        setPassword('');
        setAge('');
        setPhoneNumber('');
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-300 via-yellow-200 to-green-300">
            <div className="bg-white rounded-lg shadow-lg p-8 m-3 max-w-md w-full">
                <h1 className="text-2xl font-bold text-teal-600 text-center mb-14">
                   🏏 Step into the World of Cricket Like Never Before!
                    <svg
                        className="absolute left-1/2 -translate-x-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="20"
                        viewBox="0 0 200 20"
                        fill="none"
                    >
                        <path
                            d="M10 15 Q100 0 190 15"
                            stroke="#C4B454"
                            strokeWidth="4"
                            fill="none"
                        />
                    </svg>
                </h1>
                <form onSubmit={submitHandler} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className={`w-full border rounded-lg px-4 py-2 outline-none ${
                                errors.username ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className={`w-full border rounded-lg px-4 py-2 outline-none ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className={`w-full border rounded-lg px-4 py-2 outline-none ${
                                errors.password ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Enter age"
                            className={`w-full border rounded-lg px-4 py-2 outline-none ${
                                errors.age ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Enter phone number"
                            className={`w-full border rounded-lg px-4 py-2 outline-none ${
                                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white font-medium py-2 rounded-lg hover:bg-teal-600 transition duration-300"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-center text-gray-600 text-lg mt-4">
                    Already a member?{' '}
                    <Link to="/user/login" className="text-teal-500 font-medium hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;

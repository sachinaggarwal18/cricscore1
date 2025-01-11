import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const newUser = {
            username,
            email,
            password,
            age,
            phoneNumber
        };

        try {
            console.log("Submitting user data:", newUser);

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/signup`, newUser);

            if (response.status === 201) {
                toast.success("Account created successfully! Redirecting...");
                localStorage.setItem('token', response.data.token);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            if (error.response?.status === 400) {
                toast.error(error.response.data.message || "Invalid input data. Please try again.");
            } else {
                toast.error("An error occurred during signup. Please try again later.");
            }
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
                    Step into the World of Cricket Like Never Before!
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
                            stroke="brown"
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Enter age"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Enter phone number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
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

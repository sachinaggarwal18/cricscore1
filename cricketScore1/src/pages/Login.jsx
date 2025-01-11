import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const userData = { username, password };

        try {
            console.log("Payload sent:", userData);

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, userData);

            if (response.status === 200) {
                toast.success('🏏 Login successful! Redirecting...', {
                    position: "top-right",
                    autoClose: 2000,
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
        } catch (err) {
            console.error("Error during login:", err);
            toast.error(err.response?.data?.message || "❌ An error occurred during login.", {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        setUsername('');
        setPassword('');
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-300 via-yellow-200 to-green-300">
            <div className="bg-white rounded-lg shadow-lg p-8 m-3 max-w-md w-full">
                <h1 className="text-3xl font-bold text-teal-600 text-center mb-14">
                    Welcome Back!
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
                            type="password"
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white font-medium py-2 rounded-lg hover:bg-teal-600 transition duration-300"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-center text-gray-600 text-lg mt-4">
                    New member?{' '}
                    <Link to="/user/signup" className="text-teal-500 font-medium hover:underline">
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

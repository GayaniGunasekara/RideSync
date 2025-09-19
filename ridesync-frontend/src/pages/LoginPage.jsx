// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card-Login-Reg";
import "../index.css";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth(); // get login() from context
    const navigate = useNavigate();

    // Handle login form submission
    const handleLogin = (e) => {
        e.preventDefault();

        // 🚩 For now we "decide role" based on username
        let role;
        if (username.toLowerCase().includes("vehicle")) {
            role = "VehicleOwner";
            login({ username, role }); // save in context + localStorage
            navigate("/VehicleOwner/Dashboard"); // redirect to vehicle owner dashboard
        } else {
            role = "WorkshopOwner";
            login({ username, role });
            navigate("/WorkshopOwner/Dashboard");
        }

        console.log("Logged in as:", username, "Role:", role);
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Card>
                <h1 className="text-white text-xl mb-6">Login</h1>

                <form
                    onSubmit={handleLogin}
                    className="flex flex-col items-center "
                >
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-3 rounded-full outline-none w-full mb-4"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 rounded-full outline-none w-full mb-4"
                    />

                    <button
                        type="submit"
                        className="bg-white text-[#088395] font-bold py-2 px-6 rounded-full mt-2"
                    >
                        Login
                    </button>
                </form>

                {/* Extra Links */}
                <div className="mt-10 text-center text-sm text-white w-[330px]">
                    <p className="mb-2 cursor-pointer">Forgot password?</p>

                    <div className="flex justify-between text-xs">
                        <span>Don’t have an account?</span>
                        <span
                            onClick={() => navigate("/register")}
                            className="underline cursor-pointer"
                        >
                            Register Now
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    );
}

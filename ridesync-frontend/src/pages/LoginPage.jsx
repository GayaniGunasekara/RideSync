// ✅ Import the useState hook from React
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import Card from "../components/Card-Login-Reg"; // ✅ Reusable card component
import "../index.css"; // Global styles
import { useAuth } from "../context/AuthContext";  //import the useAuth

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth(); //get the login function from context
    const navigate = useNavigate();

    // ✅ Function to handle login form submission
    const handleLogin = (e) => {
        e.preventDefault();

        // TODO: Replace this with backend/Firebase authentication check
        console.log("Username:", username, "Password:", password);

        // Example role check (you will replace with actual user data from backend)
        if (username.includes("vehicle")) {
            localStorage.setItem("userRole", "vehicleOwner"); // save role
            navigate("/VehicleOwner/Dashboard"); // redirect
        } else {
            localStorage.setItem("userRole", "workshopOwner");
            navigate("/WorkshopOwner/Dashboard");
        }
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

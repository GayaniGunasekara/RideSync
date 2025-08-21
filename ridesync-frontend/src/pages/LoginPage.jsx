// ✅ Import the useState hook from React
// useState lets you create and manage component state (e.g., username & password)
import { useState } from "react";

// ✅ Import a reusable Card component for styling/layout
// This wraps the login form in a styled card (from ../components/Card-Login-Reg)
import Card from "../components/Card-Login-Reg";

// ✅ Import global CSS styles (Tailwind + custom CSS)
import "../index.css";


// ✅ Define and export the LoginPage component so it can be used in the app
export default function LoginPage() {
    // ✅ Define two state variables: username & password
    // These store the input values from the form fields
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // ✅ Function to handle login form submission
    const handleLogin = (e) => {
        e.preventDefault(); // prevent page reload when form is submitted
        console.log("Username:", username, "Password:", password); // log credentials for debugging
        // show different alerts based on username content
        alert(username.includes("vehicle") ? "Vehicle Dashboard" : "Workshop Dashboard");
    };

    // ✅ JSX to render the login form
    return (
        // flexbox container: center content horizontally & vertically
        // h-screen & w-screen ensure it covers full viewport height & width
        <div className="flex justify-center items-center h-screen w-screen">

            {/* ✅ Card wrapper (for nice UI box layout) */}
            <Card>
                {/* Page heading */}
                <h1>Login</h1>

                {/* ✅ Login form */}
                <form
                    onSubmit={handleLogin} // call handleLogin when form is submitted
                    className="flex flex-col items-center" // vertical stacking of inputs & button
                >
                    {/* ✅ Username input */}
                    <input
                        type="text" // input type text
                        placeholder="Username" // gray placeholder text
                        value={username} // controlled input bound to state
                        onChange={(e) => setUsername(e.target.value)} // update state when typing
                        className="p-3 rounded-full outline-none border-none w-full" // Tailwind styling
                    />

                    {/* ✅ Password input */}
                    <input
                        type="password" // hides text as dots
                        placeholder="Password"
                        value={password} // controlled input bound to state
                        onChange={(e) => setPassword(e.target.value)} // update state when typing
                        className="p-3 rounded-full outline-none border-none w-full mt-4" // mt-4 adds space above
                    />

                    {/* ✅ Submit button */}
                    <button type="submit">
                        Login
                    </button>
                </form>

                {/* ✅ Extra links below form */}
                {/* mt-10 -> margin top between form & this section
                    text-center -> center text
                    text-sm -> smaller font
                    text-white -> white text
                    cursor-pointer -> hover effect on text
                    w-[330px] -> fixed width so text doesn’t stretch full card */}
                <div className="mt-10 text-center text-sm text-white cursor-pointer w-[330px]">
                    <p>Forgot password?</p>

                    {/* ✅ Register section */}
                    <div className="flex justify-between text-xs">
                        <span>Don’t have an account?</span>
                        <a href="RegisterSelection.jsx" className="underline">Register Now </a>{/* underlined for clickable look */}
                    </div>
                </div>
            </Card>
        </div>
    );
}

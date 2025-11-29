// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a Context (global "box") to store authentication info
const AuthContext = createContext();

export function AuthProvider({ children }) {
    // Load initial user from localStorage (if available)
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Function to log in → save {username, role} in state + localStorage
    const login = ({ username, role }) => {
        const newUser = { username, role };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser)); // persist on refresh
    };

    // Function to log out → clear user from state + localStorage
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    // Provide user info + functions to the rest of the app
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook → makes it easy to use auth anywhere
export function useAuth() {
    return useContext(AuthContext);
}
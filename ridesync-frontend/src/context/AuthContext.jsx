// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();  //a special “box” to store authentication info

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // null = means initially no one is logged in.

    const login = ({ username, role }) => {
        setUser({ username, password, role }); //sets the user info when someone logs in
    };


    const logout = () => {
        setUser(null);   //clears the user info on logout
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);   //makes it easy for any component to get user, login, and logout.
}

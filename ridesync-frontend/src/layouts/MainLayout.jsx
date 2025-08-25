// src/layouts/MainLayout.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { usePageTitle } from "../context/PageTitleContext";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
    const { user, logout } = useAuth();
    const { title } = usePageTitle();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-[#F4FDFF]">
            {/* Header */}
            <header className="flex items-center justify-between p-4 shadow-md bg-white">
                {/* Menu button */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
                    ☰
                </button>

                {/* Page Title */}
                <h1 className="text-lg font-semibold">{title}</h1>

                {/* Logo */}
                <div className="font-bold text-xl text-blue-600">RideSync</div>
            </header>

            {/* Sidebar / Drawer */}
            {menuOpen && (
                <nav className="absolute top-0 left-0 w-64 h-full bg-gray-100 shadow-lg p-4">
                    <h2 className="font-bold mb-4">Menu</h2>

                    {user?.role === "owner" && (
                        <ul>
                            <li><Link to="/owner/dashboard">Dashboard</Link></li>
                            <li><Link to="/owner/register-vehicle">Register Vehicle</Link></li>
                        </ul>
                    )}

                    {user?.role === "workshop" && (
                        <ul>
                            <li><Link to="/workshop/dashboard">Dashboard</Link></li>
                            <li><Link to="/workshop/manage-services">Manage Services</Link></li>
                        </ul>
                    )}

                    <button onClick={logout} className="mt-4 text-red-500">Logout</button>
                </nav>
            )}

            {/* Main Content */}
            <main className="flex-1 p-6">
                <Outlet /> {/* Pages render here */}
            </main>

            {/* Footer (optional) */}
            <footer className="p-4 text-center text-sm text-gray-500">
                © 2025 RideSync
            </footer>
        </div>
    );
}

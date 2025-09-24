// src/layouts/VehicleOwnerLayout.jsx
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons
import logo from "../assets/ridesync-logo.svg"; // adjust path to your logo

export default function VehicleOwnerLayout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-10">
            {/* Top Bar */}
            <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
                {/* Menu Icon */}
                <button onClick={() => setIsOpen(true)} className="text-gray-700">
                    <Menu size={34} />
                </button>

                {/* Logo */}
                <img src={logo} alt="RideSync" className="h-8" />
            </header>

            {/* Sidebar */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Sidebar Panel */}
                    <div className="w-64 bg-blue-900 text-white flex flex-col p-4 space-y-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="self-end mb-4 text-white"
                        >
                            <X size={20} />
                        </button>

                        <nav className="flex flex-col space-y-3">
                            <Link to="/VehicleOwner/Dashboard" className="hover:text-blue-300">Dashboard</Link>
                            <Link to="/VehicleOwner/Profile" className="hover:text-blue-300">Profile</Link>
                            <Link to="/VehicleOwner/Vehicles" className="hover:text-blue-300">Vehicles</Link>
                            <Link to="/VehicleOwner/ServiceCenters" className="hover:text-blue-300">Service & Repair Centers</Link>
                            <Link to="/VehicleOwner/Notifications" className="hover:text-blue-300">Notifications</Link>
                        </nav>
                    </div>

                    {/* Overlay (click to close) */}
                    <div
                        onClick={() => setIsOpen(false)}
                        className="flex-1 bg-black bg-opacity-50"
                    />
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 p-4">
                <Outlet /> {/* Child pages render here */}
            </main>
        </div>
    );
}

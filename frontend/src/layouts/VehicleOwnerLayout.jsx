// src/layouts/VehicleOwnerLayout.jsx
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "lucide-react"; // only Menu icon for toggle
import logo from "../assets/ridesync-logo.svg"; // check path

export default function VehicleOwnerLayout() {
    const [isOpen, setIsOpen] = useState(true); // sidebar open by default

    return (
        <div className="min-h-screen flex">
            {/* Sidebar (fixed left) */}
            <aside
                className={`h-screen bg-blue-900 text-white flex flex-col transition-all duration-300
                ${isOpen ? "w-64" : "w-20"}`}
            >
                {/* Logo + Toggle */}
                <div className="flex items-center justify-between p-4">
                    {/* Logo always shows, but shrinks when collapsed */}
                    <img
                        src={logo}
                        alt="RideSync"
                        className={`transition-all duration-300 ${isOpen ? "h-8" : "h-8 w-8"}`}
                    />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2 rounded hover:bg-blue-300"
                    >
                        <Menu size={8} /> {/* bigger button */}
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col space-y-3 px-4">
                    <Link to="/VehicleOwner/Dashboard" className="hover:text-blue-300">
                        Dashboard
                    </Link>
                    <Link to="/VehicleOwner/Profile" className="hover:text-blue-300">
                        Profile
                    </Link>
                    <Link to="/VehicleOwner/Vehicles" className="hover:text-blue-300">
                        Vehicles
                    </Link>
                    <Link to="/VehicleOwner/ServiceCenters" className="hover:text-blue-300">
                        Service & Repair Centers
                    </Link>
                    <Link to="/VehicleOwner/Notifications" className="hover:text-blue-300">
                        Notifications
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex justify-center items-start p-6 bg-gray-50">
                <div className="w-full max-w-4xl">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
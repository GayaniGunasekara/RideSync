// src/layouts/MainLayout.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
    const { user, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    // Role-based menu items
    const menuItems = {
        VehicleOwner: [
            { path: "/VehicleOwner/Dashboard", label: "Dashboard" },
            { path: "/VehicleOwner/Vehicles", label: "My Vehicles" },
            { path: "/VehicleOwner/Bookings", label: "Bookings" },
        ],
        WorkshopOwner: [
            { path: "/WorkshopOwner/Dashboard", label: "Dashboard" },
            { path: "/WorkshopOwner/Requests", label: "Service Requests" },
            { path: "/WorkshopOwner/Inventory", label: "Inventory" },
        ],
    };

    return (
        // full screen, flex column layout
        <div className="min-h-screen flex flex-col bg-[#EBF4F6]">

            {/* Header */}
            <header className="flex items-center justify-between p-2 shadow-md bg-white ">
                {/* Menu button - smaller, no extra padding/box */}
                <img
                    src="/assets/Menu.svg"
                    onClick={() => setMenuOpen(!menuOpen)}
                    alt="Menu"
                    width={20}
                    className="cursor-pointer"
                >
                </img>



                {/* Logo aligned to the far right */}
                <img
                    src="/assets/ridesync-logo.svg"   // make sure file is in public/assets/
                    alt="RideSync Logo"
                    width={50}
                />
            </header>



            {/* Sidebar / Drawer */}
            <div
                className={`fixed bg-gray-100 shadow-lg p-4 z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <h2 className="font-bold mb-4">Menu</h2>

                <ul className="space-y-2">
                    {menuItems[user?.role]?.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className="block p-2 rounded hover:bg-gray-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={logout}
                    className="mt-6 text-red-500 font-medium"
                >
                    Logout
                </button>
            </div>


            {/* Main Content - centered & responsive */}
            <main className="flex-1 bg-[#EBF4F6]">
                <div className="max-w-6xl mx-auto p-6">
                    <Outlet /> {/* Pages render here */}
                </div>
            </main>


            {/* Footer */}
            <footer className="p-4 text-center text-sm text-gray-500">
                © 2025 RideSync
            </footer>
        </div>
    );
}

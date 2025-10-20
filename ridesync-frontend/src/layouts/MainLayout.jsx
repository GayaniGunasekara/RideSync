// src/layouts/MainLayout.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Home, Car, MapPin, Bell, User, Wrench, Package, Users, BarChart3, LogOut } from 'lucide-react';

export default function MainLayout() {
    const { user, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Role-based menu items with icons
    const menuItems = {
        VehicleOwner: [
            { path: "/VehicleOwner/Dashboard", label: "Dashboard", icon: Home },
            { path: "/VehicleOwner/Vehicles", label: "My Vehicles", icon: Car },
            { path: "/VehicleOwner/ServiceCenters", label: "Service Centers", icon: MapPin },
            { path: "/VehicleOwner/Notifications", label: "Notifications", icon: Bell },
            { path: "/VehicleOwner/Profile", label: "Profile", icon: User },
        ],
        WorkshopOwner: [
            { path: "/WorkshopOwner/Dashboard", label: "Dashboard", icon: Home },
            { path: "/WorkshopOwner/ServiceRequests", label: "Service Requests", icon: Wrench },
            { path: "/WorkshopOwner/Inventory", label: "Inventory", icon: Package },
            { path: "/WorkshopOwner/Customers", label: "Customers", icon: Users },
            { path: "/WorkshopOwner/Analytics", label: "Analytics", icon: BarChart3 },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 flex w-full">
            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
                ${menuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">RS</span>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">RideSync</h2>
                            <p className="text-xs text-gray-500 capitalize">{user?.role?.replace(/([A-Z])/g, ' $1').trim()}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="p-4 flex-1">
                    <div className="space-y-1">
                        {menuItems[user?.role]?.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500 shadow-sm'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Icon size={20} className={isActive ? 'text-blue-600' : ''} />
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-200">
                        <button
                            onClick={logout}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors w-full font-medium"
                        >
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen w-full">
                {/* Mobile Header */}
                <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <Menu size={20} />
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">RS</span>
                            </div>
                            <span className="font-semibold text-gray-800">RideSync</span>
                        </div>
                        <div className="w-8" />
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto bg-gray-50 w-full">
                    <div className="w-full p-2 sm:p-4 lg:p-6">
                        <Outlet />
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-200 px-4 py-3 text-center text-sm text-gray-500">
                    © 2025 RideSync. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
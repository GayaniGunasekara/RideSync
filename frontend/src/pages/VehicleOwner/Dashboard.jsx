// src/pages/VehicleOwner/Dashboard.jsx
import React from "react";
import { Car, Calendar, Wrench, AlertCircle, CheckCircle, Clock, TrendingUp, Users, MapPin, Bell } from 'lucide-react';

export default function VehicleOwnerDashboard() {
    // Dashboard stats
    const stats = [
        { icon: Car, title: 'Total Vehicles', value: '2', color: 'blue', change: '+0' },
        { icon: Calendar, title: 'Upcoming Services', value: '3', color: 'orange', change: '+1' },
        { icon: Wrench, title: 'Services Completed', value: '8', color: 'green', change: '+2' },
        { icon: AlertCircle, title: 'Maintenance Due', value: '1', color: 'red', change: '-1' },
    ];

    // Recent vehicles with service info
    const vehicles = [
        {
            id: 1,
            name: "Honda Civic",
            number: "ABC123",
            model: "2020",
            nextService: "2025-02-15",
            lastService: "2025-01-15",
            status: "Active",
            mileage: "45,000 km",
            serviceHistory: [
                { date: "2025-01-15", service: "Oil Change", cost: "Rs. 8,000" },
                { date: "2024-12-10", service: "Brake Check", cost: "Rs. 12,000" }
            ]
        },
        {
            id: 2,
            name: "Toyota Corolla",
            number: "XYZ789",
            model: "2019",
            nextService: "2025-03-10",
            lastService: "2024-12-10",
            status: "Maintenance Due",
            mileage: "52,000 km",
            serviceHistory: [
                { date: "2024-12-10", service: "Battery Check", cost: "Rs. 15,000" },
                { date: "2024-10-05", service: "Tire Rotation", cost: "Rs. 5,000" }
            ]
        }
    ];

    // Recent notifications
    const notifications = [
        {
            id: 1,
            type: 'service_reminder',
            title: 'Service Reminder',
            message: 'Your Honda Civic is due for service on Feb 15, 2025',
            time: '2 hours ago',
            priority: 'high'
        },
        {
            id: 2,
            type: 'service_completed',
            title: 'Service Completed',
            message: 'Oil change completed for Toyota Corolla',
            time: '1 day ago',
            priority: 'medium'
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Active': return <CheckCircle className="text-green-500" size={20} />;
            case 'Maintenance Due': return <AlertCircle className="text-yellow-500" size={20} />;
            default: return <Car className="text-gray-500" size={20} />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Maintenance Due': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="w-full space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#024b56]">Dashboard</h1>
                    <p className="text-[#026574]  mt-1">Welcome back! Here's your vehicle overview.</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    <p className={`text-xs mt-1 ${stat.change.startsWith('+') ? 'text-green-600' :
                                        stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                                        }`}>
                                        {stat.change} from last month
                                    </p>
                                </div>
                                <div className={`p-3 rounded-lg ${stat.color === 'blue' ? 'bg-blue-100' :
                                    stat.color === 'orange' ? 'bg-orange-100' :
                                        stat.color === 'green' ? 'bg-green-100' :
                                            'bg-red-100'
                                    }`}>
                                    <Icon size={24} className={
                                        stat.color === 'blue' ? 'text-blue-600' :
                                            stat.color === 'orange' ? 'text-orange-600' :
                                                stat.color === 'green' ? 'text-green-600' :
                                                    'text-red-600'
                                    } />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* My Vehicles Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#024b56]">My Vehicles</h2>

                    <button className="bg-[#024b56] text-white px-4 py-2 rounded-lg hover:bg-[#038fa4]  transition-colors flex items-center gap-2">
                        <Car size={16} />
                        Add Vehicle
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {vehicles.map((vehicle) => (
                        <div key={vehicle.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Car className="text-blue-500" size={24} />
                                <div>
                                    <h3 className="font-semibold text-lg">{vehicle.name}</h3>
                                    <p className="text-gray-600">{vehicle.number} • {vehicle.model}</p>
                                </div>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-gray-400" />
                                    <span className="text-sm">Next Service: {vehicle.nextService}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Wrench size={16} className="text-gray-400" />
                                    <span className="text-sm">Last Service: {vehicle.lastService}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {getStatusIcon(vehicle.status)}
                                    <span className={`text-sm px-2 py-1 rounded-full ${getStatusColor(vehicle.status)}`}>
                                        {vehicle.status}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Mileage: {vehicle.mileage}</p>
                            </div>

                            <div className="flex gap-2">
                                <button className="flex-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm hover:bg-blue-200 transition-colors">
                                    Schedule Service
                                </button>
                                <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                                    View History
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Notifications */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#024b56]">Recent Notifications</h2>
                    <button className="text-[#024b56] hover:text-[#038fa4] text-sm font-medium">
                        View All
                    </button>
                </div>

                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <div key={notification.id} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                            <div className={`p-2 rounded-lg ${notification.priority === 'high' ? 'bg-red-100' :
                                notification.priority === 'medium' ? 'bg-yellow-100' :
                                    'bg-blue-100'
                                }`}>
                                <Bell size={16} className={
                                    notification.priority === 'high' ? 'text-red-600' :
                                        notification.priority === 'medium' ? 'text-yellow-600' :
                                            'text-blue-600'
                                } />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium text-gray-900">{notification.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-[#024b56]" >Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors flex flex-col items-center gap-2">
                        <Car size={24} />
                        <span className="text-sm font-medium">Add Vehicle</span>
                    </button>
                    <button className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors flex flex-col items-center gap-2">
                        <Calendar size={24} />
                        <span className="text-sm font-medium">Book Service</span>
                    </button>
                    <button className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors flex flex-col items-center gap-2">
                        <MapPin size={24} />
                        <span className="text-sm font-medium">Find Centers</span>
                    </button>
                    <button className="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 transition-colors flex flex-col items-center gap-2">
                        <Users size={24} />
                        <span className="text-sm font-medium">Get Support</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
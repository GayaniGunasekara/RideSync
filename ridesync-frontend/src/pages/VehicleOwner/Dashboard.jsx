// src/pages/VehicleOwner/Dashboard.jsx
import React from "react";


export default function VehicleOwnerDashboard() {
    // Example vehicle data (later this can come from API/DB)
    const vehicles = [
        {
            id: 1,
            name: "Honda Civic",
            number: "ABC123",
            nextService: "2025-10-10",
            lastService: "2025-07-15",
            lastServices: "Oil Change, Filter Replace",
            changedParts: "Air Filter",
            notes: "Check brakes",
            notifications: ["Oil Changing is Scheduled"],
        },
        {
            id: 2,
            name: "Toyota Corolla",
            number: "XYZ789",
            nextService: "2026-01-05",
            lastService: "2025-08-01",
            lastServices: "Battery Check",
            changedParts: "Battery",
            notes: "Keep tire pressure at 32 PSI",
            notifications: [],
        },
    ];

    return (
        <div>
            {/* Page Title */}
            <h2 className="text-xl font-semibold">Dashboard</h2>

            {/* Vehicle Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((v) => (
                    <div
                        key={v.id}
                        className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                    >
                        <h3 className="font-bold text-lg mb-2">
                            {v.name} - {v.number}
                        </h3>
                        <p><strong>Next Service Date:</strong> {v.nextService}</p>
                        <p><strong>Last Service Date:</strong> {v.lastService}</p>
                        <p><strong>Last Services:</strong> {v.lastServices}</p>
                        <p><strong>Changed Parts:</strong> {v.changedParts}</p>
                        <p><strong>Notes:</strong> {v.notes}</p>
                        <p><strong>Notifications:</strong> {v.notifications.length}</p>
                    </div>
                ))}
            </div>



            {/* Notifications Section */}
            <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold flex items-center gap-2">
                    🔔 Notifications
                </h3>
                <ul className="mt-2 space-y-2">
                    {vehicles.flatMap((v) =>
                        v.notifications.map((n, i) => (
                            <li
                                key={i}
                                className="bg-blue-50 border border-blue-200 rounded-lg p-2"
                            >
                                <strong>{v.name} - {v.number}:</strong> {n}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}

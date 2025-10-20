// src/router/AppRouter.jsx
import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Auth & Protected routes
import { useAuth } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

// Pages
import LoginPage from "../pages/LoginPage";
import RegisterSelection from "../pages/RegisterSelection";
import RegisterVehicleOwner from "../pages/RegisterVehicleOwner";
import RegisterWorkshopOwner from "../pages/RegisterWorkshopOwner";

// Dashboards (import from folder structure)
import VehicleOwnerDashboard from "../pages/VehicleOwner/Dashboard";
import WorkshopOwnerDashboard from "../pages/WorkshopOwner/Dashboard";



// Vehicle Owner imports
import VehicleOwnerVehicles from "../pages/VehicleOwner/Vehicles";
import VehicleOwnerNotifications from "../pages/VehicleOwner/Notifications";
import VehicleOwnerProfile from "../pages/VehicleOwner/Profile";
import VehicleOwnerServiceCenters from "../pages/VehicleOwner/ServiceCenters";

// Workshop Owner imports
import ServiceRequests from "../pages/WorkshopOwner/ServiceRequests";
import Inventory from "../pages/WorkshopOwner/Inventory";
import Customers from "../pages/WorkshopOwner/Customers";
import Analytics from "../pages/WorkshopOwner/Analytics";

export default function AppRouter() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterSelection />} />
                <Route path="/register/vehicle-owner" element={<RegisterVehicleOwner />} />
                <Route path="/register/workshop-owner" element={<RegisterWorkshopOwner />} />

                {/* Vehicle Owner routes (protected) */}
                <Route element={<ProtectedRoute allowedRoles={["VehicleOwner"]} />}>
                    <Route element={<MainLayout />}>
                        <Route path="/VehicleOwner/Dashboard" element={<VehicleOwnerDashboard />} />
                        <Route path="/VehicleOwner/Vehicles" element={<VehicleOwnerVehicles />} />
                        <Route path="/VehicleOwner/Notifications" element={<VehicleOwnerNotifications />} />
                        <Route path="/VehicleOwner/Profile" element={<VehicleOwnerProfile />} />
                        <Route path="/VehicleOwner/ServiceCenters" element={<VehicleOwnerServiceCenters />} />
                    </Route>
                </Route>

                {/* Workshop Owner routes (protected) */}
                <Route element={<ProtectedRoute allowedRoles={["WorkshopOwner"]} />}>
                    <Route element={<MainLayout />}>
                        <Route path="/WorkshopOwner/Dashboard" element={<WorkshopOwnerDashboard />} />
                        <Route path="/WorkshopOwner/ServiceRequests" element={<ServiceRequests />} />
                        <Route path="/WorkshopOwner/Inventory" element={<Inventory />} />
                        <Route path="/WorkshopOwner/Customers" element={<Customers />} />
                        <Route path="/WorkshopOwner/Analytics" element={<Analytics />} />
                    </Route>
                </Route>

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}





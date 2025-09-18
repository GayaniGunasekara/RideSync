// src/router/AppRouter.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Auth & Protection
import ProtectedRoute from "./ProtectedRoute";

// Pages
import LoginPage from "../pages/LoginPage";
import RegisterSelection from "../pages/RegisterSelection";
import RegisterVehicleOwner from "../pages/RegisterVehicleOwner";
import RegisterWorkshopOwner from "../pages/RegisterWorkshopOwner";

// Dashboards (match your folder structure)
import OwnerDashboard from "../pages/VehicleOwner/Dashboard";
import WorkshopDashboard from "../pages/WorkshopOwner/Dashboard";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterSelection />} />
                <Route path="/registerVehicleOwner" element={<RegisterVehicleOwner />} />
                <Route path="/registerWorkshopOwner" element={<RegisterWorkshopOwner />} />

                {/* Vehicle Owner routes (protected) */}
                <Route element={<ProtectedRoute allowedRoles={["vehicleOwner"]} />}>
                    <Route element={<MainLayout />}>
                        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
                    </Route>
                </Route>

                {/* Workshop Owner routes (protected) */}
                <Route element={<ProtectedRoute allowedRoles={["workshopOwner"]} />}>
                    <Route element={<MainLayout />}>
                        <Route path="/workshop/dashboard" element={<WorkshopDashboard />} />
                    </Route>
                </Route>

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

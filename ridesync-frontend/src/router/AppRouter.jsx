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

// Dashboards (import from folder structure)
import VehicleOwnerDashboard from "../pages/VehicleOwner/Dashboard";
import WorkshopOwnerDashboard from "../pages/WorkshopOwner/Dashboard";



// Vehicle Owner imports


//Workshop Owner Imports add here later


export default function AppRouter() {
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
                    </Route>

                </Route>

                {/* Workshop Owner routes (protected) */}
                <Route element={<ProtectedRoute allowedRoles={["WorkshopOwner"]} />}>
                    <Route element={<MainLayout />}>
                        <Route path="/WorkshopOwner/Dashboard" element={<WorkshopOwnerDashboard />} />
                    </Route>
                </Route>

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

// src/router/AppRouter.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";

// Context & Protected Route
import ProtectedRoute from "./ProtectedRoute";

// Pages
import LoginPage from "../pages/LoginPage";
import RegisterSelection from "../pages/RegisterSelection";
import RegisterVehicleOwner from "../pages/RegisterVehicleOwner";
import RegisterWorkshopOwner from "../pages/RegisterWorkshopOwner";
import OwnerDashboard from "../pages/OwnerDashboard";
import WorkshopDashboard from "../pages/WorkshopDashboard";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public routes (no layout) */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterSelection />} />
                <Route path="/registerVehicleOwner" element={<RegisterVehicleOwner />} />
                <Route path="/registerWorkshopOwner" element={<RegisterWorkshopOwner />} />

                {/* Protected routes (requires login) */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<MainLayout />}>
                        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
                        <Route path="/workshop/dashboard" element={<WorkshopDashboard />} />
                    </Route>
                </Route>

                {/* Catch-all: redirect unknown routes */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

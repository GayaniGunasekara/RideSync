// src/router/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ allowedRoles }) {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        // not logged in → back to login
        return <Navigate to="/" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // logged in but wrong role → block access
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    return <Outlet />;
}

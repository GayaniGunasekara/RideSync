// src/router/ProtectedRoute.jsx

// Importing necessary components from react-router-dom:
// - Navigate: Used to redirect users to a specific route (e.g., login page).
// - Outlet: Acts as a placeholder to render child routes inside protected routes.
import { Navigate, Outlet } from "react-router-dom";

// Importing the custom authentication context hook.
// useAuth() provides access to authentication state (e.g., current logged-in user).
import { useAuth } from "../context/AuthContext";

// ProtectedRoute is a wrapper component that checks if a user is authenticated.
// If the user is logged in -> allow access to the requested route.
// If not logged in -> redirect them to the "/" route (likely login or landing page).
export default function ProtectedRoute() {
    // Extract the "user" object from the AuthContext.
    // If a user is logged in, "user" will contain their info (e.g., id, email).
    // If not logged in, "user" will be null or undefined.
    const { user } = useAuth();

    // Conditional rendering:
    // - If "user" exists (authenticated), render the <Outlet /> component.
    //   <Outlet /> tells React Router to render the child route inside this protected route.
    // - If "user" does NOT exist (not authenticated), redirect to "/" using <Navigate />.
    //   The "replace" prop prevents the user from going back to the protected page
    //   using the browser's Back button after being redirected.
    return user ? <Outlet /> : <Navigate to="/" replace />;
}


// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Importing all pages
import SplashScreen from "./pages/SplashScreen";
import LoginPage from "./pages/LoginPage";
import RegisterSelection from "./pages/RegisterSelection";
import RegisterVehicleOwner from "./pages/RegisterVehicleOwner";
import RegisterWorkshopOwner from "./pages/RegisterWorkshopOwner";

function App() {
  // State to control splash screen visibility
  const [loading, setLoading] = useState(true);

  // useEffect → run once when App loads
  useEffect(() => {
    // Show splash screen for 5 seconds
    const timer = setTimeout(() => setLoading(false), 5000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  // If still loading, show splash screen
  if (loading) {
    return <SplashScreen />;
  }

  // Once splash is done → render routes
  return (
    <Router>
      <Routes>
        {/* Default route → Login Page */}
        <Route path="/" element={<LoginPage />} />

        {/* Register flow */}
        <Route path="/register" element={<RegisterSelection />} />
        <Route path="/registerVehicleOwner" element={<RegisterVehicleOwner />} />
        <Route path="/registerWorkshopOwner" element={<RegisterWorkshopOwner />} />

        {/* Catch-all: Redirect any unknown routes to Login Page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

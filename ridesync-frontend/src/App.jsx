// src/App.jsx
import { useState, useEffect } from "react";

// Context provider
import { AuthProvider } from "./context/AuthContext";

// Splash screen
import SplashScreen from "./pages/SplashScreen";

// Router (all routes are defined here)
import AppRouter from "./router/AppRouter";

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

  // Once splash is done → provide auth + load app routes
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;

// src/App.jsx
import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import SplashScreen from "./pages/SplashScreen";
import AppRouter from "./router/AppRouter";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash for 4 seconds (adjust as needed)
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;

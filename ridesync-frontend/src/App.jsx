// App.jsx

import { useState, useEffect } from "react";
import SplashScreen from "./pages/SplashScreen";
import Home from "./pages/LoginPage";
import RegisterSelection from "./pages/RegisterSelection";

function App() {
  // state: loading true = show splash screen
  const [loading, setLoading] = useState(true);

  // useEffect runs once on mount
  useEffect(() => {
    // after 5 seconds, switch to Home
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  // conditional rendering
  return loading ? <SplashScreen /> : <Home />;
}

export default App;

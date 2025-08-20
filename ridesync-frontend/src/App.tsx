import { useState, useEffect } from "react";
import SplashScreen from "./pages/SplashScreen";
import Home from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <SplashScreen /> : <Home />;
}

export default App;

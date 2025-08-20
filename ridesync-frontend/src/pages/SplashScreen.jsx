// Import animation components from Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// Import React hooks
import { useEffect, useState } from "react";

// ✅ Import images (gears + final logo)
import gear1 from "../assets/1.svg";
import gear2 from "../assets/2.svg";
import gear3 from "../assets/3.svg";
import gearCircuit from "../assets/4.svg";
import rideSyncLogo from "../assets/ridesync-logo.svg";

// Export SplashScreen component
export default function SplashScreen() {
    // React state to track which stage (0–4) is active
    const [stage, setStage] = useState(0);

    // useEffect → run once on component mount
    useEffect(() => {
        // Array of timers that update stage after certain delays
        const timers = [
            setTimeout(() => setStage(1), 800),
            setTimeout(() => setStage(2), 1600),
            setTimeout(() => setStage(3), 2400),
            setTimeout(() => setStage(4), 3400),
        ];

        // Cleanup → clear all timers when component unmounts
        return () => timers.forEach(clearTimeout);
    }, []);

    // Array containing all gear images
    const frames = [gear1, gear2, gear3, gearCircuit];

    // Render UI
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-[#F4FDFF]">

            <AnimatePresence mode="wait">

                {/* Show gears for stage 0–3 */}
                {stage <= 3 && (
                    <motion.img
                        key={stage}
                        src={frames[stage]}
                        alt="RideSync gear"
                        className="object-contain"
                        style={{ width: "60px", height: "60px" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                )}

                {/* Show final RideSync logo for stage 4 */}
                {stage === 4 && (
                    <motion.img
                        key="ridesync-logo"
                        src={rideSyncLogo}
                        alt="RideSync"
                        className="object-contain"
                        style={{ width: "80px", height: "80px" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

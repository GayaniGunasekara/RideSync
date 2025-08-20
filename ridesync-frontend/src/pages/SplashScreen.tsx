// Import animation components from Framer Motion
// motion → lets us animate HTML/React elements
// AnimatePresence → enables enter/exit animations when components mount/unmount
import { motion, AnimatePresence } from "framer-motion";

// Import React hooks
// useState → to track which "stage" (image) is currently shown
// useEffect → to run timers that change the stage automatically
import { useEffect, useState } from "react";

// ✅ Import images (gears + final logo)
// These are local SVG files used in the splash screen animation
import gear1 from "../assets/1.svg";
import gear2 from "../assets/2.svg";
import gear3 from "../assets/3.svg";
import gearCircuit from "../assets/4.svg";
import rideSyncLogo from "../assets/ridesync-logo.svg";

// Export SplashScreen component (so it can be used in App.js or other components)
export default function SplashScreen() {
    // React state to track which stage (0–4) is active
    // stage 0–3 → gears, stage 4 → final logo
    const [stage, setStage] = useState(0);

    // useEffect → run once on component mount
    // Purpose: set up timers to change images step by step
    useEffect(() => {
        // Array of timers that update stage after certain delays
        const timers = [
            setTimeout(() => setStage(1), 800),   // after 0.8s → show gear2
            setTimeout(() => setStage(2), 1600),  // after 1.6s → show gear3
            setTimeout(() => setStage(3), 2400),  // after 2.4s → show circuit gear
            setTimeout(() => setStage(4), 3400),  // after 3.4s → show final logo
        ];

        // Cleanup → clear all timers when component unmounts
        // This prevents memory leaks if the user leaves the page early
        return () => timers.forEach(clearTimeout);
    }, []); // [] → run only once when component loads

    // Array containing all gear images (for easier access by stage index)
    const frames = [gear1, gear2, gear3, gearCircuit];

    // Render UI
    return (
        // Main container
        // flex → enables flexbox layout
        // items-center + justify-center → center content vertically & horizontally
        // h-screen + w-screen → take full height & width of viewport
        // bg-[#F4FDFF] → set light-blue background color
        <div className="flex items-center justify-center h-screen w-screen bg-[#F4FDFF]">

            {/* AnimatePresence → enables animations when elements enter/exit */}
            <AnimatePresence mode="wait">

                {/* If stage is 0–3, show gears */}
                {stage <= 3 && (
                    <motion.img
                        key={stage}   // key changes → triggers re-render + animation
                        src={frames[stage]} // choose correct gear image
                        alt="RideSync gear" // accessibility description
                        className="object-contain" // keeps aspect ratio inside box
                        style={{ width: "60px", height: "60px" }} // force small size

                        // Animation props:
                        initial={{ opacity: 0 }}          // start fully transparent
                        animate={{ opacity: 1 }}          // fade in
                        exit={{ opacity: 0 }}             // fade out before next gear
                        transition={{ duration: 0.5, ease: "easeInOut" }} // smooth 0.5s transition
                    />
                )}

                {/* If stage = 4, show final RideSync logo */}
                {stage === 4 && (
                    <motion.img
                        key="ridesync-logo"  // unique key for logo
                        src={rideSyncLogo}  // logo file
                        alt="RideSync"      // accessibility text
                        className="object-contain"
                        style={{ width: "80px", height: "80px" }} // slightly larger than gears

                        // Logo animation:
                        initial={{ opacity: 0, scale: 0.8 }} // start small & invisible
                        animate={{ opacity: 1, scale: 1 }}   // fade in & grow to normal size
                        transition={{ duration: 0.8, ease: "easeOut" }} // slower smooth transition
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

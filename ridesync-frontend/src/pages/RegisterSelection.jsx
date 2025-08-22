// RegisterSelection.jsx
import { useNavigate } from "react-router-dom";
import Card from "../components/Card-Login-Reg"; // ✅ Import reusable card
import "../index.css";

export default function RegisterSelection() {
    // ✅ React Router's navigation hook
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            {/* ✅ Wrap content inside your reusable Card component */}
            <Card>
                {/* Page Title */}
                <h1 className="text-white text-xl mb-6">Register</h1>

                {/* Subtitle */}
                <p className="text-white mb-6">You Are,</p>

                {/* ✅ Workshop Owner Button */}
                <button
                    // Use the route path defined in App.jsx, not the file path
                    onClick={() => navigate("/registerWorkshopOwner")}
                    className="bg-white text-[#088395] font-semibold py-3 px-6 rounded-xl mb-4 hover:opacity-90"
                >
                    Motor Service & Repair Center Owner
                </button>

                {/* ✅ Vehicle Owner Button */}
                <button
                    // Again use the route path from App.jsx
                    onClick={() => navigate("/registerVehicleOwner")}
                    className="bg-white text-[#088395] font-semibold py-3 px-6 rounded-xl hover:opacity-90"
                >
                    Vehicle Owner
                </button>
            </Card>
        </div>
    );
}

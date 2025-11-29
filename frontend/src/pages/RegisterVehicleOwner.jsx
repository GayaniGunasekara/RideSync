import { useNavigate } from "react-router-dom";
import Card from "../components/Card-Login-Reg";

export default function RegisterVehicleOwner() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Vehicle Owner registered!");
        // TODO: send data to backend/Firebase
        navigate("/"); // after registering, go back to login page
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Card>
                <h1 className="text-white text-xl mb-6">Register</h1>
                <form onSubmit={handleRegister} className="flex flex-col w-full">
                    <input type="text" placeholder="NIC No" className="p-3 rounded-xl mb-3" />
                    <input type="text" placeholder="Full Name" className="p-3 rounded-xl mb-3" />
                    <input type="text" placeholder="Vehicle Registration No 1" className="p-3 rounded-xl mb-3" />
                    <input type="text" placeholder="Vehicle Registration No 2" className="p-3 rounded-xl mb-3" />
                    <input type="text" placeholder="Mobile Phone Number" className="p-3 rounded-xl mb-3" />

                    <button type="submit" className="bg-white text-[#088395] font-bold py-2 px-6 rounded-xl mt-4">
                        Register
                    </button>
                </form>
            </Card>
        </div>
    );
}
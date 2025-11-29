import { useNavigate } from "react-router-dom";
import Card from "../components/Card-Login-Reg";

export default function RegisterWorkshopOwner() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Workshop Owner registered!");
        // TODO: send data to backend/Firebase
        navigate("/"); // after registering, go back to login page
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Card>
                <h1 className="text-white text-xl font-bold mb-10 mt-10">Register Your Workshop Here...</h1>
                <form onSubmit={handleRegister} className="flex flex-col items-center w=[350px]">
                    <input type="text" placeholder="Business Registration No" className="p-3 rounded-full outline-none w-full mb-4" />
                    <input type="text" placeholder="Business Name" className="p-3 rounded-full outline-none w-full mb-4" />
                    <input type="text" placeholder="Location" className="p-3 rounded-full outline-none w-full mb-4" />
                    <input type="text" placeholder="Providing Services" className="p-3 rounded-full outline-none w-full mb-4" />
                    <input type="text" placeholder="Dealerships" className="p-3 rounded-full outline-none w-full mb-4" />

                    <button type="submit" className="bg-white text-[#088395] font-bold py-2 px-6 rounded-full mt-2 w-[100px]">
                        Register
                    </button>
                </form>
            </Card>
        </div>
    );
}
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen grid grid-rows-[auto,1fr]">
            <header className="border-b">
                <nav className="max-w-5xl mx-auto flex gap-5 p-4">
                    <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold" : ""}>Home</NavLink>
                    <NavLink to="/owner" className={({ isActive }) => isActive ? "font-semibold" : ""}>Owner</NavLink>
                    <NavLink to="/workshop" className={({ isActive }) => isActive ? "font-semibold" : ""}>Workshop</NavLink>
                    <NavLink to="/bookings" className={({ isActive }) => isActive ? "font-semibold" : ""}>Bookings</NavLink>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? "font-semibold" : ""}>Profile</NavLink>
                </nav>
            </header>

            <main className="max-w-5xl mx-auto p-6">
                <Outlet />
            </main>
        </div>
    );
}

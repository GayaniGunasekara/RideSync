import { type ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#F4FDFF]">
            {/* Navbar */}
            <header className="p-4 shadow-md">My Navbar</header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center">
                {children}
            </main>

            {/* Footer */}
            <footer className="p-4 text-center text-sm text-gray-500">
                © 2025 RideSync
            </footer>
        </div>
    );
}

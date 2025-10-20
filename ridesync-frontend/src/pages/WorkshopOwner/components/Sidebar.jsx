import { Link, useLocation } from 'react-router-dom';
import { Home, Wrench, Package, Users, BarChart3, Settings } from 'lucide-react';

export function Sidebar({ activeItem }) {
    const location = useLocation();

    const menuItems = [
        { path: '/WorkshopOwner/Dashboard', label: 'Dashboard', icon: Home },
        { path: '/WorkshopOwner/ServiceRequests', label: 'Service Requests', icon: Wrench },
        { path: '/WorkshopOwner/Inventory', label: 'Inventory', icon: Package },
        { path: '/WorkshopOwner/Customers', label: 'Customers', icon: Users },
        { path: '/WorkshopOwner/Analytics', label: 'Analytics', icon: BarChart3 },
        { path: '/WorkshopOwner/Settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto z-40">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">RS</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">RideSync</h2>
                </div>

                <nav className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-500'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Icon size={20} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
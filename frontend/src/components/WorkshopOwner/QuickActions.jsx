import { Plus, Wrench, Package, Users, Calendar, FileText, Settings, BarChart3 } from 'lucide-react';

export function QuickActions() {
    const actions = [
        { icon: Plus, label: 'Add New Service', color: 'bg-[#026574]', href: '/WorkshopOwner/ServiceRequests' },
        { icon: Wrench, label: 'Manage Services', color: 'bg-[#038fa4]', href: '/WorkshopOwner/ServiceRequests' },
        { icon: Package, label: 'Update Inventory', color: 'bg-[#026574]', href: '/WorkshopOwner/Inventory' },
        { icon: Users, label: 'Add Customer', color: 'bg-[#038fa4]', href: '/WorkshopOwner/Customers' },
        { icon: Calendar, label: 'Schedule Service', color: 'bg-[#026574]', href: '/WorkshopOwner/ServiceRequests' },
        { icon: FileText, label: 'Generate Report', color: 'bg-[#038fa4]', href: '/WorkshopOwner/Analytics' },
        { icon: BarChart3, label: 'View Analytics', color: 'bg-[#026574]', href: '/WorkshopOwner/Analytics' },
        { icon: Settings, label: 'Workshop Settings', color: 'bg-[#038fa4]', href: '/WorkshopOwner/Settings' },
    ];

    return (
        <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-[#024b56] mb-10 ">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                        <a
                            key={index}
                            href={action.href}
                            className={`${action.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity block text-center`}
                        >
                            <Icon size={24} className="mx-auto mb-2" />
                            <p className="text-sm font-medium">{action.label}</p>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
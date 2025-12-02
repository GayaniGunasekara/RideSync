import { StatCard } from '../../components/WorkshopOwner/StatCard';
import { ServiceCard } from '../../components/WorkshopOwner/ServiceCard';
import { QuickActions } from '../../components/WorkshopOwner/QuickActions';


import { Truck, Wrench, Users, Package, TrendingUp, Calendar, AlertCircle } from 'lucide-react';

export default function WorkshopOwnerDashboard() {
    const stats = [
        { icon: Truck, title: 'Total Active Vehicles', value: '24', color: '#1e40af', trend: 12 },
        { icon: Wrench, title: 'Active Services', value: '35', color: '#1e40af', trend: 8 },
        { icon: Users, title: 'Total Active Customers', value: '20', color: '#1e40af', trend: 15 },
        { icon: Package, title: 'Spare Parts Shortage', value: '10', color: '#dc2626', trend: -5 },
    ];

    const recentServices = [
        {
            vehicleModel: 'Honda Civic',
            plateNumber: 'ABC123',
            customerName: 'John Doe',
            serviceType: 'Oil Change',
            amount: 'Rs. 10,000',
            date: '2025-01-27',
            status: 'Completed',
            priority: 'Medium'
        },
        {
            vehicleModel: 'Toyota Camry',
            plateNumber: 'XYZ789',
            customerName: 'Jane Smith',
            serviceType: 'Brake Inspection',
            amount: 'Rs. 15,000',
            date: '2025-01-28',
            status: 'In Progress',
            priority: 'High'
        },
        {
            vehicleModel: 'Nissan Altima',
            plateNumber: 'DEF456',
            customerName: 'Mike Johnson',
            serviceType: 'Engine Diagnostic',
            amount: 'Rs. 12,000',
            date: '2025-01-29',
            status: 'Scheduled',
            priority: 'Low'
        },
        {
            vehicleModel: 'Honda Civic',
            plateNumber: 'ABC123',
            customerName: 'John Doe',
            serviceType: 'Tire Rotation',
            amount: 'Rs. 8,000',
            date: '2025-01-30',
            status: 'Pending',
            priority: 'Medium'
        }
    ];

    const upcomingAppointments = [
        {
            time: '9:00 AM',
            customer: 'Sarah Wilson',
            vehicle: 'BMW 3 Series - GHI789',
            service: 'Full Service',
            duration: '2 hours'
        },
        {
            time: '11:30 AM',
            customer: 'David Brown',
            vehicle: 'Audi A4 - JKL012',
            service: 'Brake Service',
            duration: '1.5 hours'
        },
        {
            time: '2:00 PM',
            customer: 'Lisa Davis',
            vehicle: 'Mercedes C-Class - MNO345',
            service: 'Engine Check',
            duration: '1 hour'
        }
    ];

    return (
        <div className="w-full space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#024b56]">Dashboard</h1>
                    <p className=" text-[#026574]  mt-1">Welcome back! Here's your workshop overview.</p>
                </div>

            </div>

            {/* Stats Row — FLEX with wrapper margins */}
            <div className="flex flex-wrap justify-center p-6 gap-10" >
                {stats.map((stat, index) => (
                    <div key={index} className="m-54">
                        <StatCard
                            icon={stat.icon}
                            title={stat.title}
                            value={stat.value}
                            iconColor={stat.color}
                            trend={stat.trend}
                        />
                    </div>
                ))}
            </div>








            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Services */}
                <div className="lg:col-span-2 bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-[#024b56]">Recent Services</h3>
                        <button className="text-[#024b56] hover:text-[#038fa4] text-sm font-medium">
                            View All
                        </button>
                    </div>
                    <div className="space-y-4">
                        {recentServices.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-[#024b56] hover:text-[#038fa4] text-sm font-medium">
                            View All Services
                        </button>
                    </div>
                </div>

                {/* Upcoming Appointments */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-[#024b56]">Today's Schedule</h3>
                        <button className="text-[#024b56] hover:text-[#038fa4] text-sm font-medium">
                            View Calendar
                        </button>
                    </div>
                    <div className="space-y-4">
                        {upcomingAppointments.map((appointment, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-medium font-bold text-[#026574]">{appointment.time}</span>
                                    <span className="text-medium font-semibold text-[#026574]">{appointment.duration}</span>
                                </div>
                                <h4 className="text-sm text-[#026574] ">{appointment.customer}</h4>
                                <p className="text-medium text-[#026574] ">{appointment.vehicle}</p>
                                <p className="text-medium font-semibold text-[#026574]">{appointment.service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <QuickActions />

            {/* Alerts & Notifications */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-[#024b56] mb-10 ">Alerts & Notifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#b5ebf4]   border border-red-200 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                            <AlertCircle className="text-red-600" size={20} />
                            <h4 className="text-medium font-bold text-[#026574]">Urgent</h4>
                        </div>
                        <p className="text-sm text-red-700">3 vehicles need immediate attention</p>
                    </div>
                    <div className="p-4 bg-[#b5ebf4]  border border-yellow-200 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                            <Package className="text-yellow-600" size={20} />
                            <h4 className="text-medium font-bold text-[#026574]">Inventory</h4>
                        </div>
                        <p className="text-sm text-yellow-700">10 spare parts running low</p>
                    </div>
                    <div className="p-4 bg-[#b5ebf4]  border border-blue-200 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                            <Calendar className="text-blue-600" size={20} />
                            <h4 className="text-medium font-bold text-[#026574]">Schedule</h4>
                        </div>
                        <p className="text-sm text-blue-700">5 appointments tomorrow</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
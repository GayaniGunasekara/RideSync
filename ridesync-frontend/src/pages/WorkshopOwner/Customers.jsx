import { Users, Phone, Mail, Car, Calendar, Star, Plus, Search, Filter, Eye, MessageCircle } from 'lucide-react';

export default function Customers() {
    const customers = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@email.com",
            phone: "+94 77 123 4567",
            joinDate: "2024-01-15",
            totalServices: 8,
            lastService: "2025-01-15",
            rating: 4.8,
            vehicles: [
                { model: "Honda Civic", plate: "ABC123", year: "2020" },
                { model: "Toyota Corolla", plate: "XYZ789", year: "2019" }
            ],
            totalSpent: "Rs. 85,000",
            status: "Active",
            preferredService: "Oil Change",
            nextAppointment: "2025-02-15"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@email.com",
            phone: "+94 77 234 5678",
            joinDate: "2024-03-20",
            totalServices: 5,
            lastService: "2025-01-10",
            rating: 4.5,
            vehicles: [
                { model: "Nissan Altima", plate: "DEF456", year: "2021" }
            ],
            totalSpent: "Rs. 45,000",
            status: "Active",
            preferredService: "Brake Service",
            nextAppointment: null
        },
        {
            id: 3,
            name: "Mike Johnson",
            email: "mike.johnson@email.com",
            phone: "+94 77 345 6789",
            joinDate: "2024-06-10",
            totalServices: 2,
            lastService: "2024-12-20",
            rating: 4.2,
            vehicles: [
                { model: "BMW 3 Series", plate: "GHI789", year: "2022" }
            ],
            totalSpent: "Rs. 25,000",
            status: "Inactive",
            preferredService: "Full Service",
            nextAppointment: null
        },
        {
            id: 4,
            name: "Sarah Wilson",
            email: "sarah.wilson@email.com",
            phone: "+94 77 456 7890",
            joinDate: "2024-08-05",
            totalServices: 12,
            lastService: "2025-01-20",
            rating: 4.9,
            vehicles: [
                { model: "Audi A4", plate: "JKL012", year: "2021" },
                { model: "Mercedes C-Class", plate: "MNO345", year: "2020" }
            ],
            totalSpent: "Rs. 120,000",
            status: "VIP",
            preferredService: "Luxury Service",
            nextAppointment: "2025-02-20"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Inactive': return 'bg-gray-100 text-gray-800';
            case 'VIP': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Active': return '🟢';
            case 'Inactive': return '⚪';
            case 'VIP': return '⭐';
            default: return '⚪';
        }
    };

    const activeCustomers = customers.filter(c => c.status === 'Active').length;
    const vipCustomers = customers.filter(c => c.status === 'VIP').length;
    const totalRevenue = customers.reduce((sum, c) => sum + parseInt(c.totalSpent.replace(/[^\d]/g, '')), 0);
    const averageRating = (customers.reduce((sum, c) => sum + c.rating, 0) / customers.length).toFixed(1);

    return (
        <div className="w-full space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Customer Management</h1>
                    <p className="text-gray-600 mt-1">Manage your customer relationships and service history.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                        <Plus size={16} />
                        Add Customer
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by customer name, email, or phone..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Customers</p>
                            <p className="text-2xl font-bold text-gray-900">{customers.length}</p>
                        </div>
                        <Users className="text-blue-500" size={24} />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Active Customers</p>
                            <p className="text-2xl font-bold text-green-600">{activeCustomers}</p>
                        </div>
                        <Users className="text-green-500" size={24} />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">VIP Customers</p>
                            <p className="text-2xl font-bold text-purple-600">{vipCustomers}</p>
                        </div>
                        <Star className="text-purple-500" size={24} />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Revenue</p>
                            <p className="text-2xl font-bold text-green-600">
                                Rs. {totalRevenue.toLocaleString()}
                            </p>
                        </div>
                        <Car className="text-green-500" size={24} />
                    </div>
                </div>
            </div>

            {/* Customer Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {customers.map((customer) => (
                    <div key={customer.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                    <Users className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">{customer.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            <Star className="text-yellow-500" size={16} fill="currentColor" />
                                            <span className="text-sm text-gray-600">{customer.rating}</span>
                                        </div>
                                        <span className="text-gray-400">•</span>
                                        <span className={`text-sm px-2 py-1 rounded-full ${getStatusColor(customer.status)}`}>
                                            {getStatusIcon(customer.status)} {customer.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <Eye size={16} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                                    <MessageCircle size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail size={16} />
                                <span>{customer.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone size={16} />
                                <span>{customer.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar size={16} />
                                <span>Joined: {customer.joinDate}</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Vehicles:</h4>
                            <div className="space-y-1">
                                {customer.vehicles.map((vehicle, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm">
                                        <Car size={16} className="text-gray-400" />
                                        <span>{vehicle.model} - {vehicle.plate} ({vehicle.year})</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600">Services</p>
                                <p className="font-semibold text-lg">{customer.totalServices}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Spent</p>
                                <p className="font-semibold text-lg">{customer.totalSpent}</p>
                            </div>
                        </div>

                        {customer.nextAppointment && (
                            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-800">
                                    <strong>Next Appointment:</strong> {customer.nextAppointment}
                                </p>
                            </div>
                        )}

                        <div className="flex gap-2">
                            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-1">
                                <Eye size={16} />
                                View Details
                            </button>
                            <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1">
                                <MessageCircle size={16} />
                                Contact
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center">
                <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    Load More Customers
                </button>
            </div>
        </div>
    );
}
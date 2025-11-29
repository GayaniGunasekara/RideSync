import { Plus, Car, Calendar, Wrench, AlertCircle, CheckCircle, Edit, Trash2, Eye } from 'lucide-react';

export default function Vehicles() {
    const vehicles = [
        {
            id: 1,
            name: "Honda Civic",
            number: "ABC123",
            model: "2020",
            year: "2020",
            color: "White",
            nextService: "2025-02-15",
            lastService: "2025-01-15",
            status: "Active",
            mileage: "45,000 km",
            fuelType: "Petrol",
            transmission: "Automatic",
            serviceHistory: [
                { date: "2025-01-15", service: "Oil Change", cost: "Rs. 8,000", center: "AutoCare Center" },
                { date: "2024-12-10", service: "Brake Check", cost: "Rs. 12,000", center: "QuickFix Garage" }
            ]
        },
        {
            id: 2,
            name: "Toyota Corolla",
            number: "XYZ789",
            model: "2019",
            year: "2019",
            color: "Silver",
            nextService: "2025-03-10",
            lastService: "2024-12-10",
            status: "Maintenance Due",
            mileage: "52,000 km",
            fuelType: "Petrol",
            transmission: "Manual",
            serviceHistory: [
                { date: "2024-12-10", service: "Battery Check", cost: "Rs. 15,000", center: "Premium Auto Service" },
                { date: "2024-10-05", service: "Tire Rotation", cost: "Rs. 5,000", center: "AutoCare Center" }
            ]
        },
        {
            id: 3,
            name: "Nissan Altima",
            number: "DEF456",
            model: "2021",
            year: "2021",
            color: "Black",
            nextService: "2025-04-20",
            lastService: "2025-01-10",
            status: "Active",
            mileage: "38,000 km",
            fuelType: "Petrol",
            transmission: "CVT",
            serviceHistory: [
                { date: "2025-01-10", service: "Full Service", cost: "Rs. 25,000", center: "Premium Auto Service" }
            ]
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Active': return <CheckCircle className="text-green-500" size={20} />;
            case 'Maintenance Due': return <AlertCircle className="text-yellow-500" size={20} />;
            default: return <Car className="text-gray-500" size={20} />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Maintenance Due': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="w-full space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Vehicles</h1>
                    <p className="text-gray-600 mt-1">Manage your vehicle fleet and service history.</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors">
                    <Plus size={20} />
                    Add Vehicle
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Car className="text-blue-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Vehicles</p>
                            <p className="text-xl font-bold text-gray-900">{vehicles.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <CheckCircle className="text-green-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Active</p>
                            <p className="text-xl font-bold text-gray-900">{vehicles.filter(v => v.status === 'Active').length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                            <AlertCircle className="text-yellow-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Maintenance Due</p>
                            <p className="text-xl font-bold text-gray-900">{vehicles.filter(v => v.status === 'Maintenance Due').length}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vehicles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <Car className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">{vehicle.name}</h3>
                                    <p className="text-gray-600">{vehicle.number} • {vehicle.year}</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <Edit size={16} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3 mb-4">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <p className="text-gray-500">Color</p>
                                    <p className="font-medium">{vehicle.color}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Transmission</p>
                                    <p className="font-medium">{vehicle.transmission}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Fuel Type</p>
                                    <p className="font-medium">{vehicle.fuelType}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Mileage</p>
                                    <p className="font-medium">{vehicle.mileage}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                                <Calendar size={16} className="text-gray-400" />
                                <span className="text-sm text-gray-600">Next Service: {vehicle.nextService}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Wrench size={16} className="text-gray-400" />
                                <span className="text-sm text-gray-600">Last Service: {vehicle.lastService}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {getStatusIcon(vehicle.status)}
                                <span className={`text-sm px-2 py-1 rounded-full ${getStatusColor(vehicle.status)}`}>
                                    {vehicle.status}
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm hover:bg-blue-200 transition-colors flex items-center justify-center gap-1">
                                <Calendar size={14} />
                                Schedule
                            </button>
                            <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-1">
                                <Eye size={14} />
                                History
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Service History */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Service History</h2>
                <div className="space-y-4">
                    {vehicles.flatMap(vehicle =>
                        vehicle.serviceHistory.slice(0, 2).map((service, index) => (
                            <div key={`${vehicle.id}-${index}`} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Wrench className="text-blue-600" size={16} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">{vehicle.name} - {vehicle.number}</h4>
                                        <p className="text-sm text-gray-600">{service.service} • {service.center}</p>
                                        <p className="text-xs text-gray-500">{service.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-gray-900">{service.cost}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="mt-4 text-center">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View All Service History
                    </button>
                </div>
            </div>
        </div>
    );
}
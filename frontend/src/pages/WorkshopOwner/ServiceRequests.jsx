import { Clock, CheckCircle, AlertCircle, Eye, Check, X, Filter, Search, Calendar, User, Car } from 'lucide-react';

export default function ServiceRequests() {
    const requests = [
        {
            id: 1,
            customerName: "John Doe",
            customerPhone: "+94 77 123 4567",
            vehicleModel: "Honda Civic",
            plateNumber: "ABC123",
            serviceType: "Oil Change",
            requestedDate: "2025-01-30",
            preferredTime: "10:00 AM",
            status: "Pending",
            priority: "High",
            description: "Regular oil change service needed",
            estimatedCost: "Rs. 8,000",
            estimatedDuration: "1 hour"
        },
        {
            id: 2,
            customerName: "Jane Smith",
            customerPhone: "+94 77 234 5678",
            vehicleModel: "Toyota Camry",
            plateNumber: "XYZ789",
            serviceType: "Brake Inspection",
            requestedDate: "2025-01-29",
            preferredTime: "2:00 PM",
            status: "In Progress",
            priority: "Medium",
            description: "Brake pads need replacement",
            estimatedCost: "Rs. 15,000",
            estimatedDuration: "2 hours"
        },
        {
            id: 3,
            customerName: "Mike Johnson",
            customerPhone: "+94 77 345 6789",
            vehicleModel: "Nissan Altima",
            plateNumber: "DEF456",
            serviceType: "Engine Diagnostic",
            requestedDate: "2025-01-28",
            preferredTime: "9:00 AM",
            status: "Completed",
            priority: "Low",
            description: "Engine check light is on",
            estimatedCost: "Rs. 12,000",
            estimatedDuration: "1.5 hours"
        },
        {
            id: 4,
            customerName: "Sarah Wilson",
            customerPhone: "+94 77 456 7890",
            vehicleModel: "BMW 3 Series",
            plateNumber: "GHI789",
            serviceType: "Full Service",
            requestedDate: "2025-01-31",
            preferredTime: "11:00 AM",
            status: "Pending",
            priority: "High",
            description: "Complete vehicle service and inspection",
            estimatedCost: "Rs. 25,000",
            estimatedDuration: "3 hours"
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Pending': return <Clock className="text-yellow-500" size={20} />;
            case 'In Progress': return <AlertCircle className="text-blue-500" size={20} />;
            case 'Completed': return <CheckCircle className="text-green-500" size={20} />;
            default: return <Clock className="text-gray-500" size={20} />;
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High': return 'bg-red-100 text-red-800 border-red-200';
            case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Low': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const pendingCount = requests.filter(r => r.status === 'Pending').length;
    const inProgressCount = requests.filter(r => r.status === 'In Progress').length;
    const completedCount = requests.filter(r => r.status === 'Completed').length;

    return (
        <div className="w-full space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Service Requests</h1>
                    <p className="text-gray-600 mt-1">Manage and track all service requests from customers.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                        <Calendar size={16} />
                        Schedule
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Clock className="text-blue-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Requests</p>
                            <p className="text-xl font-bold text-gray-900">{requests.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                            <AlertCircle className="text-yellow-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Pending</p>
                            <p className="text-xl font-bold text-gray-900">{pendingCount}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Clock className="text-blue-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">In Progress</p>
                            <p className="text-xl font-bold text-gray-900">{inProgressCount}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <CheckCircle className="text-green-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Completed</p>
                            <p className="text-xl font-bold text-gray-900">{completedCount}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by customer name, vehicle, or service type..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Service Requests Table */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {requests.map((request) => (
                                <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                <User size={16} className="text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{request.customerName}</div>
                                                <div className="text-sm text-gray-500">{request.customerPhone}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <Car size={16} className="text-gray-400" />
                                            <div>
                                                <div className="text-sm text-gray-900">{request.vehicleModel}</div>
                                                <div className="text-sm text-gray-500">{request.plateNumber}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <div className="text-sm text-gray-900">{request.serviceType}</div>
                                            <div className="text-sm text-gray-500">{request.estimatedCost}</div>
                                            <div className="text-xs text-gray-400">{request.estimatedDuration}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <div className="text-sm text-gray-900">{request.requestedDate}</div>
                                            <div className="text-sm text-gray-500">{request.preferredTime}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                                            {request.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            {getStatusIcon(request.status)}
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                                                {request.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex gap-2">
                                            {request.status === 'Pending' && (
                                                <>
                                                    <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors flex items-center gap-1">
                                                        <Check size={14} />
                                                        Accept
                                                    </button>
                                                    <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors flex items-center gap-1">
                                                        <X size={14} />
                                                        Reject
                                                    </button>
                                                </>
                                            )}
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors flex items-center gap-1">
                                                <Eye size={14} />
                                                View
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Load More */}
            <div className="text-center">
                <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    Load More Requests
                </button>
            </div>
        </div>
    );
}
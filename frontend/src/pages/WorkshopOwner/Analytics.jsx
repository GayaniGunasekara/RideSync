import { BarChart3, TrendingUp, DollarSign, Users, Car, Calendar, Download, Filter } from 'lucide-react';

export default function Analytics() {
    const analytics = {
        revenue: {
            current: 125000,
            previous: 98000,
            growth: 27.6
        },
        services: {
            current: 45,
            previous: 38,
            growth: 18.4
        },
        customers: {
            current: 28,
            previous: 24,
            growth: 16.7
        },
        averageRating: 4.6
    };

    const monthlyData = [
        { month: 'Jan', revenue: 85000, services: 32, customers: 18 },
        { month: 'Feb', revenue: 92000, services: 38, customers: 22 },
        { month: 'Mar', revenue: 105000, services: 42, customers: 25 },
        { month: 'Apr', revenue: 98000, services: 38, customers: 23 },
        { month: 'May', revenue: 112000, services: 45, customers: 26 },
        { month: 'Jun', revenue: 125000, services: 48, customers: 28 }
    ];

    const topServices = [
        { name: 'Oil Change', count: 15, revenue: 120000, percentage: 25 },
        { name: 'Brake Service', count: 12, revenue: 180000, percentage: 35 },
        { name: 'Engine Repair', count: 8, revenue: 200000, percentage: 40 },
        { name: 'Tire Service', count: 10, revenue: 80000, percentage: 20 }
    ];

    const customerSegments = [
        { segment: 'Regular Customers', count: 15, percentage: 54 },
        { segment: 'VIP Customers', count: 8, percentage: 29 },
        { segment: 'New Customers', count: 5, percentage: 18 }
    ];

    const getTrendIcon = (growth) => {
        return growth > 0 ? (
            <TrendingUp className="text-green-600" size={16} />
        ) : (
            <TrendingUp className="text-red-600" size={16} style={{ transform: 'rotate(180deg)' }} />
        );
    };

    return (
        <div className="w-full space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
                    <p className="text-gray-600 mt-1">Track your workshop performance and business insights.</p>
                </div>

                <div className="flex gap-2">
                    <button className="bg-gray-100 text-[#024b56] px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="bg-[#024b56] text-white px-4 py-2 rounded-lg hover:bg-[#038fa4]  transition-colors flex items-center gap-2">
                        <Download size={16} />
                        Export Report
                    </button>
                </div>

            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Revenue</p>
                            <p className="text-2xl font-bold text-gray-900">Rs. {analytics.revenue.current.toLocaleString()}</p>
                            <div className="flex items-center gap-1 mt-1">
                                {getTrendIcon(analytics.revenue.growth)}
                                <span className="text-sm text-green-600">
                                    +{analytics.revenue.growth}% from last month
                                </span>
                            </div>
                        </div>
                        <DollarSign className="text-green-500" size={24} />
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Services Completed</p>
                            <p className="text-2xl font-bold text-gray-900">{analytics.services.current}</p>
                            <div className="flex items-center gap-1 mt-1">
                                {getTrendIcon(analytics.services.growth)}
                                <span className="text-sm text-green-600">
                                    +{analytics.services.growth}% from last month
                                </span>
                            </div>
                        </div>
                        <Car className="text-blue-500" size={24} />
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Active Customers</p>
                            <p className="text-2xl font-bold text-gray-900">{analytics.customers.current}</p>
                            <div className="flex items-center gap-1 mt-1">
                                {getTrendIcon(analytics.customers.growth)}
                                <span className="text-sm text-green-600">
                                    +{analytics.customers.growth}% from last month
                                </span>
                            </div>
                        </div>
                        <Users className="text-purple-500" size={24} />
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Average Rating</p>
                            <p className="text-2xl font-bold text-gray-900">{analytics.averageRating}</p>
                            <p className="text-sm text-gray-600 mt-1">Based on customer feedback</p>
                        </div>
                        <BarChart3 className="text-yellow-500" size={24} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Chart */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Revenue</h3>
                    <div className="space-y-4">
                        {monthlyData.map((data, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <span className="text-sm text-gray-600 w-12">{data.month}</span>
                                <div className="flex-1 mx-4">
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                                            style={{ width: `${(data.revenue / 125000) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-gray-900 w-20 text-right">Rs. {data.revenue.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Chart */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Services</h3>
                    <div className="space-y-4">
                        {monthlyData.map((data, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <span className="text-sm text-gray-600 w-12">{data.month}</span>
                                <div className="flex-1 mx-4">
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                                            style={{ width: `${(data.services / 48) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-gray-900 w-12 text-right">{data.services}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Top Services Performance */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Services</h3>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {topServices.map((service, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{service.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{service.count}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Rs. {service.revenue.toLocaleString()}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                                                    style={{ width: `${service.percentage}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-gray-600">{service.percentage}%</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
}
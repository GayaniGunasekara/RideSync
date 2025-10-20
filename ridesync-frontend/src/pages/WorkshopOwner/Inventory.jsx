import { Package, Plus, AlertTriangle, CheckCircle, Edit, Trash2, Search, Filter, TrendingUp, TrendingDown } from 'lucide-react';

export default function Inventory() {
    const inventory = [
        {
            id: 1,
            name: "Engine Oil 5W-30",
            category: "Lubricants",
            quantity: 15,
            minQuantity: 10,
            unit: "Liters",
            price: "Rs. 2,500",
            supplier: "Shell Lanka",
            lastRestocked: "2025-01-15",
            status: "In Stock",
            sku: "OIL-5W30-001",
            location: "Shelf A1"
        },
        {
            id: 2,
            name: "Brake Pads - Front",
            category: "Brake Parts",
            quantity: 3,
            minQuantity: 5,
            unit: "Pairs",
            price: "Rs. 8,000",
            supplier: "Brembo",
            lastRestocked: "2025-01-10",
            status: "Low Stock",
            sku: "BRAKE-FR-002",
            location: "Shelf B2"
        },
        {
            id: 3,
            name: "Air Filter",
            category: "Filters",
            quantity: 0,
            minQuantity: 8,
            unit: "Pieces",
            price: "Rs. 1,500",
            supplier: "Mann Filter",
            lastRestocked: "2024-12-20",
            status: "Out of Stock",
            sku: "FILTER-AF-003",
            location: "Shelf C1"
        },
        {
            id: 4,
            name: "Spark Plugs",
            category: "Engine Parts",
            quantity: 25,
            minQuantity: 15,
            unit: "Pieces",
            price: "Rs. 800",
            supplier: "NGK",
            lastRestocked: "2025-01-20",
            status: "In Stock",
            sku: "SPARK-NGK-004",
            location: "Shelf A3"
        },
        {
            id: 5,
            name: "Transmission Fluid",
            category: "Lubricants",
            quantity: 8,
            minQuantity: 12,
            unit: "Liters",
            price: "Rs. 3,200",
            supplier: "Castrol",
            lastRestocked: "2025-01-18",
            status: "Low Stock",
            sku: "TRANS-CAS-005",
            location: "Shelf A2"
        },
        {
            id: 6,
            name: "Brake Fluid",
            category: "Brake Parts",
            quantity: 20,
            minQuantity: 10,
            unit: "Liters",
            price: "Rs. 1,800",
            supplier: "DOT 4",
            lastRestocked: "2025-01-22",
            status: "In Stock",
            sku: "BRAKE-DOT-006",
            location: "Shelf B1"
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'In Stock': return <CheckCircle className="text-green-500" size={20} />;
            case 'Low Stock': return <AlertTriangle className="text-yellow-500" size={20} />;
            case 'Out of Stock': return <AlertTriangle className="text-red-500" size={20} />;
            default: return <Package className="text-gray-500" size={20} />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'In Stock': return 'bg-green-100 text-green-800 border-green-200';
            case 'Low Stock': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Out of Stock': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const lowStockItems = inventory.filter(item => item.status === 'Low Stock' || item.status === 'Out of Stock').length;
    const totalValue = inventory.reduce((sum, item) => sum + (item.quantity * parseInt(item.price.replace(/[^\d]/g, ''))), 0);

    return (
        <div className="w-full space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Inventory Management</h1>
                    <p className="text-gray-600 mt-1">Track and manage your workshop inventory and spare parts.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                        <Plus size={16} />
                        Add Item
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by item name, SKU, or category..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Items</p>
                            <p className="text-2xl font-bold text-gray-900">{inventory.length}</p>
                        </div>
                        <Package className="text-blue-500" size={24} />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">In Stock</p>
                            <p className="text-2xl font-bold text-green-600">
                                {inventory.filter(item => item.status === 'In Stock').length}
                            </p>
                        </div>
                        <CheckCircle className="text-green-500" size={24} />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Low Stock</p>
                            <p className="text-2xl font-bold text-yellow-600">
                                {inventory.filter(item => item.status === 'Low Stock').length}
                            </p>
                        </div>
                        <AlertTriangle className="text-yellow-500" size={24} />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Out of Stock</p>
                            <p className="text-2xl font-bold text-red-600">
                                {inventory.filter(item => item.status === 'Out of Stock').length}
                            </p>
                        </div>
                        <AlertTriangle className="text-red-500" size={24} />
                    </div>
                </div>
            </div>

            {/* Alerts */}
            {lowStockItems > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="text-yellow-600" size={20} />
                        <div>
                            <h3 className="font-semibold text-yellow-800">Inventory Alert</h3>
                            <p className="text-sm text-yellow-700">
                                {lowStockItems} items need restocking. Please review and reorder soon.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Inventory Table */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {inventory.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <Package className="text-blue-600" size={16} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                <div className="text-sm text-gray-500">SKU: {item.sku}</div>
                                                <div className="text-xs text-gray-400">Location: {item.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-gray-900">{item.quantity} {item.unit}</span>
                                            {item.quantity <= item.minQuantity && (
                                                <AlertTriangle className="text-red-500" size={16} />
                                            )}
                                            <div className="text-xs text-gray-500">
                                                Min: {item.minQuantity}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.price}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.supplier}</div>
                                        <div className="text-sm text-gray-500">Last: {item.lastRestocked}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            {getStatusIcon(item.status)}
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex gap-2">
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors flex items-center gap-1">
                                                <Edit size={14} />
                                                Edit
                                            </button>
                                            <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors flex items-center gap-1">
                                                <Trash2 size={14} />
                                                Delete
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
                    Load More Items
                </button>
            </div>
        </div>
    );
}
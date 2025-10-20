export function ServiceCard({ vehicleModel, plateNumber, customerName, serviceType, amount, date, status, priority }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
            case 'In Progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Scheduled': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Pending': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High': return 'bg-red-100 text-red-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'Low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h4 className="font-semibold text-gray-900">{vehicleModel} - {plateNumber}</h4>
                    <p className="text-sm text-gray-600">{customerName}</p>
                </div>
                <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                        {status}
                    </span>
                    {priority && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(priority)}`}>
                            {priority}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-600">{serviceType}</p>
                    <p className="text-sm font-medium text-gray-900">{amount}</p>
                </div>
                <p className="text-sm text-gray-500">{date}</p>
            </div>
        </div>
    );
}
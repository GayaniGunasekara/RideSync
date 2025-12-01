export function ServiceCard({ vehicleModel, plateNumber, customerName, serviceType, amount, date, status, priority }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-[#b5ebf4] text-green-600 border-green-200';
            case 'In Progress': return 'bg-[#b5ebf4] text-red-900 border-yellow-200';
            case 'Scheduled': return 'bg-[#b5ebf4] text-blue-800 border-blue-200';
            case 'Pending': return 'bg-[#b5ebf4] text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };



    return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h4 className="font-bold text-[#088395] ">{vehicleModel} - {plateNumber}</h4>
                    <p className="text-sm text-[#026574] ">{customerName}</p>
                </div>
                <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                        {status}
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm font-semibold text-[#026574] ">{serviceType}</p>
                    <p className="text-sm  text-[#026574] ">{amount}</p>
                </div>
                <p className="text-sm text-[#026574] ">{date}</p>
            </div>
        </div>
    );
}
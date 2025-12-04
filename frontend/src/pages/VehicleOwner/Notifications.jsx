import { Bell, AlertCircle, CheckCircle, Clock, Car, Calendar, Wrench, X, Filter } from 'lucide-react';

export default function Notifications() {
    const notifications = [
        {
            id: 1,
            type: 'service_reminder',
            title: 'Service Reminder',
            message: 'Your Honda Civic (ABC123) is due for service on February 15, 2025',
            time: '2 hours ago',
            read: false,
            priority: 'high',
            vehicle: 'Honda Civic - ABC123'
        },
        {
            id: 2,
            type: 'service_completed',
            title: 'Service Completed',
            message: 'Oil change completed for Toyota Corolla (XYZ789) at AutoCare Center',
            time: '1 day ago',
            read: true,
            priority: 'medium',
            vehicle: 'Toyota Corolla - XYZ789'
        },
        {
            id: 3,
            type: 'appointment_confirmed',
            title: 'Appointment Confirmed',
            message: 'Your service appointment at QuickFix Garage is confirmed for tomorrow at 10:00 AM',
            time: '2 days ago',
            read: true,
            priority: 'low',
            vehicle: 'Honda Civic - ABC123'
        },
        {
            id: 4,
            type: 'maintenance_alert',
            title: 'Maintenance Alert',
            message: 'Your vehicle needs brake inspection based on mileage. Please schedule soon.',
            time: '3 days ago',
            read: false,
            priority: 'high',
            vehicle: 'Nissan Altima - DEF456'
        },
        {
            id: 5,
            type: 'payment_reminder',
            title: 'Payment Reminder',
            message: 'Payment of Rs. 8,000 is due for your recent service at Premium Auto Service',
            time: '4 days ago',
            read: true,
            priority: 'medium',
            vehicle: 'Honda Civic - ABC123'
        },
        {
            id: 6,
            type: 'service_reminder',
            title: 'Service Reminder',
            message: 'Your Toyota Corolla (XYZ789) is due for tire rotation in 2 weeks',
            time: '1 week ago',
            read: true,
            priority: 'low',
            vehicle: 'Toyota Corolla - XYZ789'
        }
    ];

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'service_reminder': return <Clock className="text-yellow-500" size={20} />;
            case 'service_completed': return <CheckCircle className="text-green-500" size={20} />;
            case 'appointment_confirmed': return <Calendar className="text-blue-500" size={20} />;
            case 'maintenance_alert': return <AlertCircle className="text-red-500" size={20} />;
            case 'payment_reminder': return <Bell className="text-orange-500" size={20} />;
            default: return <Bell className="text-gray-500" size={20} />;
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return 'border-l-red-500 bg-red-50';
            case 'medium': return 'border-l-yellow-500 bg-yellow-50';
            case 'low': return 'border-l-green-500 bg-green-50';
            default: return 'border-l-gray-500 bg-gray-50';
        }
    };

    const getPriorityBadge = (priority) => {
        switch (priority) {
            case 'high': return 'bg-red-100 text-red-800';
            case 'medium': return 'bg-yellow-100 text-yellow-800';
            case 'low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const unreadCount = notifications.filter(n => !n.read).length;
    const highPriorityCount = notifications.filter(n => n.priority === 'high' && !n.read).length;

    return (
        <div className="w-full space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifications</h1>
                    <p className="text-gray-600 mt-1">Stay updated with your vehicle service notifications.</p>
                </div>
                <div className="flex items-center gap-3">
                    {unreadCount > 0 && (
                        <div className="flex items-center gap-2">
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {unreadCount} unread
                            </span>
                            {highPriorityCount > 0 && (
                                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {highPriorityCount} urgent
                                </span>
                            )}
                        </div>
                    )}
                    <div className="flex gap-2">
                        <button className="bg-gray-100 text-[#024b56] px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                            <Filter size={16} />
                            Filter
                        </button>
                        <button className="bg-[#024b56] text-white px-4 py-2 rounded-lg hover:bg-[#038fa4]  transition-colors flex items-center gap-2">

                            Mark All Read
                        </button>
                    </div>
                </div>
            </div>

            {/* Notification Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Bell className="text-blue-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total</p>
                            <p className="text-xl font-bold text-gray-900">{notifications.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <AlertCircle className="text-red-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Unread</p>
                            <p className="text-xl font-bold text-gray-900">{unreadCount}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                            <Clock className="text-orange-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">High Priority</p>
                            <p className="text-xl font-bold text-gray-900">{highPriorityCount}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <CheckCircle className="text-green-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Read</p>
                            <p className="text-xl font-bold text-gray-900">{notifications.length - unreadCount}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`bg-white border-l-4 ${getPriorityColor(notification.priority)} border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow ${!notification.read ? 'ring-2 ring-blue-100' : ''
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-2 rounded-lg ${notification.priority === 'high' ? 'bg-red-100' :
                                notification.priority === 'medium' ? 'bg-yellow-100' :
                                    'bg-green-100'
                                }`}>
                                {getNotificationIcon(notification.type)}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityBadge(notification.priority)}`}>
                                                {notification.priority}
                                            </span>
                                            {!notification.read && (
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            )}
                                        </div>
                                        <p className="text-gray-700 mb-2">{notification.message}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Car size={14} />
                                                {notification.vehicle}
                                            </span>
                                            <span>{notification.time}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        {!notification.read && (
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                <CheckCircle size={16} />
                                            </button>
                                        )}
                                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <X size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center">
                <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    Load More Notifications
                </button>
            </div>
        </div>
    );
}
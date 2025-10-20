import { MapPin, Star, Phone, Clock, Car, Wrench, Filter, Search, Navigation, Calendar, DollarSign } from 'lucide-react';

export default function ServiceCenters() {
    const serviceCenters = [
        {
            id: 1,
            name: 'AutoCare Center',
            rating: 4.8,
            distance: '2.5 km',
            address: '123 Galle Road, Colombo 03',
            phone: '+94 11 234 5678',
            services: ['Oil Change', 'Brake Service', 'Engine Repair', 'Tire Service'],
            hours: '8:00 AM - 6:00 PM',
            priceRange: 'Rs. 5,000 - Rs. 25,000',
            image: '/assets/service-center-1.jpg',
            isOpen: true,
            specialties: ['Honda', 'Toyota', 'Nissan'],
            waitTime: '30 mins',
            features: ['Free Wi-Fi', 'Coffee', 'Waiting Area']
        },
        {
            id: 2,
            name: 'QuickFix Garage',
            rating: 4.5,
            distance: '3.2 km',
            address: '456 Kandy Road, Colombo 07',
            phone: '+94 11 345 6789',
            services: ['Tire Service', 'Battery Check', 'AC Service', 'Transmission'],
            hours: '7:00 AM - 7:00 PM',
            priceRange: 'Rs. 3,000 - Rs. 20,000',
            image: '/assets/service-center-2.jpg',
            isOpen: true,
            specialties: ['All Brands'],
            waitTime: '45 mins',
            features: ['Express Service', 'Pickup & Delivery']
        },
        {
            id: 3,
            name: 'Premium Auto Service',
            rating: 4.9,
            distance: '5.1 km',
            address: '789 Negombo Road, Colombo 15',
            phone: '+94 11 456 7890',
            services: ['Full Service', 'Transmission', 'Electrical', 'Body Work'],
            hours: '9:00 AM - 5:00 PM',
            priceRange: 'Rs. 10,000 - Rs. 50,000',
            image: '/assets/service-center-3.jpg',
            isOpen: false,
            specialties: ['Luxury Cars', 'European'],
            waitTime: '1 hour',
            features: ['Luxury Waiting', 'Valet Service', 'Loaner Cars']
        },
        {
            id: 4,
            name: 'Eco Auto Solutions',
            rating: 4.6,
            distance: '4.3 km',
            address: '321 Battaramulla Road, Colombo 08',
            phone: '+94 11 567 8901',
            services: ['Hybrid Service', 'Electric Vehicle', 'Green Service'],
            hours: '8:30 AM - 5:30 PM',
            priceRange: 'Rs. 8,000 - Rs. 30,000',
            image: '/assets/service-center-4.jpg',
            isOpen: true,
            specialties: ['Hybrid', 'Electric'],
            waitTime: '20 mins',
            features: ['Eco-Friendly', 'Solar Power', 'Green Certifications']
        }
    ];

    const getStatusColor = (isOpen) => {
        return isOpen ? 'text-green-600' : 'text-red-600';
    };

    const getStatusBg = (isOpen) => {
        return isOpen ? 'bg-green-100' : 'bg-red-100';
    };

    return (
        <div className="w-full space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Service Centers</h1>
                    <p className="text-gray-600 mt-1">Find and book services at nearby automotive centers.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                        <Navigation size={16} />
                        Map View
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search service centers, services, or locations..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Car className="text-blue-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Centers</p>
                            <p className="text-xl font-bold text-gray-900">{serviceCenters.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <Clock className="text-green-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Open Now</p>
                            <p className="text-xl font-bold text-gray-900">{serviceCenters.filter(s => s.isOpen).length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                            <Star className="text-yellow-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Avg Rating</p>
                            <p className="text-xl font-bold text-gray-900">4.7</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <MapPin className="text-purple-600" size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Nearest</p>
                            <p className="text-xl font-bold text-gray-900">2.5 km</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Centers Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {serviceCenters.map((center) => (
                    <div key={center.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            <Car size={48} className="text-blue-400" />
                        </div>

                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{center.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="flex items-center gap-1">
                                            <Star size={16} className="text-yellow-500 fill-current" />
                                            <span className="text-sm font-medium">{center.rating}</span>
                                        </div>
                                        <span className="text-gray-400">•</span>
                                        <span className="text-sm text-gray-600">{center.distance} away</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBg(center.isOpen)} ${getStatusColor(center.isOpen)}`}>
                                        {center.isOpen ? 'Open' : 'Closed'}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <MapPin size={16} />
                                    <span>{center.address}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Phone size={16} />
                                    <span>{center.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock size={16} />
                                    <span>{center.hours}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <DollarSign size={16} />
                                    <span>{center.priceRange}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Services Available:</h4>
                                <div className="flex flex-wrap gap-1">
                                    {center.services.map((service, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
                                <div className="flex flex-wrap gap-1">
                                    {center.specialties.map((specialty, index) => (
                                        <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                                <div className="flex flex-wrap gap-1">
                                    {center.features.map((feature, index) => (
                                        <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                                    <Calendar size={16} />
                                    Book Service
                                </button>
                                <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                    <Navigation size={16} />
                                    Directions
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center">
                <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    Load More Service Centers
                </button>
            </div>
        </div>
    );
}
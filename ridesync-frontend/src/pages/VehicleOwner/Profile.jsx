import { User, Mail, Phone, MapPin, Edit, Save, Camera, Shield, CreditCard, Settings } from 'lucide-react';
import { useState } from 'react';

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@email.com',
        phone: '+94 77 123 4567',
        address: '123 Main Street, Colombo 03, Sri Lanka',
        emergencyContact: '+94 77 987 6543',
        licenseNumber: 'B1234567',
        licenseExpiry: '2026-12-31',
        joinDate: '2024-01-15',
        avatar: '/assets/default-avatar.jpg'
    });

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically save to backend
        console.log('Profile saved:', profile);
    };

    const handleInputChange = (field, value) => {
        setProfile(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="w-full space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profile</h1>
                    <p className="text-gray-600 mt-1">Manage your personal information and account settings.</p>
                </div>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
                >
                    {isEditing ? <Save size={20} /> : <Edit size={20} />}
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <div className="text-center">
                            <div className="relative inline-block mb-4">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                                    <User size={40} className="text-white" />
                                </div>
                                {isEditing && (
                                    <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                                        <Camera size={16} />
                                    </button>
                                )}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{profile.name}</h3>
                            <p className="text-gray-600 capitalize">{profile.role?.replace(/([A-Z])/g, ' $1').trim() || 'Vehicle Owner'}</p>
                            <p className="text-sm text-gray-500 mt-2">Member since {profile.joinDate}</p>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Stats</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Total Vehicles</span>
                                <span className="font-semibold">2</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Services Completed</span>
                                <span className="font-semibold">8</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Total Spent</span>
                                <span className="font-semibold">Rs. 45,000</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Member Since</span>
                                <span className="font-semibold">Jan 2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="lg:col-span-2">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profile.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        />
                                    ) : (
                                        <p className="text-gray-900 py-3">{profile.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            value={profile.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        />
                                    ) : (
                                        <p className="text-gray-900 py-3">{profile.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            value={profile.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        />
                                    ) : (
                                        <p className="text-gray-900 py-3">{profile.phone}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profile.licenseNumber}
                                            onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        />
                                    ) : (
                                        <p className="text-gray-900 py-3">{profile.licenseNumber}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                {isEditing ? (
                                    <textarea
                                        value={profile.address}
                                        onChange={(e) => handleInputChange('address', e.target.value)}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                ) : (
                                    <p className="text-gray-900 py-3">{profile.address}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        value={profile.emergencyContact}
                                        onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                ) : (
                                    <p className="text-gray-900 py-3">{profile.emergencyContact}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">License Expiry Date</label>
                                {isEditing ? (
                                    <input
                                        type="date"
                                        value={profile.licenseExpiry}
                                        onChange={(e) => handleInputChange('licenseExpiry', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                ) : (
                                    <p className="text-gray-900 py-3">{profile.licenseExpiry}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Account Settings */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Settings</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Shield className="text-blue-600" size={20} />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Change Password</h4>
                                        <p className="text-sm text-gray-600">Update your account password</p>
                                    </div>
                                </div>
                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                    Change
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <CreditCard className="text-green-600" size={20} />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Payment Methods</h4>
                                        <p className="text-sm text-gray-600">Manage your payment options</p>
                                    </div>
                                </div>
                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                    Manage
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Settings className="text-gray-600" size={20} />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Notification Preferences</h4>
                                        <p className="text-sm text-gray-600">Control your notification settings</p>
                                    </div>
                                </div>
                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                    Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { TrendingUp } from 'lucide-react';

export function StatCard({ icon: Icon, title, value, iconColor, trend }) {
    return (
        <div
            className="
                bg-white border rounded-[20px] shadow-sm hover:shadow-md transition-all
                h-[200px] w-[300px]
            "
        >
            <div className="flex items-center justify-between m-10">
                <div className="flex-1">
                    <p className="text-lg text-gray-600 mb-1">{title}</p>
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                    {trend && (
                        <div className="flex items-center gap-1 mt-1">
                            <TrendingUp
                                size={14}
                                className={trend > 0 ? 'text-green-600' : 'text-red-600'}
                            />
                            <span
                                className={`text-xs ${trend > 0 ? 'text-green-600' : 'text-red-600'
                                    }`}
                            >
                                {trend > 0 ? '+' : ''}
                                {trend}% from last month
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${iconColor}20` }}
                >
                    <Icon size={24} color={iconColor} />
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import Card from '../ui/Card';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Check, X } from 'lucide-react';

const marketShareData = [
  { name: 'Airbnb Only', value: 63 },
  { name: 'VRBO Only', value: 2 },
  { name: 'Both', value: 35 },
];

const COLORS = ['#DC143C', '#1A1A1A', '#808080'];

const MarketInsights: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <Card title="The Abilene Market Opportunity">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-brand-red">673</p>
                        <p className="text-xs text-gray-500">Active Listings</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-brand-black">57%</p>
                        <p className="text-xs text-gray-500">Median Occupancy</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-brand-red">$26k</p>
                        <p className="text-xs text-gray-500">Avg Host Revenue</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-brand-black">$122</p>
                        <p className="text-xs text-gray-500">Avg Daily Rate</p>
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    The Abilene short-term rental market is underserved. There are only 2-3 established competitors focusing on this niche. 
                    Hosts are currently complaining about: <strong>Hair in drains, dust, inconsistent quality, and lack of communication.</strong>
                </p>
            </Card>

            <Card title="Competitor Analysis">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700 font-bold">
                            <tr>
                                <th className="px-4 py-2">Competitor</th>
                                <th className="px-4 py-2">Strengths</th>
                                <th className="px-4 py-2">Weaknesses</th>
                                <th className="px-4 py-2">Est. Price (2BR)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-3 font-semibold text-brand-black">Neat & Clean</td>
                                <td className="px-4 py-3 text-brand-black">Established, Dedicated Airbnb Page</td>
                                <td className="px-4 py-3 text-red-600">No online pricing, generic brand</td>
                                <td className="px-4 py-3 text-brand-black">$75 - $150</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-semibold text-brand-black">B&C Cleaning</td>
                                <td className="px-4 py-3 text-brand-black">4.5 Stars, Family story</td>
                                <td className="px-4 py-3 text-red-600">Newer, small online footprint</td>
                                <td className="px-4 py-3 text-brand-black">$130 - $180</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-semibold text-brand-black">Sudzees</td>
                                <td className="px-4 py-3 text-brand-black">Long history (43 yrs), Eco-friendly</td>
                                <td className="px-4 py-3 text-red-600">Mixed reviews (3.0), Theft incident</td>
                                <td className="px-4 py-3 text-brand-black">Hourly (~$25-33)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>

        <div className="space-y-6">
            <Card title="Listing Distribution">
                <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={marketShareData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#8884d8" dataKey="value">
                                {marketShareData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36}/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">Most hosts are on Airbnb, but 35% use both.</p>
            </Card>
            
            <Card title="How You Win (Differentiators)" className="bg-white border-2 border-brand-black">
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <Check className="text-brand-red flex-shrink-0" size={18} />
                        <span className="text-sm font-medium text-brand-black">Instant Online Booking (No quotes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="text-brand-red flex-shrink-0" size={18} />
                        <span className="text-sm font-medium text-brand-black">2-Hour Response Guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="text-brand-red flex-shrink-0" size={18} />
                        <span className="text-sm font-medium text-brand-black">Photo Documentation (15+ pics)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="text-brand-red flex-shrink-0" size={18} />
                        <span className="text-sm font-medium text-brand-black">Owner Dashboard Access</span>
                    </li>
                </ul>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
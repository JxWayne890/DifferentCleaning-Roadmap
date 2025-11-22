import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { DollarSign, Users, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import { ModuleId } from '../../types';

interface DashboardProps {
  onNavigate: (id: ModuleId) => void;
}

const revenueData = [
  { name: 'Q1', revenue: 12000, clients: 8 },
  { name: 'Q2', revenue: 27000, clients: 20 },
  { name: 'Q3', revenue: 42000, clients: 35 },
  { name: 'Q4', revenue: 54000, clients: 50 },
];

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-black">Welcome Back, Malik.</h1>
        <p className="text-gray-600 mt-2">Your roadmap to dominating the Abilene Airbnb cleaning market.</p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-brand-red" accent>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Target Rev Year 1</p>
                    <p className="text-3xl font-bold text-brand-black mt-1">$135,000</p>
                </div>
                <DollarSign className="text-brand-red opacity-20 w-8 h-8" />
            </div>
        </Card>
        <Card className="border-l-4 border-brand-black" accent>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Market Potential</p>
                    <p className="text-3xl font-bold text-brand-black mt-1">673</p>
                    <p className="text-xs text-green-600">Active Listings in Abilene</p>
                </div>
                <Home className="text-brand-black opacity-20 w-8 h-8" />
            </div>
        </Card>
        <Card className="border-l-4 border-gray-500" accent>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Target Net Profit</p>
                    <p className="text-3xl font-bold text-brand-black mt-1">69%</p>
                    <p className="text-xs text-green-600">Margin Goal</p>
                </div>
                <TrendingUp className="text-gray-500 opacity-20 w-8 h-8" />
            </div>
        </Card>
        <Card className="border-l-4 border-brand-red" accent>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Goal Clients Q4</p>
                    <p className="text-3xl font-bold text-brand-black mt-1">50+</p>
                </div>
                <Users className="text-brand-red opacity-20 w-8 h-8" />
            </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card title="Year 1 Revenue Projection" className="lg:col-span-2">
            <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                        <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                        <Legend />
                        <Bar dataKey="revenue" fill="#DC143C" name="Revenue ($)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">Based on audit roadmap: Scaling from 8 to 50 clients.</p>
        </Card>

        {/* Focus Areas */}
        <Card title="Immediate Focus Areas">
            <ul className="space-y-4">
                <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center text-xs font-bold mr-3">1</span>
                    <p className="text-sm text-gray-700"><strong>Google Business Profile:</strong> Verify and upload 20+ photos to start ranking.</p>
                </li>
                <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center text-xs font-bold mr-3">2</span>
                    <p className="text-sm text-gray-700"><strong>Outreach:</strong> Send 50 messages to Airbnb hosts (scripts in Marketing tab).</p>
                </li>
                <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center text-xs font-bold mr-3">3</span>
                    <p className="text-sm text-gray-700"><strong>First Reviews:</strong> Follow up with recent clients to get your first 5 stars.</p>
                </li>
            </ul>
            <button 
                onClick={() => onNavigate(ModuleId.ACTION_PLAN)}
                className="w-full mt-6 bg-brand-black text-white py-2 px-4 rounded hover:bg-gray-800 transition flex items-center justify-center gap-2">
                Go to Action Plan <ArrowRight size={16} />
            </button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

function TrendingUp({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
}

function Home({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
}
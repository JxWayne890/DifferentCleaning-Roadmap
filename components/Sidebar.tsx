import React from 'react';
import { LayoutDashboard, Flag, TrendingUp, Building2, DollarSign, Home, Megaphone, MapPin, Settings, AlertTriangle, CalendarCheck } from 'lucide-react';
import { ModuleId, NavItem } from '../types';

interface SidebarProps {
  activeModule: ModuleId;
  setActiveModule: (id: ModuleId) => void;
}

const navItems: NavItem[] = [
  { id: ModuleId.DASHBOARD, label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: ModuleId.ORIENTATION, label: 'Start Here', icon: <Flag size={20} /> },
  { id: ModuleId.MARKET_INSIGHTS, label: 'Market Insights', icon: <TrendingUp size={20} /> },
  { id: ModuleId.BUSINESS_SETUP, label: 'Business Setup', icon: <Building2 size={20} /> },
  { id: ModuleId.PRICING, label: 'Pricing Strategy', icon: <DollarSign size={20} /> },
  { id: ModuleId.AIRBNB_MASTERY, label: 'Airbnb Mastery', icon: <Home size={20} /> },
  { id: ModuleId.MARKETING, label: 'Marketing & Sales', icon: <Megaphone size={20} /> },
  { id: ModuleId.LOCAL_SEO, label: 'SEO & Google Profile', icon: <MapPin size={20} /> },
  { id: ModuleId.OPERATIONS, label: 'Operations & Systems', icon: <Settings size={20} /> },
  { id: ModuleId.RISK_MANAGEMENT, label: 'Risk Management', icon: <AlertTriangle size={20} /> },
  { id: ModuleId.ACTION_PLAN, label: 'Action Plan', icon: <CalendarCheck size={20} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ activeModule, setActiveModule }) => {
  return (
    <div className="h-full w-64 bg-brand-black text-white flex flex-col shadow-xl">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold text-white tracking-tighter">DIFFERENT<span className="text-brand-red">.</span></h2>
        <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Cleaning Services</p>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            className={`w-full flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 border-l-4 ${
              activeModule === item.id
                ? 'border-brand-red bg-gray-900 text-white'
                : 'border-transparent text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-6 bg-gray-900">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-brand-red flex items-center justify-center text-white font-bold">M</div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Malik</p>
            <p className="text-xs text-gray-400">Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
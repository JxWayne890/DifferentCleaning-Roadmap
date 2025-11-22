import React, { useState } from 'react';
import { LayoutDashboard, Flag, TrendingUp, Building2, DollarSign, Home, Megaphone, MapPin, Settings, AlertTriangle, CalendarCheck } from 'lucide-react';
import { ModuleId } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/modules/Dashboard';
import Orientation from './components/modules/Orientation';
import MarketInsights from './components/modules/MarketInsights';
import BusinessSetup from './components/modules/BusinessSetup';
import PricingStrategy from './components/modules/PricingStrategy';
import AirbnbMastery from './components/modules/AirbnbMastery';
import Marketing from './components/modules/Marketing';
import LocalSEO from './components/modules/LocalSEO';
import Operations from './components/modules/Operations';
import RiskManagement from './components/modules/RiskManagement';
import ActionPlan from './components/modules/ActionPlan';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleId>(ModuleId.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeModule) {
      case ModuleId.DASHBOARD: return <Dashboard onNavigate={setActiveModule} />;
      case ModuleId.ORIENTATION: return <Orientation />;
      case ModuleId.MARKET_INSIGHTS: return <MarketInsights />;
      case ModuleId.BUSINESS_SETUP: return <BusinessSetup />;
      case ModuleId.PRICING: return <PricingStrategy />;
      case ModuleId.AIRBNB_MASTERY: return <AirbnbMastery />;
      case ModuleId.MARKETING: return <Marketing />;
      case ModuleId.LOCAL_SEO: return <LocalSEO />;
      case ModuleId.OPERATIONS: return <Operations />;
      case ModuleId.RISK_MANAGEMENT: return <RiskManagement />;
      case ModuleId.ACTION_PLAN: return <ActionPlan />;
      default: return <Dashboard onNavigate={setActiveModule} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-brand-black overflow-hidden">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header for Mobile Toggle */}
        <div className="md:hidden bg-brand-black text-white p-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Different Cleaning Services</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
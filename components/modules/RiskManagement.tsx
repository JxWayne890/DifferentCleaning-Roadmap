import React from 'react';
import Card from '../ui/Card';
import { ShieldAlert, XCircle, FileWarning } from 'lucide-react';

const risks = [
  {
    title: 'Liability Claims (Damage)',
    desc: 'Accidentally breaking a TV or scratching a floor.',
    mitigation: 'General Liability Insurance ($1M coverage) + Pre-cleaning photo inspection.'
  },
  {
    title: 'Slip-and-Fall',
    desc: '#1 most common insurance claim.',
    mitigation: 'Use "Wet Floor" signs. Document that warnings were placed.'
  },
  {
    title: 'Employee Theft',
    desc: 'Cleaner steals from property.',
    mitigation: 'Background checks (Checkr) + Janitorial Bond. Zero tolerance policy.'
  },
  {
    title: 'Inconsistent Quality',
    desc: 'One bad review can cost you clients.',
    mitigation: 'Digital checklists mandatory for every job. Supervisor spot checks.'
  },
  {
    title: 'Cash Flow Gaps',
    desc: 'Seasonal slowdowns (Jan/Feb).',
    mitigation: 'Keep 3 months operating expenses in savings. Diversify with commercial clients later.'
  }
];

const RiskManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="Top 5 Risks & How to Mitigate">
        <div className="space-y-4">
          {risks.map((risk, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-brand-red transition-colors">
              <div className="flex items-start gap-3">
                <ShieldAlert className="text-brand-red shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-brand-black">{risk.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{risk.desc}</p>
                  <div className="text-xs font-semibold bg-gray-100 inline-block px-2 py-1 rounded text-gray-700">
                    Fix: {risk.mitigation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Common Mistakes to Avoid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 p-4 rounded border border-red-100">
            <div className="flex items-center gap-2 mb-2 text-red-700 font-bold">
              <XCircle size={18} /> Underpricing
            </div>
            <p className="text-xs text-gray-600">Never compete on price. Compete on value. Don't charge hourly.</p>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-100">
            <div className="flex items-center gap-2 mb-2 text-red-700 font-bold">
              <FileWarning size={18} /> No Contracts
            </div>
            <p className="text-xs text-gray-600">Always have a service agreement defining scope and cancellation policy.</p>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-100">
            <div className="flex items-center gap-2 mb-2 text-red-700 font-bold">
              <XCircle size={18} /> Hiring Too Fast
            </div>
            <p className="text-xs text-gray-600">Only hire when you are turning away work and have 3 months payroll saved.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RiskManagement;
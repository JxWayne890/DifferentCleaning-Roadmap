import React, { useState } from 'react';
import Card from '../ui/Card';
import { CheckSquare, Square, ExternalLink } from 'lucide-react';

interface Task {
  id: string;
  category: string;
  text: string;
  details: string;
  link?: { url: string, text: string };
}

const tasks: Task[] = [
  {
    id: '1',
    category: 'Legal',
    text: 'Register LLC',
    details: 'File with Texas Secretary of State. Cost: $300. Protects personal assets.',
    link: { url: 'https://www.sos.state.tx.us/', text: 'Texas SOS' }
  },
  {
    id: '2',
    category: 'Legal',
    text: 'Get EIN (Employer ID)',
    details: 'Free from IRS. Required for banking and hiring.',
    link: { url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online', text: 'IRS EIN Application' }
  },
  {
    id: '3',
    category: 'Legal',
    text: 'Sales Tax Permit',
    details: 'Required in Texas. Residential cleaning is taxable.',
    link: { url: 'https://comptroller.texas.gov/', text: 'Texas Comptroller' }
  },
  {
    id: '4',
    category: 'Insurance',
    text: 'General Liability Insurance',
    details: 'Coverage: $1M-$2M. Cost: $500-$1500/yr. Providers: Next Insurance, Hiscox.',
  },
  {
    id: '5',
    category: 'Banking',
    text: 'Business Checking Account',
    details: 'Separate personal and business finances. Look for no-fee local banks or Novo/Mercury.',
  },
  {
    id: '6',
    category: 'Banking',
    text: 'Setup Payment Processing',
    details: 'Create Square account for invoicing and card processing (2.6% + 10¢).',
    link: { url: 'https://squareup.com/', text: 'Square' }
  }
];

const BusinessSetup: React.FC = () => {
  const [completed, setCompleted] = useState<string[]>([]);

  const toggleTask = (id: string) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border-l-4 border-blue-500 p-6 rounded shadow-sm mb-6">
        <h2 className="text-xl font-bold mb-2">Phase 1: Foundation (Weeks 1-2)</h2>
        <p className="text-gray-600">Complete these items before taking your first paying client to ensure you are legally protected and ready to scale.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tasks.map(task => (
          <div key={task.id} className={`p-4 bg-white rounded-lg border shadow-sm flex items-start transition-all ${completed.includes(task.id) ? 'opacity-60 bg-gray-50' : 'hover:shadow-md'}`}>
            <button onClick={() => toggleTask(task.id)} className="mt-1 mr-4 text-brand-red focus:outline-none">
              {completed.includes(task.id) ? <CheckSquare size={24} /> : <Square size={24} />}
            </button>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className={`font-bold text-lg ${completed.includes(task.id) ? 'line-through text-gray-500' : 'text-brand-black'}`}>{task.text}</h3>
                <span className="text-xs font-semibold uppercase bg-gray-100 text-gray-600 px-2 py-1 rounded">{task.category}</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{task.details}</p>
              {task.link && (
                <a href={task.link.url} target="_blank" rel="noreferrer" className="text-brand-red text-sm font-medium flex items-center hover:underline">
                  {task.link.text} <ExternalLink size={12} className="ml-1" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSetup;
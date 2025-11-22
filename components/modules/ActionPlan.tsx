import React from 'react';
import Card from '../ui/Card';
import { CheckSquare } from 'lucide-react';

const ActionPlan: React.FC = () => {
  return (
    <div className="space-y-6">
        <div className="bg-white border border-gray-200 shadow-sm p-6 rounded-xl mb-6">
            <h2 className="text-2xl font-bold mb-2 text-brand-black">Your Next 30 Days</h2>
            <p className="text-gray-600">Focus ONLY on these tasks. Ignore everything else.</p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Week 1: Foundation">
            <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Fix Website (Make sure booking works)</span>
                </li>
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Register LLC & EIN</span>
                </li>
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Open Business Bank Account</span>
                </li>
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Setup Google Business Profile</span>
                </li>
            </ul>
        </Card>

        <Card title="Week 2: Outreach">
            <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Send 50 Messages to Airbnb Hosts (Use Scripts)</span>
                </li>
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Join 5 Local Facebook Groups</span>
                </li>
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Post "First Clean 50% Off" Offer</span>
                </li>
            </ul>
        </Card>

        <Card title="Week 3: Systems">
            <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Setup Turno or Calendar Sync</span>
                </li>
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Create Digital Checklist (Google Forms)</span>
                </li>
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Purchase Initial Supply Kit ($300)</span>
                </li>
            </ul>
        </Card>

        <Card title="Week 4: Optimization">
            <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Get First 3 Google Reviews</span>
                </li>
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Follow up with Property Managers</span>
                </li>
                <li className="flex items-center gap-3">
                    <CheckSquare className="text-brand-red" />
                    <span className="text-gray-700">Review Profitability of First Jobs</span>
                </li>
            </ul>
        </Card>
      </div>

      <Card title="Long Term Roadmap (Year 1)" className="mt-6">
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4 font-bold text-brand-red">Months 1-3</div>
                <div className="w-full md:w-3/4">
                    <h4 className="font-bold">Foundation Phase</h4>
                    <p className="text-sm text-gray-600">Goal: 5-10 Clients. $4k/mo Revenue. Focus on reviews and perfecting the clean.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4 font-bold text-brand-red">Months 4-6</div>
                <div className="w-full md:w-3/4">
                    <h4 className="font-bold">Growth Phase</h4>
                    <p className="text-sm text-gray-600">Goal: 20 Clients. $9k/mo Revenue. Implement software (Housecall Pro). Start SEO blogging.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4 font-bold text-brand-red">Months 7-9</div>
                <div className="w-full md:w-3/4">
                    <h4 className="font-bold">Scaling Phase</h4>
                    <p className="text-sm text-gray-600">Goal: 35 Clients. Hire first employee. Start paid ads ($300/mo).</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4 font-bold text-brand-red">Months 10-12</div>
                <div className="w-full md:w-3/4">
                    <h4 className="font-bold">Optimization Phase</h4>
                    <p className="text-sm text-gray-600">Goal: 50 Clients. $18k/mo Revenue. Rank Top 3 on Google. Systemize everything.</p>
                </div>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default ActionPlan;
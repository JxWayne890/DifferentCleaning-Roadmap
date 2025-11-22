import React from 'react';
import Card from '../ui/Card';
import { Copy, Facebook, Mail, Phone } from 'lucide-react';

const Marketing: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Script copied to clipboard!');
  };

  const emailScript = `Subject: Quick Question About Your Airbnb Cleaning

Hi [Host Name],

I came across your listing at [Address] and wanted to reach out. I'm Malik, owner of Different Cleaning Services here in Abilene.

We specialize exclusively in short-term rental turnovers and currently clean 15+ Airbnbs in the area. Our service includes:
✅ Guaranteed 2-hour turnaround (no missed check-ins)
✅ 15-20 photos sent after every clean
✅ Same-day emergency availability
✅ Free re-clean if guest complains within 24 hours

I'd love to offer you a 50% discount on your first cleaning so you can try our service risk-free.

Would you be open to a quick 10-minute call this week?

Best,
Malik
Different Cleaning Services`;

  const socialScript = `🧹 AIRBNB HOSTS IN ABILENE 🧹

Tired of last-minute cleaning scrambles? We specialize in same-day Airbnb turnovers with GUARANTEED results.

📸 Photo proof after every clean
⚡ 2-hour turnaround
✅ Quality guarantee

SPECIAL: First cleaning 50% OFF (New clients only)

DM me or text [Your Number] to book!`;

  return (
    <div className="space-y-6">
      <Card title="Client Acquisition Strategy">
        <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">Direct Outreach</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">Facebook Groups</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">Property Managers</span>
        </div>
        <p className="text-gray-600 mb-4">
            Your goal is to get your first 10 clients in weeks 1-6. Don't rely on ads yet. Use "Sniper Marketing" — direct, personal outreach to people you know have Airbnbs.
        </p>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Cold Email Script (For Hosts)">
            <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm whitespace-pre-wrap mb-4 h-96 overflow-y-auto">
                {emailScript}
            </div>
            <button 
                onClick={() => copyToClipboard(emailScript)}
                className="flex items-center justify-center w-full py-2 bg-brand-red text-white rounded hover:bg-red-700 transition"
            >
                <Copy size={16} className="mr-2" /> Copy Email Script
            </button>
        </Card>

        <Card title="Facebook Group Post">
            <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm whitespace-pre-wrap mb-4 h-64 overflow-y-auto">
                {socialScript}
            </div>
            <button 
                onClick={() => copyToClipboard(socialScript)}
                className="flex items-center justify-center w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-4"
            >
                <Copy size={16} className="mr-2" /> Copy Facebook Script
            </button>
            <div className="mt-6">
                <h4 className="font-bold mb-2">Where to Post:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                    <li>Abilene TX Buy Sell Trade</li>
                    <li>Abilene Area Landlords</li>
                    <li>Airbnb Hosts Texas</li>
                    <li>West Texas Property Management</li>
                </ul>
            </div>
        </Card>
      </div>

      <Card title="Property Manager Partnership Script">
        <p className="text-sm text-gray-600 mb-2">Call local realtors or property managers (e.g., Awning.com managers).</p>
        <div className="bg-gray-50 p-4 rounded italic text-gray-700 border-l-4 border-brand-black">
            "Hi, this is Malik with Different Cleaning Services. I noticed you manage several properties in Abilene. We specialize in STR turnovers with a 100% on-time guarantee. Do you have a backup cleaner for when your regular team is busy? We offer a 10% portfolio discount for managers."
        </div>
      </Card>
    </div>
  );
};

export default Marketing;
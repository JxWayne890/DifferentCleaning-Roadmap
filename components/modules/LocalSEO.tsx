import React from 'react';
import Card from '../ui/Card';
import { MapPin, Star, Search } from 'lucide-react';

const LocalSEO: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="Dominating Google Maps (Your #1 Lead Source)">
        <p className="text-gray-600 mb-4">
            46% of all Google searches are local. You want to show up when someone types "Airbnb cleaning Abilene". This is free and more effective than paid ads long-term.
        </p>
        <div className="flex items-center gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <Star className="text-yellow-500 fill-current" />
            <div>
                <h4 className="font-bold text-yellow-800">The Goal</h4>
                <p className="text-sm text-yellow-700">Get 50+ Five-Star Reviews in Year 1. This will make you the market leader.</p>
            </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="GBP Setup Checklist">
            <ul className="space-y-3">
                <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-5 w-5 text-brand-red" />
                    <span><strong>Name:</strong> Different Cleaning Services</span>
                </li>
                <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-5 w-5 text-brand-red" />
                    <span><strong>Category:</strong> Cleaning Service (Primary)</span>
                </li>
                <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-5 w-5 text-brand-red" />
                    <span><strong>Area:</strong> Abilene + 25 miles</span>
                </li>
                <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-5 w-5 text-brand-red" />
                    <span><strong>Description:</strong> Include "Airbnb Turnover Specialists"</span>
                </li>
                <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-5 w-5 text-brand-red" />
                    <span><strong>Photos:</strong> Upload at least 30 photos (Before/After)</span>
                </li>
                <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-5 w-5 text-brand-red" />
                    <span><strong>Q&A:</strong> Pre-populate common questions</span>
                </li>
            </ul>
        </Card>

        <Card title="Review Generation Strategy">
            <p className="text-sm text-gray-600 mb-4">Send this text 24 hours after every cleaning:</p>
            <div className="bg-gray-100 p-4 rounded border border-gray-300 text-sm mb-4 font-mono">
                "Hi [Name], thanks for trusting us with your property! If you have 60 seconds, would you mind leaving us a quick review? [Link] It really helps us grow. - Malik"
            </div>
            <h4 className="font-bold text-sm mb-2">The Rules:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Respond to ALL reviews within 24 hours.</li>
                <li>Include keywords in your replies (e.g., "Glad we could help with your <strong>Airbnb cleaning</strong>").</li>
                <li>Never argue with bad reviews. Take it offline immediately.</li>
            </ul>
        </Card>
      </div>

      <Card title="Target Keywords">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Airbnb cleaning Abilene", "Abilene turnover service", "Move out cleaning Abilene", "House cleaning Abilene TX", "Commercial cleaning Abilene"].map((kw, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded border border-gray-200">
                    <Search size={14} className="text-gray-400" />
                    <span className="text-sm font-medium">{kw}</span>
                </div>
            ))}
        </div>
      </Card>
    </div>
  );
};

export default LocalSEO;
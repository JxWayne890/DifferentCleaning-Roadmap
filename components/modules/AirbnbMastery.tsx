import React from 'react';
import Card from '../ui/Card';
import { Camera, Clock, CheckCircle } from 'lucide-react';

const AirbnbMastery: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="The Perfect Turnover Protocol">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded">
                <Clock className="text-brand-red" />
                <div>
                    <p className="font-bold">90-120 Min</p>
                    <p className="text-xs text-gray-500">Target time for 2BR</p>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded">
                <Camera className="text-brand-red" />
                <div>
                    <p className="font-bold">15-20 Photos</p>
                    <p className="text-xs text-gray-500">Mandatory evidence</p>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded">
                <CheckCircle className="text-brand-red" />
                <div>
                    <p className="font-bold">Digital Checklist</p>
                    <p className="text-xs text-gray-500">Use Turno or Google Forms</p>
                </div>
            </div>
        </div>

        <h3 className="font-bold text-lg mb-3">Top Guest Complaints (To Prevent)</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {["Hair in drains/showers", "Dusty ceiling fans/blinds", "Stained linens", "Dirty floors/corners", "Mold/Mildew in bathroom", "Leftover food in fridge"].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700 bg-red-50 px-3 py-2 rounded">
                    <span className="text-red-500 font-bold mr-2">!</span> {item}
                </li>
            ))}
        </ul>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Room-by-Room Checklist">
            <div className="space-y-6">
                <div>
                    <h4 className="font-bold text-brand-black border-b pb-1 mb-2">Living Room (15 min)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Vacuum all floors and rugs</li>
                        <li>Dust all surfaces (TV stand, shelves)</li>
                        <li><strong>Wipe remote controls</strong> (high touch point)</li>
                        <li>Fluff couch cushions</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-brand-black border-b pb-1 mb-2">Kitchen (20 min)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Clean countertops & backsplash</li>
                        <li>Wipe exterior of all appliances</li>
                        <li>Check fridge for expired items & wipe shelves</li>
                        <li>Run dishwasher / Put away dishes</li>
                        <li>Restock sponge & dish soap</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-brand-black border-b pb-1 mb-2">Bathroom (25 min)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Scrub toilet (base & back too)</li>
                        <li>Clean mirror (streak-free)</li>
                        <li><strong>Check drain for hair</strong></li>
                        <li>Restock TP (2 rolls), Shampoo, Soap</li>
                        <li>Fold towels hotel-style</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-brand-black border-b pb-1 mb-2">Bedroom (20 min)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Strip & replace all linens</li>
                        <li>Check under bed for lost items</li>
                        <li>Vacuum carpets</li>
                        <li>Dust nightstands</li>
                    </ul>
                </div>
            </div>
        </Card>

        <Card title="The 'Final 10' Touch-Up">
            <p className="text-sm text-gray-600 mb-4">Perform these steps exactly before locking the door. This is what gets 5-star reviews.</p>
            <ol className="list-decimal list-inside space-y-3 text-sm font-medium text-brand-black">
                <li>Set thermostat to 72°F (or host preference).</li>
                <li>Turn off all lights except entry light.</li>
                <li>Spray room freshener (light scent) near entry.</li>
                <li>Take final "Exit Photos" of every room.</li>
                <li>Send "Job Complete" text to host.</li>
                <li>Lock door & return key to lockbox.</li>
            </ol>
            
            <div className="mt-6 p-4 bg-gray-100 rounded border border-gray-200">
                <h4 className="font-bold mb-2">Supply Kit Essentials</h4>
                <p className="text-xs text-gray-600">
                    Microfiber cloths (20+), Glass cleaner, All-purpose cleaner (Method/Mrs Meyers), Disinfectant (Lysol), Vacuum (Shark), Mop & Bucket, Lint roller.
                </p>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default AirbnbMastery;
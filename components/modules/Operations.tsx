import React from 'react';
import Card from '../ui/Card';
import { Smartphone, Box, Truck } from 'lucide-react';

const Operations: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="Tech Stack (The 'Brain' of the Business)">
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-brand-black">
                    <tr>
                        <th className="px-4 py-2 font-bold">Tool Category</th>
                        <th className="px-4 py-2 font-bold">Recommendation</th>
                        <th className="px-4 py-2 font-bold">Cost</th>
                        <th className="px-4 py-2 font-bold">Why?</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="px-4 py-3 font-bold">Scheduling (Start)</td>
                        <td className="px-4 py-3">Google Calendar + Square</td>
                        <td className="px-4 py-3">Free</td>
                        <td className="px-4 py-3">Zero overhead to start.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-bold">Scheduling (Scale)</td>
                        <td className="px-4 py-3">Housecall Pro OR Jobber</td>
                        <td className="px-4 py-3">$49/mo</td>
                        <td className="px-4 py-3">Automates texts, invoices, and dispatch.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-bold">Airbnb Sync</td>
                        <td className="px-4 py-3">Turno</td>
                        <td className="px-4 py-3">Pay-per-clean</td>
                        <td className="px-4 py-3">Auto-syncs with Airbnb/VRBO calendars.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-bold">Accounting</td>
                        <td className="px-4 py-3">QuickBooks Self-Employed</td>
                        <td className="px-4 py-3">$15/mo</td>
                        <td className="px-4 py-3">Essential for taxes and tracking mileage.</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Essential Supply List (Initial Kit: $300-$500)">
            <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between border-b pb-1"><span>Vacuum (Shark/Bissell)</span> <span className="font-bold">$150</span></li>
                <li className="flex justify-between border-b pb-1"><span>Mop & Bucket (Spin mop)</span> <span className="font-bold">$40</span></li>
                <li className="flex justify-between border-b pb-1"><span>Microfiber Cloths (50 pack)</span> <span className="font-bold">$30</span></li>
                <li className="flex justify-between border-b pb-1"><span>All-Purpose Cleaner (Method) x3</span> <span className="font-bold">$20</span></li>
                <li className="flex justify-between border-b pb-1"><span>Glass Cleaner x2</span> <span className="font-bold">$8</span></li>
                <li className="flex justify-between border-b pb-1"><span>Disinfectant (Lysol) x3</span> <span className="font-bold">$18</span></li>
                <li className="flex justify-between border-b pb-1"><span>Toilet Brushes x3</span> <span className="font-bold">$15</span></li>
                <li className="flex justify-between border-b pb-1"><span>Trash Bags (Commercial)</span> <span className="font-bold">$20</span></li>
            </ul>
            <div className="mt-4 bg-gray-100 p-3 rounded text-xs text-gray-600">
                <strong>Pro Tip:</strong> Buy bulk at Sam's Club (3350 S Clack St). It pays for the membership in 2 trips.
            </div>
        </Card>

        <Card title="Automation Workflow">
            <div className="relative border-l-2 border-brand-black ml-3 space-y-6 pb-2">
                <div className="mb-8 ml-6">
                    <span className="absolute -left-3 bg-brand-red h-6 w-6 rounded-full border-4 border-white"></span>
                    <h4 className="font-bold text-sm">1. Booking Received</h4>
                    <p className="text-xs text-gray-500">Turno syncs with Airbnb calendar automatically.</p>
                </div>
                <div className="mb-8 ml-6">
                    <span className="absolute -left-3 bg-brand-black h-6 w-6 rounded-full border-4 border-white"></span>
                    <h4 className="font-bold text-sm">2. Confirmation Sent</h4>
                    <p className="text-xs text-gray-500">Auto-text to client: "We're scheduled for [Date]."</p>
                </div>
                <div className="mb-8 ml-6">
                    <span className="absolute -left-3 bg-brand-black h-6 w-6 rounded-full border-4 border-white"></span>
                    <h4 className="font-bold text-sm">3. Cleaning & Photos</h4>
                    <p className="text-xs text-gray-500">Checklist completed in app. Photos uploaded.</p>
                </div>
                <div className="ml-6">
                    <span className="absolute -left-3 bg-brand-black h-6 w-6 rounded-full border-4 border-white"></span>
                    <h4 className="font-bold text-sm">4. Payment & Review</h4>
                    <p className="text-xs text-gray-500">Card charged. "Review Request" text sent 24h later.</p>
                </div>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default Operations;
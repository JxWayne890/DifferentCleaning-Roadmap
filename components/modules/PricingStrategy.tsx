import React, { useState } from 'react';
import Card from '../ui/Card';

type PropertySize = '1BR' | '2BR' | '3BR' | '4BR';
type ServiceTier = 'standard' | 'sameDay' | 'afterHours';

const pricingData = {
  '1BR': { standard: 89, sameDay: 119, afterHours: 109 },
  '2BR': { standard: 129, sameDay: 169, afterHours: 149 },
  '3BR': { standard: 169, sameDay: 219, afterHours: 189 },
  '4BR': { standard: 209, sameDay: 269, afterHours: 229 },
};

const costData = {
  '1BR': { laborHours: 1.5, supplies: 3.00, overhead: 8.00 },
  '2BR': { laborHours: 2.0, supplies: 5.00, overhead: 10.00 },
  '3BR': { laborHours: 2.5, supplies: 7.00, overhead: 12.00 },
  '4BR': { laborHours: 3.5, supplies: 10.00, overhead: 15.00 },
};

const PricingStrategy: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<PropertySize>('2BR');
  const [selectedTier, setSelectedTier] = useState<ServiceTier>('standard');

  // Derived State
  const currentPricing = pricingData[selectedSize];
  const currentCosts = costData[selectedSize];

  // Calculation Logic
  const priceCharged = currentPricing[selectedTier];
  const laborRate = 15;
  const laborCost = currentCosts.laborHours * laborRate;
  const totalExpenses = laborCost + currentCosts.supplies + currentCosts.overhead;
  const netProfit = priceCharged - totalExpenses;
  const margin = Math.round((netProfit / priceCharged) * 100);

  return (
    <div className="space-y-6 text-gray-900">
      <Card title="Strategic Pricing Calculator">
        <p className="text-gray-700 mb-6">
          Do not charge hourly. Charge for the <strong>outcome</strong>. This calculator is based on market research for Abilene, positioned slightly above average due to your premium "Trust & Speed" guarantees.
        </p>
        
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
          {(Object.keys(pricingData) as PropertySize[]).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-3 rounded-lg font-bold text-lg transition-colors ${
                selectedSize === size 
                  ? 'bg-brand-red text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={() => setSelectedTier('standard')}
            className={`rounded-xl p-6 text-center transform transition hover:scale-105 border-2 cursor-pointer ${
              selectedTier === 'standard' 
                ? 'bg-white border-brand-black ring-2 ring-brand-black ring-offset-2' 
                : 'bg-white border-brand-black border-opacity-20 hover:border-opacity-100'
            }`}
          >
            <h3 className="text-gray-600 font-bold uppercase text-sm mb-2">Standard Turnover</h3>
            <div className="text-4xl font-extrabold text-gray-900 mb-2">${currentPricing.standard}</div>
            <p className="text-sm text-gray-500">Guaranteed 2-hr window</p>
          </button>
          
          <button 
            onClick={() => setSelectedTier('sameDay')}
            className={`rounded-xl p-6 text-center transform transition hover:scale-105 border-2 cursor-pointer ${
              selectedTier === 'sameDay' 
                ? 'bg-red-50 border-brand-red ring-2 ring-brand-red ring-offset-2' 
                : 'bg-red-50 border-brand-red border-opacity-20 hover:border-opacity-100'
            }`}
          >
            <h3 className="text-brand-red font-bold uppercase text-sm mb-2">Same-Day Premium</h3>
            <div className="text-4xl font-extrabold text-brand-red mb-2">${currentPricing.sameDay}</div>
            <p className="text-sm text-red-800">Emergency requests</p>
          </button>

          <button 
            onClick={() => setSelectedTier('afterHours')}
            className={`rounded-xl p-6 text-center transform transition hover:scale-105 border-2 cursor-pointer ${
              selectedTier === 'afterHours' 
                ? 'bg-gray-100 border-gray-600 ring-2 ring-gray-600 ring-offset-2' 
                : 'bg-gray-50 border-gray-300 hover:border-gray-500'
            }`}
          >
            <h3 className="text-gray-600 font-bold uppercase text-sm mb-2">After Hours (8PM+)</h3>
            <div className="text-4xl font-extrabold text-gray-800 mb-2">${currentPricing.afterHours}</div>
            <p className="text-sm text-gray-600">Night operations</p>
          </button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Add-On Menu">
          <table className="w-full text-sm text-left text-gray-900">
            <tbody className="divide-y divide-gray-100">
              <tr><td className="py-2 font-medium text-gray-900">Laundry (Full Set)</td><td className="font-bold text-right text-gray-900">$25 - $35</td></tr>
              <tr><td className="py-2 font-medium text-gray-900">Deep Clean Upgrade</td><td className="font-bold text-right text-gray-900">+$50 - $100</td></tr>
              <tr><td className="py-2 font-medium text-gray-900">Supply Restocking</td><td className="font-bold text-right text-gray-900">$15 - $50</td></tr>
              <tr><td className="py-2 font-medium text-gray-900">Oven Deep Clean</td><td className="font-bold text-right text-gray-900">$45</td></tr>
              <tr><td className="py-2 font-medium text-gray-900">Fridge Deep Clean</td><td className="font-bold text-right text-gray-900">$35</td></tr>
            </tbody>
          </table>
        </Card>

        <Card title={`Profitability Logic (${selectedSize} ${selectedTier === 'standard' ? 'Standard' : selectedTier === 'sameDay' ? 'Premium' : 'After Hours'})`}>
          <div className="space-y-3 text-sm text-gray-900">
            <div className="flex justify-between">
              <span className="text-gray-700">Price Charged:</span>
              <span className="font-bold text-gray-900">${priceCharged.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>Labor ({currentCosts.laborHours}hrs @ ${laborRate}):</span>
              <span>-${laborCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>Supplies:</span>
              <span>-${currentCosts.supplies.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>Overhead:</span>
              <span>-${currentCosts.overhead.toFixed(2)}</span>
            </div>
            <div className="h-px bg-gray-200 my-2"></div>
            <div className="flex justify-between text-lg font-bold text-green-700">
              <span>Net Profit:</span>
              <span>${netProfit.toFixed(2)} ({margin}% Margin)</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 italic">
              *Competitors charging $25/hr only make approx. $5-$10 profit on this job size. Value-based pricing wins.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PricingStrategy;
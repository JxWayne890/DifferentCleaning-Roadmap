import React from 'react';
import Card from '../ui/Card';
import { Target, Lightbulb, ShieldCheck } from 'lucide-react';

const Orientation: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border-l-8 border-brand-black rounded-r-xl shadow-sm p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 text-brand-black">Start Here: Your Strategic Vision</h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Malik, you are not just building a cleaning company. You are building a <span className="text-brand-red font-bold">hospitality logistics partner</span> for the 600+ Airbnb hosts in Abilene.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="h-full">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-red-100 rounded-full mb-4">
              <Target className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold mb-2">The Niche Strategy</h3>
            <p className="text-gray-600">
              Don't be a generalist. Abilene has plenty of maid services. Focus 100% on <strong>Airbnb Turnovers</strong> first. It's higher margin ($129+ per job) and demands specialized systems that competitors lack.
            </p>
          </div>
        </Card>

        <Card className="h-full">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-red-100 rounded-full mb-4">
              <ShieldCheck className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold mb-2">The Trust Factor</h3>
            <p className="text-gray-600">
              Hosts are terrified of bad reviews. You win by guaranteeing: 
              <br/>1. <strong>Speed</strong> (2-hour turnaround)
              <br/>2. <strong>Proof</strong> (15+ photos per clean)
              <br/>3. <strong>Recovery</strong> (Free re-clean in 24h).
            </p>
          </div>
        </Card>

        <Card className="h-full">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-red-100 rounded-full mb-4">
              <Lightbulb className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold mb-2">The System</h3>
            <p className="text-gray-600">
              Stop trading time for money. Charge for the <strong>outcome</strong>. Use technology (Turno, Housecall Pro) to automate scheduling so you can scale to 50 properties without burnout.
            </p>
          </div>
        </Card>
      </div>

      <Card title="Your Core Values (The Brand Voice)" className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-l-4 border-brand-black pl-4 py-2">
                <h4 className="font-bold text-lg">Reliability</h4>
                <p className="text-sm text-gray-600">We show up. 100% of the time. No excuses.</p>
            </div>
            <div className="border-l-4 border-brand-red pl-4 py-2">
                <h4 className="font-bold text-lg">Transparency</h4>
                <p className="text-sm text-gray-600">Upfront pricing. Photo proof. Honest communication.</p>
            </div>
            <div className="border-l-4 border-gray-500 pl-4 py-2">
                <h4 className="font-bold text-lg">Speed & Quality</h4>
                <p className="text-sm text-gray-600">Fast turnovers without cutting corners.</p>
            </div>
            <div className="border-l-4 border-brand-black pl-4 py-2">
                <h4 className="font-bold text-lg">Community</h4>
                <p className="text-sm text-gray-600">Abilene focused. Supporting local hosts.</p>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default Orientation;
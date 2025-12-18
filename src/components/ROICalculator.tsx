import { useState } from 'react';
import { Calculator, TrendingUp, IndianRupee, Zap } from 'lucide-react';

export default function ROICalculator() {
  const [systemSize, setSystemSize] = useState(5);
  const [electricityBill, setElectricityBill] = useState(5000);

  const costPerKw = 65000;
  const systemCost = systemSize * costPerKw;
  const subsidy = systemSize <= 3 ? systemSize * 26000 : 3 * 26000 + (systemSize - 3) * 13000;
  const netCost = systemCost - subsidy;

  const annualGeneration = systemSize * 1400;
  const annualSavings = electricityBill * 12;
  const paybackYears = (netCost / annualSavings).toFixed(1);
  const roi25Years = (annualSavings * 25 - netCost).toFixed(0);

  return (
    <section className="py-24 bg-gradient-to-br from-solar-blue to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Calculator className="w-5 h-5 text-solar-yellow" />
            <span className="text-white text-sm font-medium">Interactive ROI Tool</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See your potential returns with MNRE subsidy and 25-year performance projections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="glass-dark rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-8">Your Details</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-3">
                  System Size (kW)
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={systemSize}
                  onChange={(e) => setSystemSize(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-solar-yellow"
                />
                <div className="flex justify-between text-sm text-blue-200 mt-2">
                  <span>1 kW</span>
                  <span className="text-solar-yellow font-bold text-lg">{systemSize} kW</span>
                  <span>10 kW</span>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  Monthly Electricity Bill (₹)
                </label>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={electricityBill}
                  onChange={(e) => setElectricityBill(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-solar-yellow"
                />
                <div className="flex justify-between text-sm text-blue-200 mt-2">
                  <span>₹1,000</span>
                  <span className="text-solar-yellow font-bold text-lg">₹{electricityBill.toLocaleString()}</span>
                  <span>₹20,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-solar-yellow/10 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 text-solar-blue" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Investment</div>
                  <div className="text-2xl font-bold text-solar-blue">₹{netCost.toLocaleString()}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs text-gray-600 mb-1">System Cost</div>
                  <div className="text-lg font-bold text-gray-900">₹{systemCost.toLocaleString()}</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-xs text-gray-600 mb-1">MNRE Subsidy</div>
                  <div className="text-lg font-bold text-green-600">-₹{subsidy.toLocaleString()}</div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-solar-yellow" />
                  <span className="text-sm text-gray-600">Annual Generation</span>
                </div>
                <div className="text-xl font-bold text-solar-blue mb-1">{annualGeneration.toLocaleString()} kWh/year</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-solar-yellow to-yellow-500 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-solar-blue" />
                <div className="text-solar-blue text-sm font-bold">PROJECTED RETURNS</div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-solar-blue/80 text-sm mb-1">Annual Savings</div>
                  <div className="text-4xl font-bold text-solar-blue">₹{annualSavings.toLocaleString()}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-solar-blue/80 text-sm mb-1">Payback Period</div>
                    <div className="text-2xl font-bold text-solar-blue">{paybackYears} years</div>
                  </div>
                  <div>
                    <div className="text-solar-blue/80 text-sm mb-1">25-Year Returns</div>
                    <div className="text-2xl font-bold text-solar-blue">₹{(parseInt(roi25Years) / 100000).toFixed(1)}L</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-white text-solar-blue font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg">
              Get Detailed Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

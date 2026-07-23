import { useEffect } from 'react';
import { CheckCircle, Star } from 'lucide-react';
import ZohoLeadForm from '../components/ZohoLeadForm';

const benefits = [
  'Custom Rooftop Solar Generation Estimate (in kWp)',
  'Government Subsidy Calculation (Up to ₹78,000)',
  'Projected ROI & Electricity Bill Reduction',
];

export default function FreeFeasibilityReport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-16">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left / Top: Campaign copy */}
            <div>
              <span className="inline-block bg-orange-100 text-koku-dark font-semibold text-sm px-4 py-2 rounded-full mb-6">
                PM Surya Ghar Yojana Subsidies – Apply Before Quotas Fill Up
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-koku-dark leading-tight mb-6">
                Get Your Free Rooftop Solar Feasibility Report
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover your rooftop's exact power potential, calculate government subsidy savings, and lower your monthly electricity bills.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-koku-orange flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-5 py-3 shadow-sm">
                <Star className="h-5 w-5 text-koku-orange fill-koku-orange" />
                <span className="font-semibold text-koku-dark">4.9</span>
                <span className="text-gray-400">|</span>
                <span className="font-medium text-gray-700">1,400+ kWp Installed Since 2017</span>
              </div>
            </div>

            {/* Right / Bottom: Lead form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-koku-dark mb-1">
                  Check Your Eligibility &amp; Request Report
                </h2>
                <p className="text-sm text-gray-500">
                  Takes 30 seconds • 100% Free &amp; No Obligation
                </p>
              </div>

              <ZohoLeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

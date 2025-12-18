import { Search, Ruler, ShoppingCart, FileCheck, Zap, Settings } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      icon: Search,
      title: 'Site & Load Assessment',
      description: 'Comprehensive site evaluation and load analysis.',
      duration: '1–2 days',
    },
    {
      icon: Ruler,
      title: 'Engineering & Design',
      description: 'Technical drawings, system design and equipment selection.',
      duration: '3–5 days',
    },
    {
      icon: ShoppingCart,
      title: 'Procurement & Installation',
      description: 'Equipment procurement and professional installation.',
      duration: '7–14 days',
    },
    {
      icon: FileCheck,
      title: 'Approvals & Net Metering',
      description: 'DISCOM coordination and regulatory approvals.',
      duration: '15–30 days',
    },
    {
      icon: Zap,
      title: 'Commissioning & Handover',
      description: 'System testing, commissioning and client handover.',
      duration: '2–3 days',
    },
    {
      icon: Settings,
      title: 'O&M & AMC',
      description: 'Ongoing maintenance and monitoring services.',
      duration: 'Ongoing',
    },
  ];

  return (
    <section className="py-24" style={{ background: 'linear-gradient(to bottom, #FFF7EB, #FFFFFF)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-koku-dark">
            Our EPC Process
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-koku-orange"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Systematic approach ensuring quality, transparency, and on-time delivery.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 z-0 bg-gradient-to-r from-koku-orange via-yellow-500 to-koku-orange"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-koku-orange"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-koku-orange flex items-center justify-center font-bold text-lg shadow-lg text-koku-dark">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-orange-50 border-2 border-orange-200 flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-koku-orange" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-center text-koku-dark">{step.title}</h3>
                <p className="mb-4 text-center leading-relaxed text-gray-700">{step.description}</p>

                {/* Duration Badge */}
                <div className="flex justify-center">
                  <span className="px-4 py-2 bg-koku-orange text-koku-dark font-bold text-sm rounded-full shadow-sm">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-orange-50 border-2 border-koku-orange rounded-2xl px-8 py-6">
            <div>
              <div className="text-3xl font-bold text-koku-dark">30–60 Days</div>
              <div className="text-sm text-gray-700">Average Timeline</div>
            </div>
            <div className="w-px h-12 bg-orange-300"></div>
            <div>
              <div className="text-3xl font-bold text-koku-dark">98%</div>
              <div className="text-sm text-gray-700">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ClipboardCheck, Ruler, FileText, Hammer, Plug, Settings } from 'lucide-react';

export default function ProcessFlow() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Site Assessment',
      description: 'Technical feasibility study, shading analysis, and roof structural audit.',
      duration: '1-2 days',
    },
    {
      icon: Ruler,
      title: 'Engineering Design',
      description: 'CAD drawings, electrical SLD, civil engineering, and MNRE-compliant reports.',
      duration: '3-5 days',
    },
    {
      icon: FileText,
      title: 'Approvals & Permits',
      description: 'DISCOM net-metering, CEA compliance, building NOC, and subsidy documentation.',
      duration: '15-30 days',
    },
    {
      icon: Hammer,
      title: 'Procurement & Installation',
      description: 'Tier-1 module sourcing, structural mounting, civil work, and electrical wiring.',
      duration: '7-14 days',
    },
    {
      icon: Plug,
      title: 'Testing & Commissioning',
      description: 'Grid synchronization, IV curve testing, performance validation, and DISCOM inspection.',
      duration: '2-3 days',
    },
    {
      icon: Settings,
      title: 'Handover & Monitoring',
      description: 'System training, O&M contract, remote monitoring, and 25-year warranty activation.',
      duration: 'Ongoing',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-solar-blue mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic, compliance-driven approach ensuring quality, transparency, and on-time delivery.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-solar-blue via-solar-yellow to-solar-blue transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-solar-yellow"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-solar-blue to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <div className="w-16 h-16 rounded-xl bg-solar-yellow/10 flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-solar-blue" />
                </div>

                <h3 className="text-xl font-bold text-solar-blue mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">{step.description}</p>

                <div className="inline-flex items-center justify-center w-full">
                  <span className="px-4 py-2 bg-solar-yellow/10 text-solar-blue font-semibold text-sm rounded-full">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-solar-blue/5 rounded-2xl px-8 py-6 border border-solar-blue/10">
            <div>
              <div className="text-3xl font-bold text-solar-blue">30-60 Days</div>
              <div className="text-sm text-gray-600">Average Project Timeline</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-solar-blue">98%</div>
              <div className="text-sm text-gray-600">On-Time Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

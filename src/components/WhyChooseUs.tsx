import { CheckCircle2, Wrench, DollarSign, Clock, Users, FileCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      icon: CheckCircle2,
      title: 'Engineering Excellence',
      description: 'IIT-trained engineers with 15+ years of experience in solar EPC design and execution.',
    },
    {
      icon: DollarSign,
      title: 'Transparent ROI',
      description: 'Detailed financial modeling with payback periods, IRR, and lifecycle cost analysis.',
    },
    {
      icon: FileCheck,
      title: 'Full Compliance',
      description: 'MNRE-approved designs, CEA compliance, and seamless net-metering approvals.',
    },
    {
      icon: Wrench,
      title: 'Turnkey Solutions',
      description: 'End-to-end EPC services from design to commissioning and O&M support.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '98% of projects delivered within scheduled timeline with zero cost overruns.',
    },
    {
      icon: Users,
      title: 'Post-Installation Support',
      description: '25-year performance warranty backed by comprehensive AMC and monitoring services.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-solar-blue mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade solar solutions built on engineering rigor, financial transparency, and proven execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-solar-yellow"
            >
              <div className="w-14 h-14 rounded-lg bg-solar-blue/5 flex items-center justify-center mb-6 group-hover:bg-solar-yellow/10 transition-colors">
                <value.icon className="w-7 h-7 text-solar-blue group-hover:text-solar-yellow transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-solar-blue mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

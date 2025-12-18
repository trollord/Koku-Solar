import { Building2, Factory, Home, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential (CHSL)',
      capacity: '1 kW - 10 kW',
      description: 'Rooftop solar for housing societies with subsidies, net-metering, and group discount pricing.',
      features: ['MNRE Subsidy up to 40%', 'Net-metering facilitation', 'Society billing integration', '20-year performance'],
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Building2,
      title: 'Commercial',
      capacity: '10 kW - 500 kW',
      description: 'Cost reduction for offices, retail, and commercial complexes with fast payback and tax benefits.',
      features: ['30-40% accelerated depreciation', '3-5 year payback', 'Demand charge reduction', 'Green building credits'],
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Factory,
      title: 'Industrial',
      capacity: '500 kW - 10 MW+',
      description: 'High-capacity solar for manufacturing with open access, captive models, and energy audits.',
      features: ['Open access DISCOM approval', 'Captive consumption models', 'Power purchase agreements', 'ISO 50001 compliance'],
      image: 'https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-solar-blue mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solar EPC solutions for every segment with specialized technical and financial structures.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-blue/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-lg bg-solar-yellow flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-solar-blue" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-solar-blue">{service.title}</h3>
                  <span className="text-sm font-semibold text-solar-yellow bg-solar-yellow/10 px-3 py-1 rounded-full">
                    {service.capacity}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-solar-yellow/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-solar-yellow"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 bg-solar-blue text-white font-semibold rounded-lg hover:bg-solar-blue/90 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Home, Building2, Factory, Wrench, Monitor, DollarSign, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'CHSL Solar EPC',
      description: 'Complete solar solutions for housing societies to reduce common-area electricity costs with professional engineering and DISCOM coordination.',
      features: [
        'Feasibility & bill analysis',
        'Structural & roof assessment',
        'System sizing & engineering',
        'Net-metering documentation',
        'DISCOM liaisoning',
        'Installation & testing',
        'Monitoring dashboards',
        'AMC & cleaning',
        'Capex financing support'
      ],
      benefits: [
        'Lower common-area costs',
        'Predictable long-term savings',
        'Enhanced sustainability',
        'Payback typically ~4–5 years'
      ],
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Building2,
      title: 'Commercial Solar EPC',
      description: 'Solar solutions tailored for malls, hospitals, hotels, offices, schools and commercial properties with daytime usage.',
      features: [
        'Site & load study',
        'Engineering drawings',
        'Tier-1 procurement',
        'Installation & commissioning',
        'Monitoring systems',
        'AMC & cleaning',
        'Capex support',
        'Performance guarantees'
      ],
      benefits: [
        'Significant cost reduction',
        'Enhanced corporate sustainability',
        'Predictable energy costs',
        'Payback typically 3–4.5 years'
      ],
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Factory,
      title: 'Industrial Solar EPC',
      description: 'Solar solutions for factories, warehouses, logistics units and manufacturing facilities with heavy-duty requirements.',
      features: [
        'Structural engineering',
        'Heavy-duty mounting',
        'Electrical safety compliance',
        'Industrial layouts',
        'CEIG coordination',
        'Monitoring analytics',
        'AMC contracts',
        'Performance optimization'
      ],
      benefits: [
        'Reduced operational costs',
        'Industrial-grade reliability',
        'Compliance with safety standards',
        'Payback typically 3–4 years'
      ],
      image: 'https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Wrench,
      title: 'AMC & Cleaning',
      description: 'Scheduled maintenance and cleaning services to ensure high generation and equipment longevity.',
      features: [
        'Panel cleaning',
        'Electrical checks',
        'Inverter inspections',
        'Performance audits',
        'Preventive maintenance',
        'Emergency support',
        'Warranty management',
        'Performance reporting'
      ],
      benefits: [
        'Optimal system performance',
        'Extended equipment life',
        'Reduced downtime',
        'Maintained warranties'
      ],
      image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Monitor,
      title: 'Monitoring & Reporting',
      description: 'All plants include dashboard-based monitoring to track performance, uptime and inverter health.',
      features: [
        'Real-time tracking',
        'Fault alerts',
        'Monthly reports',
        'Analytics for committees & management',
        'Performance benchmarking',
        'Mobile app access',
        'Historical data',
        'Trend analysis'
      ],
      benefits: [
        'Proactive maintenance',
        'Performance optimization',
        'Transparent reporting',
        'Quick issue resolution'
      ],
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: DollarSign,
      title: 'Capex-Based Financing Support',
      description: 'We assist clients with Capex planning, EMI-based financing options and payback estimation. No PPA/Zero Capex models are offered.',
      features: [
        'Capex planning assistance',
        'EMI-based financing options',
        'Payback estimation',
        'ROI calculations',
        'Financial modeling',
        'Bank coordination',
        'Documentation support',
        'Transparent pricing'
      ],
      benefits: [
        'Clear financial planning',
        'Flexible payment options',
        'Transparent costs',
        'Ownership benefits'
      ],
      image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Network,
      title: 'Virtual Net Metering',
      description: 'For eligible high-rise CHSLs, we support VNM documentation, feasibility and meter mapping.',
      features: [
        'VNM feasibility study',
        'Documentation support',
        'Meter mapping',
        'DISCOM coordination',
        'Regulatory compliance',
        'System design',
        'Installation support',
        'Performance monitoring'
      ],
      benefits: [
        'Shared solar benefits',
        'Simplified billing',
        'Regulatory compliance',
        'Professional support'
      ],
      image: 'https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-koku-orange to-yellow-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineering-focused solar EPC for CHSL, Commercial and Industrial clients.
            </p>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-orange-50 to-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="bg-gradient-to-br from-koku-orange to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{service.description}</p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Provide</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-koku-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-200 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-koku-orange rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact#contact"
                  className="inline-block bg-gradient-to-r from-koku-orange to-yellow-500 text-koku-dark px-8 py-4 rounded-full font-semibold hover:from-koku-dark hover:to-gray-800 hover:text-white transition-all shadow-lg"
                >
                  Get a Free Assessment
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a free consultation with our solar experts and discover how much you can save.
          </p>
          <Link
            to="/contact#contact"
            className="bg-gradient-to-r from-koku-orange to-yellow-500 text-koku-dark px-8 py-4 rounded-full font-semibold text-lg hover:from-koku-dark hover:to-gray-800 hover:text-white transition-all shadow-lg"
          >
            Get Your Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
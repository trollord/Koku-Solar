import { useState } from 'react';
import { Home, Building2, Factory, Wrench, Monitor, DollarSign, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSegmented() {
  const services = [
    {
      icon: Home,
      title: 'CHSL Solar EPC',
      description: 'Complete solar solutions for housing societies to reduce common-area electricity costs.',
    },
    {
      icon: Building2,
      title: 'Commercial Solar EPC',
      description: 'Solar installations for malls, hospitals, hotels, offices and commercial properties.',
    },
    {
      icon: Factory,
      title: 'Industrial Solar EPC',
      description: 'Heavy-duty solar solutions for factories, warehouses and manufacturing facilities.',
    },
    {
      icon: Wrench,
      title: 'AMC & Cleaning Contracts',
      description: 'Scheduled maintenance and cleaning services for optimal performance.',
    },
    {
      icon: Monitor,
      title: 'Monitoring Dashboards',
      description: 'Real-time tracking and analytics for all solar installations.',
    },
    {
      icon: DollarSign,
      title: 'Capex-Based Financing Support',
      description: 'Assistance with Capex planning and EMI-based financing options.',
    },
    {
      icon: Network,
      title: 'Virtual Net Metering',
      description: 'VNM documentation and feasibility for eligible high-rise CHSLs.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-koku-dark">
            Our Services
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-koku-orange"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Engineering-focused solar EPC for CHSL, Commercial and Industrial clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-koku-orange"
            >
              <div className="w-16 h-16 rounded-lg bg-koku-orange flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-koku-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-koku-dark">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact#contact"
            className="inline-block bg-koku-orange text-koku-dark px-8 py-4 rounded-full font-semibold hover:bg-koku-dark hover:text-white transition-all shadow-lg"
          >
            Get a Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
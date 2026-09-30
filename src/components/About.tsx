import { Award, Users, Clock, CheckCircle2, Target, Eye, Building, BadgeCheck, Lightbulb, CheckCircle, Heart, TrendingUp } from 'lucide-react';
import SEO from './SEO';

export default function About() {
  const strengths = [
    {
      icon: Lightbulb,
      title: 'In-house Engineering & Design',
      description: 'Complete technical capabilities from feasibility to commissioning.',
    },
    {
      icon: Award,
      title: 'Professional DISCOM Coordination',
      description: 'Experienced in Maharashtra regulatory processes and approvals.',
    },
    {
      icon: CheckCircle,
      title: 'Compliance-First Installation',
      description: 'All installations follow state guidelines and electrical standards.',
    },
    {
      icon: Heart,
      title: 'OEM Warranty Support',
      description: 'Direct support for module, inverter and structure warranties.',
    },
    {
      icon: TrendingUp,
      title: 'Long-term O&M Capability',
      description: 'Comprehensive maintenance and monitoring services.',
    },
    {
      icon: BadgeCheck,
      title: 'Registered Vendors',
      description: 'Approved by MSEDCL (Vendor — Installer Category) & PM Surya Ghar Yojana',
    },
  ];

  const leadership = [
    {
      name: 'Chinmay Divekar',
      position: 'CEO',
      experience: '9+ years in Solar EPC',

    },
    {
      name: 'Pratiksha Gadmule',
      position: 'Engineering',
      experience: '5+ years in Power Systems',

    },
    {
      name: 'Ashok Nair',
      position: 'Operations',
      experience: '10+ years in Project Management',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us"
        description="Learn about Koku Solar — an engineering-led solar EPC company founded in 2024, based in Thane, Maharashtra. MSEDCL Registered Vendor with IIT-trained engineers delivering compliant solar installations."
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundColor: '#FF8C00', opacity: 0.8 }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            About Koku Solar
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#2D2D2D' }}>
            Leading solar EPC company delivering safe, compliant, and high-performance solar installations across Maharashtra
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8" style={{ color: '#2D2D2D' }}>
                Company Overview
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#2D2D2D' }}>
                We are a Thane-based Solar EPC company delivering safe, compliant, and high-performance solar plants for CHSLs, commercial facilities, and industrial clients. With over 50 successful installations across Maharashtra, we have established ourselves as a trusted partner in India's solar energy transition.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#2D2D2D' }}>
                Our comprehensive approach covers everything from initial feasibility studies to long-term maintenance, ensuring our clients achieve maximum returns on their solar investments while contributing to a sustainable future.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#2D2D2D' }}>
                We are officially empaneled under the <strong>PM Surya Ghar Muft Bijli Yojana</strong> and are a registered MSEDCL vendor (Installer Category). We maintain the highest standards of technical execution and regulatory compliance.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#2D2D2D' }}>
                Beyond execution, we are <strong>VNM Pioneers</strong>, actively leading regulatory advocacy and challenging MSEDCL to enforce Virtual Net Metering (VNM) for housing societies across Maharashtra.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Solar installation team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(45deg, rgba(255, 140, 0, 0.2), rgba(255, 127, 0, 0.2))' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24" style={{ backgroundColor: '#FFF7EB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderColor: '#FF8C00' }}>
              <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#FF8C00' }}>
                <Target className="w-8 h-8" style={{ color: '#2D2D2D' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2D2D2D' }}>Our Mission</h3>
              <p className="text-lg leading-relaxed" style={{ color: '#2D2D2D' }}>
                To accelerate India's transition to clean and economical solar energy through safe, high-quality EPC execution that delivers measurable value to our clients and communities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderColor: '#FF7F00' }}>
              <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#FF7F00' }}>
                <Eye className="w-8 h-8" style={{ color: '#2D2D2D' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2D2D2D' }}>Our Vision</h3>
              <p className="text-lg leading-relaxed" style={{ color: '#2D2D2D' }}>
                Affordable, sustainable, and smart energy for every community and business, making solar the preferred choice for energy independence across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2D2D2D' }}>
              Core Strengths
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#FF8C00' }}></div>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
              Built on engineering excellence, regulatory compliance, and transparent execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-orange-100 text-center"
              >
                <div className="bg-gradient-to-br from-koku-orange to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <strength.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24" style={{ backgroundColor: '#FFF7EB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2D2D2D' }}>
              Leadership Team
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#FF8C00' }}></div>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
              Experienced professionals driving innovation and excellence in solar energy solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#FF8C00' }}>
                  <Users className="w-12 h-12" style={{ color: '#2D2D2D' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#2D2D2D' }}>{leader.name}</h3>
                <p className="font-semibold mb-3" style={{ color: '#FF8C00' }}>{leader.position}</p>
                <p className="text-sm mb-2" style={{ color: '#2D2D2D' }}>{leader.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { Target, Users, Award, TrendingUp, Heart, Leaf, Lightbulb, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      icon: Leaf,
      title: 'Transparent Financial Analysis',
      description: 'Clear payback calculations and performance expectations.',
    },
  ];


  return (
    <div className="bg-white pt-16">
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-koku-orange to-yellow-500 bg-clip-text text-transparent">Koku Solar</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineering-led solar EPC company delivering CHSL, Commercial and Industrial solar plants across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <p className="text-lg text-gray-600 mb-4">
                Koku Solar is an engineering-led solar EPC company based in Thane, delivering CHSL, Commercial and Industrial solar plants across Maharashtra. Established on 22 April 2024, we focus on compliance, structured execution and long-term performance.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We specialize in complete EPC solutions — from initial feasibility studies to long-term maintenance, ensuring our clients achieve reliable returns on their solar investments while contributing to Maharashtra's clean energy transition.
              </p>
              <p className="text-lg text-gray-600">
                As an MSEDCL Registered Vendor in the Installer Category, we maintain the highest standards of technical execution and regulatory compliance.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Solar installation team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-koku-orange to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-6">
                <Target className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-orange-100">
                  To help Maharashtra's communities and enterprises transition to clean, reliable solar energy through disciplined engineering and transparent EPC delivery.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <TrendingUp className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-orange-100">
                  Sustainable, cost-effective energy accessible to every CHSL, commercial building and industrial facility.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-orange-100">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-white mb-2">415</div>
                <div className="text-orange-100">kWp Installed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-orange-100">On-Time Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-white mb-2">2024</div>
                <div className="text-orange-100">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Strengths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals driving innovation and excellence in solar energy solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-koku-orange to-yellow-500 mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-koku-orange font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">Team photo will be added later.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-koku-dark to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Compliance Statement</h2>
          <p className="text-xl text-blue-100 mb-8">
            We coordinate DISCOM and CEIG processes and ensure all installations follow state guidelines and approved electrical standards.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-koku-orange">MSEDCL Registered Vendor — Installer Category</p>
          </div>
          <Link
            to="/contact#contact"
            className="inline-block bg-koku-orange text-koku-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
import { Award, Users, Clock, CheckCircle2, Target, Eye, Building } from 'lucide-react';

export default function About() {
  const strengths = [
    {
      icon: Building,
      title: '50+ Installations',
      description: 'Completed projects across Maharashtra',
    },
    {
      icon: Award,
      title: 'Tier-1 Sourcing',
      description: 'Premium quality components only',
    },
    {
      icon: Users,
      title: 'Certified Engineers',
      description: 'IIT-trained technical team',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '98% projects delivered on schedule',
    },
    {
      icon: CheckCircle2,
      title: 'Design Excellence',
      description: 'Advanced engineering capabilities',
    },
    {
      icon: Target,
      title: 'MNRE Approved',
      description: 'Government certified vendor',
    },
  ];

  const leadership = [
    {
      name: 'Chinmay Divekar',
      position: 'CEO',
      experience: '9+ years in Solar EPC',
      
    },
    {
      name: 'Pratiksha gadmule',
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
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#2D2D2D' }}>
                We are a Thane-based Solar EPC company delivering safe, compliant, and high-performance solar plants for CHSLs, commercial facilities, and industrial clients. With over 50 successful installations across Maharashtra, we have established ourselves as a trusted partner in India's solar energy transition.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#2D2D2D' }}>
                Our comprehensive approach covers everything from initial feasibility studies to long-term maintenance, ensuring our clients achieve maximum returns on their solar investments while contributing to a sustainable future.
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2D2D2D' }}>
              Core Strengths
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#FF8C00' }}></div>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
              Built on engineering excellence, quality execution, and unwavering commitment to client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border hover:border-2"
                style={{ borderColor: '#FF7F00' }}
              >
                <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#FF8C00' }}>
                  <strength.icon className="w-8 h-8" style={{ color: '#2D2D2D' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2D2D2D' }}>{strength.title}</h3>
                <p className="leading-relaxed" style={{ color: '#2D2D2D' }}>{strength.description}</p>
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
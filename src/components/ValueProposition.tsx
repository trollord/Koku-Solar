import { Settings, TrendingUp, FileCheck, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ValueProposition() {
  const values = [
    {
      icon: Settings,
      title: 'End-to-End EPC Execution',
      description: 'Design, engineering, procurement, installation, testing, commissioning and O&M — all handled in-house.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Clarity',
      description: 'System sizing based on real consumption patterns; transparent savings expectations.',
    },
    {
      icon: FileCheck,
      title: 'Approvals & Liaisoning',
      description: 'DISCOM paperwork, drawings, documentation and CEIG coordination handled professionally.',
    },
    {
      icon: DollarSign,
      title: 'Reliable Payback',
      description: 'Typical payback for CHSL and C&I customers ranges from 3–5 years depending on tariff and daytime load.',
    },
  ];

  return (
    <section className="py-24" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FFF7EB)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-koku-dark">
            Why <span className="bg-gradient-to-r from-koku-orange to-yellow-500 bg-clip-text text-transparent">Koku Solar</span>?
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#FF8C00' }}></div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#333333' }}>
            Engineering-first EPC built on clarity, discipline and real performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-2"
              style={{ borderColor: '#FF8C00' }}
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors" style={{ backgroundColor: '#FF8C00' }}>
                <value.icon className="w-8 h-8 transition-colors" style={{ color: '#2D2D2D' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2D2D2D' }}>{value.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: '#333333' }}>{value.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact#contact"
            className="inline-block bg-koku-orange text-koku-dark px-8 py-4 rounded-full font-semibold hover:bg-koku-dark hover:text-white transition-all shadow-lg"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
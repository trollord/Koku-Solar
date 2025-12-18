import { Award, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-koku-dark via-koku-black to-koku-dark overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-koku-orange opacity-85"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Main Headlines */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-koku-dark">
              Earn While the
              <br />
              <span className="text-white">Sun Shines</span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl text-koku-dark">
              Engineering-led solar EPC solutions for CHSL, Commercial and Industrial clients across Maharashtra — from design to commissioning with clarity, compliance and proven performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to="/contact#contact"
                className="px-8 py-4 font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-koku-dark text-white hover:bg-white hover:text-koku-dark"
              >
                Get a Free Assessment
              </Link>
              <Link 
                to="/projects"
                className="px-8 py-4 font-bold rounded-lg transition-all backdrop-blur-sm border-2 bg-transparent text-koku-dark border-koku-dark hover:bg-koku-dark hover:text-white text-center"
              >
                View Our Projects
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg p-6 flex items-center gap-4 bg-koku-dark bg-opacity-80">
                <Award className="w-10 h-10 flex-shrink-0 text-white" />
                <div>
                  <div className="text-lg font-bold text-white">MSEDCL Registered</div>
                  <div className="text-sm text-koku-orange-light">Vendor — Installer Category</div>
                </div>
              </div>

              <div className="rounded-lg p-6 flex items-center gap-4 bg-koku-dark bg-opacity-80">
                <Shield className="w-10 h-10 flex-shrink-0 text-white" />
                <div>
                  <div className="text-lg font-bold text-white">Compliance-First</div>
                  <div className="text-sm text-koku-orange-light">Installations</div>
                </div>
              </div>

              <div className="rounded-lg p-6 flex items-center gap-4 bg-koku-dark bg-opacity-80">
                <Clock className="w-10 h-10 flex-shrink-0 text-white" />
                <div>
                  <div className="text-lg font-bold text-white">OEM Warranties</div>
                  <div className="text-sm text-koku-orange-light">Modules, Inverters, Structures</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </>
  );
}
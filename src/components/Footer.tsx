import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const services = [
    'CHSL Solar Solutions',
    'Commercial Solar EPC',
    'Industrial Solar Plants',
    'Net Metering Setup',
    'Government Approvals',
    'O&M & AMC Services',
  ];

  const company = [
    'About Us',
    'Leadership Team',
    'Certifications',
    'Core Strengths',
    'Careers',
    'Contact Us',
  ];

  const projects = [
    'Featured Projects',
    'Case Studies',
    'Client Testimonials',
    'Project Gallery',
    'Blog',
    'Solar News',
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: '#2D2D2D' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF8C00' }}>
                <Sun className="w-7 h-7" style={{ color: '#2D2D2D' }} />
              </div>
              <div>
                <div className="text-2xl font-bold">Koku Solar</div>
                <div className="text-sm" style={{ color: '#FF7F00' }}>Powering Maharashtra with Solar</div>
              </div>
            </div>

            <p className="leading-relaxed mb-6" style={{ color: '#FFFFFF' }}>
              Leading solar EPC company specializing in turnkey solar solutions for CHSL, commercial, and industrial clients across Maharashtra.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#FF8C00' }} />
                <span style={{ color: '#FFFFFF' }}>
                  Office 204, Tech Plaza, Ghodbunder Road,
                  <br />
                  Thane (W) - 400607, Maharashtra
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: '#FF8C00' }} />
                <a href="tel:+919082566478" className="hover:transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}>
                  +91 90825 66478
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: '#FF8C00' }} />
                <a href="mailto:info@kokusolar.com" className="hover:transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}>
                  info@kokusolar.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:transition-colors text-sm" style={{ color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:transition-colors text-sm" style={{ color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Projects & Blog</h3>
            <ul className="space-y-2">
              {projects.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:transition-colors text-sm" style={{ color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: '#2D2D2D' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm" style={{ color: '#FFFFFF' }}>
              © 2024 Koku Solar. MNRE Approved Vendor. All rights reserved.
            </div>

            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF8C00'; e.currentTarget.style.color = '#2D2D2D'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.color = '#FFFFFF'; }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF8C00'; e.currentTarget.style.color = '#2D2D2D'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.color = '#FFFFFF'; }}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF8C00'; e.currentTarget.style.color = '#2D2D2D'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.color = '#FFFFFF'; }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}>
                Privacy Policy
              </a>
              <a href="#" className="hover:transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function FooterNav() {
  const services = [
    'CHSL Solar EPC',
    'Commercial Solar EPC',
    'Industrial Solar EPC',
    'AMC & Cleaning',
    'Monitoring',
    'Capex Financing Support',
    'Virtual Net Metering',
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Blog', path: '/blog' }, // temporarily hidden
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-koku-dark text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/image.png"
                alt="Koku Solar"
                className="h-12 w-auto"
              />
            </div>

            <p className="leading-relaxed mb-6 text-white">
              Engineering-led solar EPC company specializing in CHSL, commercial, and industrial solar solutions across Maharashtra.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-koku-orange" />
                <span className="text-white">
                  1908, Solus Building, Hiranandani Estate, Ghodbunder Road
                  <br />
                  Thane (W) – 400607, Maharashtra
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-koku-orange" />
                <a href="tel:+918369117558" className="text-white hover:text-koku-orange transition-colors">
                  +91 83691 17558
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-koku-orange" />
                <a href="mailto:info@kokusolar.com" className="text-white hover:text-koku-orange transition-colors">
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
                  <Link to="/services" className="text-white hover:text-koku-orange transition-colors text-sm cursor-pointer">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-white hover:text-koku-orange transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61591260590853"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-koku-orange hover:text-koku-dark transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/KokuSolarIndia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-koku-orange hover:text-koku-dark transition-all"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kokusolarindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-koku-orange hover:text-koku-dark transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/kokusolar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-koku-orange hover:text-koku-dark transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <Link
              to="/contact#contact"
              className="inline-block bg-koku-orange text-koku-dark px-6 py-2 rounded-lg font-semibold hover:bg-white transition-all shadow-lg text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white">
              © 2025 Koku Solar. MSEDCL Registered Vendor — Installer Category. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white hover:text-koku-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-koku-orange transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
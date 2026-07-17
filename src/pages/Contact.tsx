import { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    // Zoho form script
    function wfa_pstMesgFrmFom(evt) {
      if (evt.origin === 'https://crm.zoho.in' || evt.origin === 'https://crm.zohopublic.in') {
        var loc_obj = JSON.stringify({
          origin: window.location.origin,
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash
        });
        evt.source.postMessage(('prnt_wnd_pg_lc_rc_frm_prwindow_' + loc_obj), evt.origin);
      }
    }
    window.addEventListener('message', wfa_pstMesgFrmFom, false);

    // Cleanup
    return () => {
      window.removeEventListener('message', wfa_pstMesgFrmFom, false);
    };
  }, []);

  return (
    <div className="bg-white pt-16">
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="bg-gradient-to-r from-koku-orange to-yellow-500 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our solar solutions and how we can help your project succeed.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Request a Quote</h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed assessment.
              </p>
              
              {/* Zoho Form Embed Container */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="zoho-form-container flex justify-center">
                  <iframe
                    width="610"
                    height="520"
                    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=0a39ff9f2a65b70c6b5af1f0e9261bbf6722549867e04d953bf6c040cf698065d0f808e5969ad44b4db02d49d68523cagid82c72a471c1362e8cbd6d3270ccd7518830464839e45dcd396f955fec3d8e033"
                    frameBorder="0"
                    title="Solar Assessment Form"
                    className="rounded-lg max-w-full"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Secure form powered by Zoho CRM
                </p>
              </div>
            </div>

            {/* Contact Information Section */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                To request a quote, schedule a solar assessment, or speak with our team, please contact us using the details below.
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Koku Solar</h3>
                
                <div className="space-y-4 text-lg">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-koku-orange flex-shrink-0 mt-1" />
                    <div className="text-gray-700">
                      1908, Solus Building<br />
                      Hiranandani Estate, Ghodbunder Road<br />
                      Thane (W) – 400607
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-koku-orange" />
                    <a href="tel:+919082566478" className="text-gray-700 hover:text-koku-orange transition-colors">
                      +91 90825 66478
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-koku-orange" />
                    <a href="mailto:info@kokusolar.com" className="text-gray-700 hover:text-koku-orange transition-colors">
                      info@kokusolar.com
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-orange-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                  <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>

                <div className="mt-6 pt-6 border-t border-orange-200">
                  <p className="text-sm text-gray-600 font-medium">
                    MSEDCL Registered Vendor — Installer Category
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Prefer to call or email directly? We're here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="/contact#contact"
                className="flex items-center justify-center space-x-3 bg-koku-orange text-koku-dark px-6 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all shadow-lg"
              >
                <span>Get a Quote</span>
              </a>
              
              <a
                href="/contact#contact"
                className="flex items-center justify-center space-x-3 bg-koku-dark text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
              >
                <span>Schedule Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600">
              We serve clients across Maharashtra with specialized solar EPC solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mumbai Metropolitan Region</h3>
              <p className="text-gray-600">Mumbai, Thane, Navi Mumbai, Kalyan-Dombivli</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pune Region</h3>
              <p className="text-gray-600">Pune, Pimpri-Chinchwad, Aurangabad</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Other Maharashtra Cities</h3>
              <p className="text-gray-600">Nashik, Nagpur, Solapur, Kolhapur</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about our solar EPC services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the typical payback period for solar installations?</h3>
              <p className="text-gray-700">Payback periods typically range from 3-5 years depending on your electricity tariff, consumption pattern, and system size. CHSL projects usually see 4-5 years, while commercial and industrial installations often achieve 3-4 years.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you handle DISCOM approvals and net metering?</h3>
              <p className="text-gray-700">Yes, we handle all DISCOM coordination, net metering applications, and regulatory approvals as part of our comprehensive EPC service. This includes documentation, site inspections, and meter installation coordination.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What financing options do you offer?</h3>
              <p className="text-gray-700">We support Capex-based financing including EMI options and bank coordination. We do not offer PPA or zero-Capex models, ensuring you own your solar system and maximize long-term benefits.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What maintenance services do you provide?</h3>
              <p className="text-gray-700">We offer comprehensive AMC services including regular cleaning, electrical inspections, performance monitoring, and preventive maintenance to ensure optimal system performance throughout its 25-year lifespan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-koku-dark to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Solar Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a professional assessment and detailed proposal for your CHSL, commercial, or industrial facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact#contact"
              className="bg-koku-orange text-koku-dark px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all shadow-lg"
            >
              Request Assessment
            </a>
            <a
              href="/contact#contact"
              className="bg-transparent border-2 border-koku-orange text-koku-orange px-8 py-4 rounded-full font-semibold hover:bg-koku-orange hover:text-koku-dark transition-all"
            >
              Contact Us
            </a>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-600">
            <p className="text-sm text-gray-300">
              MSEDCL Registered Vendor — Installer Category | Serving Maharashtra since 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
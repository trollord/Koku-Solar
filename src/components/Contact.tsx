import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Upload, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    monthlyBill: '',
    city: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const serviceRegions = [
    'Mumbai Metropolitan Region',
    'Thane District',
    'Pune & PCMC',
    'Nashik Region',
    'Aurangabad Zone',
    'Nagpur & Vidarbha',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundColor: '#F39A1E', opacity: 0.8 }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
            Get a Free Solar Assessment
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#333333' }}>
            Within 24 Hours - Professional site evaluation and customized solar proposal
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-8" style={{ color: '#1A1A1A' }}>
                  Project Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                        style={{ focusBorderColor: '#F39A1E' }}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                        style={{ focusBorderColor: '#F39A1E' }}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                        style={{ focusBorderColor: '#F39A1E' }}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                        style={{ focusBorderColor: '#F39A1E' }}
                      >
                        <option value="">Select project type</option>
                        <option value="CHSL">CHSL / Residential Society</option>
                        <option value="Commercial">Commercial Building</option>
                        <option value="Industrial">Industrial Facility</option>
                        <option value="Individual">Individual Home</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                        Monthly Electricity Bill (₹)
                      </label>
                      <input
                        type="number"
                        name="monthlyBill"
                        value={formData.monthlyBill}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                        style={{ focusBorderColor: '#F39A1E' }}
                        placeholder="e.g., 15000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                        style={{ focusBorderColor: '#F39A1E' }}
                        placeholder="e.g., Thane, Mumbai, Pune"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                      Roof Photos Upload
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                      <Upload className="w-12 h-12 mx-auto mb-4" style={{ color: '#F39A1E' }} />
                      <p className="text-sm" style={{ color: '#333333' }}>
                        Drag & drop roof photos here, or <span className="font-semibold" style={{ color: '#F39A1E' }}>click to browse</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        JPG, PNG files up to 10MB each
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors resize-none"
                      style={{ focusBorderColor: '#F39A1E' }}
                      placeholder="Tell us about your project requirements, timeline, or any specific questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg"
                    style={{ 
                      backgroundColor: '#1A1A1A', 
                      color: '#FFFFFF',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F39A1E';
                      e.currentTarget.style.color = '#1A1A1A';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1A1A1A';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    <Send className="w-5 h-5" />
                    Get Free Assessment
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="rounded-2xl p-8 text-white shadow-2xl" style={{ backgroundColor: '#F39A1E' }}>
                <h3 className="text-2xl font-bold mb-8" style={{ color: '#1A1A1A' }}>
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>Phone</h4>
                      <p style={{ color: '#1A1A1A' }}>+91 98765 43210</p>
                      <p className="text-sm" style={{ color: '#333333' }}>Mon-Sat, 9 AM - 7 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>Email</h4>
                      <p style={{ color: '#1A1A1A' }}>info@kokusolar.com</p>
                      <p className="text-sm" style={{ color: '#333333' }}>24-hour response time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>Address</h4>
                      <p style={{ color: '#1A1A1A' }}>
                        Office 204, Tech Plaza<br />
                        Ghodbunder Road<br />
                        Thane (W) - 400607
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>Response Time</h4>
                      <p style={{ color: '#1A1A1A' }}>Free assessment within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t" style={{ borderColor: '#1A1A1A' }}>
                  <h4 className="font-semibold mb-4" style={{ color: '#1A1A1A' }}>Service Regions</h4>
                  <ul className="space-y-2">
                    {serviceRegions.map((region, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1A1A1A' }}></div>
                        <span className="text-sm" style={{ color: '#1A1A1A' }}>{region}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
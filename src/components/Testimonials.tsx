import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Mehta',
      role: 'Secretary, Shree Ganesh CHSL',
      location: 'Thane West',
      rating: 5,
      text: 'The entire process was seamless. From subsidy paperwork to MSEDCL net-metering, they handled everything. Our society is now saving ₹25,000 monthly on electricity bills.',
      project: '120 kW Rooftop Installation',
    },
    {
      name: 'Priya Sharma',
      role: 'CFO, TechCorp Solutions',
      location: 'Ghodbunder Road',
      rating: 5,
      text: 'Professional execution with zero downtime. The ROI projections were accurate, and we achieved payback in 4.2 years. Their AMC support is excellent.',
      project: '500 kW Commercial Solar',
    },
    {
      name: 'Amit Desai',
      role: 'Plant Head, Bhiwandi Industries',
      location: 'Bhiwandi MIDC',
      rating: 5,
      text: 'We needed open access compliance and DISCOM coordination for our 2 MW project. Their engineering team delivered ahead of schedule with complete documentation.',
      project: '2 MW Industrial Installation',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-solar-blue mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by homeowners, businesses, and industries across Thane for quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-solar-yellow rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-solar-blue" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-solar-yellow text-solar-yellow" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-gray-100">
                <div className="font-bold text-solar-blue text-lg mb-1">{testimonial.name}</div>
                <div className="text-sm text-gray-600 mb-1">{testimonial.role}</div>
                <div className="text-sm text-gray-500 mb-3">{testimonial.location}</div>
                <div className="inline-block px-3 py-1 bg-solar-blue/5 text-solar-blue text-xs font-semibold rounded-full">
                  {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-solar-blue/5 rounded-2xl p-12 text-center border border-solar-blue/10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-solar-blue mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-solar-blue mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-solar-blue mb-2">98%</div>
              <div className="text-gray-600">Referral Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-solar-blue mb-2">100%</div>
              <div className="text-gray-600">Project Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

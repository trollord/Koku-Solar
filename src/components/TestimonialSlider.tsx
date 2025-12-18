import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Koku Solar recently completed a 90 kW solar power installation at our plant in Khalapur, Raigad, and we are extremely pleased with the results. Their team delivered high-quality execution at every stage—right from planning and installation to system integration. The workmanship was excellent, timelines were met without disruption to our operations.",
      author: "Dnyanesh M. Divekar",
      location: "Executive Director, Mec Elec Industrial Services",
      rating: 5,
      project: "90 kW Industrial Installation",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      text: "Our society had been postponing solar for years because we thought the process would be complicated. Koku Solar handled everything — approvals, net-metering, installation, even maintenance. We now save over ₹1.5 lakh a year on society bills. It was the smoothest project we've ever done.",
      author: "Devendra Kulai",
      location: "Society Secretary",
      rating: 5,
      project: "CHSL Solar Installation",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      text: "Koku Solar exceeded our expectations. Their engineering accuracy, documentation, and execution were outstanding. Our electricity bill dropped by over 70%, and the system performance is consistently above projections. The entire project was delivered on time with complete transparency.",
      author: "Mahesh Nagthane",
      location: "Business Owner",
      rating: 5,
      project: "Commercial Solar System",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-koku-dark">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-koku-orange"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Trusted by CHSL, commercial, and industrial clients across Maharashtra for quality and reliability.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl p-12 shadow-2xl border-2 border-koku-orange relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200 rounded-full translate-y-12 -translate-x-12"></div>

            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-koku-orange flex items-center justify-center">
              <Quote className="w-8 h-8 text-koku-dark" />
            </div>

            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-koku-orange text-koku-orange" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-center mb-8 italic text-koku-dark">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-koku-orange">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-koku-dark">{testimonials[currentSlide].author}</div>
                  <div className="text-sm text-gray-700">{testimonials[currentSlide].location}</div>
                  <div className="text-xs font-semibold mt-1 text-koku-orange">
                    {testimonials[currentSlide].project}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-koku-orange hover:text-koku-dark transition-all group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-koku-orange hover:text-koku-dark transition-all group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-koku-orange' : 'bg-orange-300 hover:bg-orange-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-12 border-2 border-koku-orange">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-koku-dark">50+</div>
              <div className="text-gray-700">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-koku-dark">4.9/5</div>
              <div className="text-gray-700">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-koku-dark">98%</div>
              <div className="text-gray-700">Referral Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-koku-dark">100%</div>
              <div className="text-gray-700">Project Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
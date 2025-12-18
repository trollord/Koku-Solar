import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import ServicesSegmented from '../components/ServicesSegmented';
import ProcessTimeline from '../components/ProcessTimeline';
import ProjectGallery from '../components/ProjectGallery';
import TestimonialSlider from '../components/TestimonialSlider';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      
      {/* Brand Story Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
            <div className="w-20 h-20 rounded-full bg-koku-orange flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-koku-dark font-bold">米</span>
            </div>
            
            <h2 className="text-3xl font-bold text-koku-dark mb-6">Why the name "Koku"?</h2>
            
            <div className="mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                "Koku" is a Japanese term representing the amount of rice needed to feed a family for one year. It symbolizes dependable, life-sustaining energy — the same principle behind Koku Solar's mission to deliver safe, reliable solar power solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ValueProposition />
      <ServicesSegmented />
      <ProcessTimeline />
      <TestimonialSlider />
    </div>
  );
}
import { MapPin, Zap, TrendingDown, Calendar } from 'lucide-react';

export default function FeaturedProjects() {
  const projects = [
    {
      name: 'Majiwada CHSL Society',
      location: 'Thane West',
      capacity: '150 kW',
      annualSavings: '₹18.5L',
      co2Offset: '185 tonnes/year',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
      type: 'Residential',
    },
    {
      name: 'Tech Park Commercial',
      location: 'Ghodbunder Road',
      capacity: '750 kW',
      annualSavings: '₹92L',
      co2Offset: '920 tonnes/year',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
      type: 'Commercial',
    },
    {
      name: 'Manufacturing Unit',
      location: 'Bhiwandi',
      capacity: '2.5 MW',
      annualSavings: '₹3.1Cr',
      co2Offset: '3,100 tonnes/year',
      image: 'https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
      type: 'Industrial',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-solar-blue mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real installations across Thane with measurable performance and verified savings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 bg-solar-yellow text-solar-blue text-xs font-bold rounded-full">
                    {project.type}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-solar-blue/5 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-solar-yellow" />
                      <span className="text-xs text-gray-600 font-medium">Capacity</span>
                    </div>
                    <div className="text-xl font-bold text-solar-blue">{project.capacity}</div>
                  </div>

                  <div className="bg-solar-blue/5 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="w-4 h-4 text-solar-yellow" />
                      <span className="text-xs text-gray-600 font-medium">Annual Savings</span>
                    </div>
                    <div className="text-xl font-bold text-solar-blue">{project.annualSavings}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">CO₂ Offset</span>
                    <span className="text-sm font-semibold text-solar-blue">{project.co2Offset}</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Commissioned
                    </span>
                    <span className="text-sm font-semibold text-solar-blue">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-solar-blue to-blue-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Solar Journey?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ satisfied customers who have already made the switch to clean, cost-effective solar energy.
          </p>
          <button className="px-8 py-4 bg-solar-yellow text-solar-blue font-bold rounded-lg hover:bg-yellow-400 transition-all shadow-lg">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

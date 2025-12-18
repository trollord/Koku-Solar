import { useState } from 'react';
import { MapPin, Zap, CheckCircle, Clock, FileText, Filter } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const completedProjects = [
    { client: 'Romell Sharaddha', location: 'Mumbai', type: 'Residential', capacity: '31 kWp', status: 'Completed' },
    { client: 'Jajoo Enterprises', location: 'Mumbai', type: 'Residential', capacity: '10 kWp', status: 'Completed' },
    { client: 'Balaji Symphony', location: 'Panvel', type: 'Residential', capacity: '32 kWp', status: 'Completed' },
    { client: 'Crest Sayaji', location: 'Mumbai', type: 'Residential', capacity: '8 kWp', status: 'Completed' },
    { client: 'Municipal Schools', location: 'Mumbai', type: 'Commercial', capacity: '24 kWp', status: 'Completed' },
    { client: 'Corsica CHSL', location: 'Hiranandani Estate, Thane', type: 'Residential', capacity: '20 kWp', status: 'Completed' },
    { client: 'Brookhill CHSL', location: 'Hiranandani Estate, Thane', type: 'Residential', capacity: '42 kWp', status: 'Completed' },
    { client: 'Royce CHSL', location: 'Hiranandani Estate, Thane', type: 'Residential', capacity: '65 kWp', status: 'Completed' },
    { client: 'Quality Plastics', location: 'Wagle Estate, Thane', type: 'Industrial', capacity: '40 kWp', status: 'Completed' },
    { client: 'Woodville CHSL', location: 'Hiranandani Estate, Thane', type: 'Residential', capacity: '50 kWp', status: 'Completed' },
    { client: 'Sayaji Crest', location: 'Goregaon', type: 'Residential', capacity: '8 kWp', status: 'Completed' },
    { client: 'Sayaji Elvira', location: 'Goregaon', type: 'Residential', capacity: '8 kWp', status: 'Completed' },
    { client: 'Powercraft', location: 'Borivali', type: 'Commercial', capacity: '10 kWp', status: 'Completed' },
    { client: 'Romell Shraddha CHSL', location: 'Borivali', type: 'Residential', capacity: '31 kWp', status: 'Completed' },
    { client: 'Balaji Symphony CHSL', location: 'Panvel', type: 'Residential', capacity: '32 kWp', status: 'Completed' },
    { client: 'CJ Solitaire', location: 'Ghodbunder Road, Thane', type: 'Residential', capacity: '165 kWp', status: 'Completed' },
    { client: 'Mec Elec', location: 'Khalapur', type: 'Industrial', capacity: '90 kWp', status: 'Completed' },
    { client: 'Sukur C', location: 'Kasarwadavli, Thane', type: 'Residential', capacity: '19 kWp', status: 'Completed' },
    { client: 'Poplar', location: 'Manpada, Thane', type: 'Residential', capacity: '25 kWp', status: 'Completed' },
    { client: 'Bhoomi Acres M', location: 'Near Hiranandani Estate, Thane', type: 'Residential', capacity: '30 kWp', status: 'Completed' },
    { client: 'Platinum Lawns CHSL', location: 'Kasarwadavli, Thane', type: 'Residential', capacity: '60 kWp', status: 'Completed' },
    { client: 'Vijay Residency CHSL', location: 'Near Hiranandani Estate, Thane', type: 'Residential', capacity: '31 kWp', status: 'Completed' },
    { client: 'Runwal Garden City Aster CHSL', location: 'Balkum, Thane', type: 'Residential', capacity: '29 kWp', status: 'Completed' },
  ];

  const underExecutionProjects = [
    { client: 'Regency Towers CHSL', location: 'Anandnagar, Thane', type: 'Residential', capacity: '221 kWp', status: 'Under Execution' },
    { client: 'Kalpataru Aura 1EFG CHSL', location: 'Ghatkopar', type: 'Residential', capacity: '100 kWp', status: 'Under Execution' },
    { client: 'Chestnut CHSL', location: 'Thane', type: 'Residential', capacity: '43.8 kWp', status: 'Under Execution' },
    { client: 'Runwal Garden City Iris CHSL', location: 'Balkum, Thane', type: 'Residential', capacity: '37 kWp', status: 'Under Execution' },
    { client: 'Sonal Laxmi CHSL', location: 'Thane', type: 'Residential', capacity: '19 kWp', status: 'Under Execution' },
  ];

  const ordersInHandProjects = [
    { client: 'Royce CHSL', location: 'Hiranandani Estate, Thane', type: 'VNM', capacity: '100 kWp', status: 'Orders in Hand' },
    { client: 'Brookhill CHSL', location: 'Hiranandani Estate, Thane', type: 'VNM', capacity: '320 kWp', status: 'Orders in Hand' },
    { client: 'Trebecca CHSL', location: 'Hiranandani Estate, Thane', type: 'VNM', capacity: '285 kWp', status: 'Orders in Hand' },
    { client: 'Harmony CHSL', location: 'Hiranandani Estate, Thane', type: 'VNM', capacity: '100 kWp', status: 'Orders in Hand' },
    { client: 'Ivy Courtyard CHSL', location: 'Pokhran Road, Thane', type: 'VNM', capacity: '100 kWp', status: 'Orders in Hand' },
    { client: 'Silver Oak CHSL', location: 'Ghodbunder Road, Thane', type: 'VNM', capacity: '100 kWp', status: 'Orders in Hand' },
    { client: 'Hawamahal CHSL', location: 'Manpada, Thane', type: 'VNM', capacity: '130 kWp', status: 'Orders in Hand' },
    { client: 'Unique Greens CHSL', location: 'Ghodbunder Road, Thane', type: 'VNM', capacity: '150 kWp', status: 'Orders in Hand' },
    { client: 'Lake Enclave', location: 'Hiranandani Estate, Thane', type: 'VNM', capacity: '500 kWp', status: 'Orders in Hand' },
  ];

  const consultantProjects = [
    { client: 'Lodha World View', location: 'Lower Parel', type: 'Green Open Access', capacity: '2000 kWp', status: 'Project Consultant' },
  ];

  const allProjects = [...completedProjects, ...underExecutionProjects, ...ordersInHandProjects, ...consultantProjects];

  const getFilteredProjects = () => {
    if (filter === 'all') return allProjects;
    return allProjects.filter(project => 
      project.type.toLowerCase().replace(' ', '-') === filter ||
      (filter === 'vnm' && project.type === 'VNM') ||
      (filter === 'green-open-access' && project.type === 'Green Open Access')
    );
  };

  const filteredProjects = getFilteredProjects();

  // Calculate totals
  const completedCapacity = completedProjects.reduce((sum, project) => sum + parseFloat(project.capacity), 0);
  const underExecutionCapacity = underExecutionProjects.reduce((sum, project) => sum + parseFloat(project.capacity), 0);
  const ordersCapacity = ordersInHandProjects.reduce((sum, project) => sum + parseFloat(project.capacity), 0);
  const consultantCapacity = consultantProjects.reduce((sum, project) => sum + parseFloat(project.capacity), 0);
  const totalCapacity = completedCapacity + underExecutionCapacity + ordersCapacity + consultantCapacity;

  // Counter animations for each capacity
  const completedCounter = useCountUp({ end: completedCapacity, duration: 2500, decimals: 1 });
  const underExecutionCounter = useCountUp({ end: underExecutionCapacity, duration: 2500, decimals: 1, delay: 200 });
  const ordersCounter = useCountUp({ end: ordersCapacity, duration: 2500, decimals: 1, delay: 400 });
  const consultantCounter = useCountUp({ end: consultantCapacity, duration: 2500, decimals: 1, delay: 600 });
  const totalCounter = useCountUp({ end: totalCapacity, duration: 3000, decimals: 1, delay: 800 });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'Under Execution':
        return <Clock className="h-5 w-5 text-orange-500" />;
      case 'Orders in Hand':
        return <FileText className="h-5 w-5 text-blue-600" />;
      case 'Project Consultant':
        return <Filter className="h-5 w-5 text-purple-600" />;
      default:
        return <Zap className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Execution':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Orders in Hand':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Project Consultant':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Residential':
        return 'bg-koku-orange text-koku-dark';
      case 'Commercial':
        return 'bg-blue-500 text-white';
      case 'Industrial':
        return 'bg-gray-700 text-white';
      case 'VNM':
        return 'bg-purple-500 text-white';
      case 'Green Open Access':
        return 'bg-green-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-koku-dark mb-2">{project.client}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-2 text-koku-orange" />
            <span className="text-sm">{project.location}</span>
          </div>
        </div>
        <div className="flex items-center">
          {getStatusIcon(project.status)}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(project.type)}`}>
          {project.type}
        </span>
        <div className="flex items-center text-koku-dark font-semibold">
          <Zap className="h-4 w-4 mr-1 text-koku-orange" />
          <span>{project.capacity}</span>
        </div>
      </div>

      <div className={`px-3 py-2 rounded-lg border text-center text-sm font-medium ${getStatusColor(project.status)}`}>
        {project.status}
      </div>
    </div>
  );

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-koku-dark mb-6">
              Our <span className="bg-gradient-to-r from-koku-orange to-yellow-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive portfolio of solar installations across Maharashtra, delivering clean energy solutions for residential, commercial, and industrial clients.
            </p>
          </div>

          {/* Capacity Summary */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div ref={completedCounter.ref} className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{completedCounter.count} kWp</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </div>
            <div ref={underExecutionCounter.ref} className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">{underExecutionCounter.count} kWp</div>
                <div className="text-sm text-gray-600">Under Execution</div>
              </div>
            </div>
            <div ref={ordersCounter.ref} className="bg-white rounded-xl p-6 shadow-lg border border-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{ordersCounter.count} kWp</div>
                <div className="text-sm text-gray-600">Orders in Hand</div>
              </div>
            </div>
            <div ref={consultantCounter.ref} className="bg-white rounded-xl p-6 shadow-lg border border-purple-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">{consultantCounter.count} kWp</div>
                <div className="text-sm text-gray-600">Consultant</div>
              </div>
            </div>
            <div ref={totalCounter.ref} className="bg-white rounded-xl p-6 shadow-lg border border-koku-orange">
              <div className="text-center">
                <div className="text-2xl font-bold text-koku-dark mb-1">{totalCounter.count} kWp</div>
                <div className="text-sm text-gray-600">Total Portfolio</div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['all', 'residential', 'commercial', 'industrial', 'vnm', 'green-open-access'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === filterType
                    ? 'bg-gradient-to-r from-koku-orange to-yellow-500 text-koku-dark shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-koku-orange'
                }`}
              >
                {filterType === 'all' ? 'All Projects' : 
                 filterType === 'vnm' ? 'VNM' :
                 filterType === 'green-open-access' ? 'Green Open Access' :
                 filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filter === 'all' ? (
            <>
              {/* Completed Projects */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-koku-dark">Completed Projects</h2>
                  <span className="ml-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    {completedProjects.length} Projects
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>

              {/* Under Execution */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <Clock className="h-8 w-8 text-orange-500 mr-3" />
                  <h2 className="text-3xl font-bold text-koku-dark">Projects Under Execution</h2>
                  <span className="ml-4 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                    {underExecutionProjects.length} Projects
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {underExecutionProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>

              {/* Orders in Hand */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-koku-dark">Orders in Hand (Virtual Net Metering)</h2>
                  <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {ordersInHandProjects.length} Projects
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ordersInHandProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>

              {/* Project Consultant */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <Filter className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-koku-dark">Project Consultant</h2>
                  <span className="ml-4 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                    {consultantProjects.length} Project
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {consultantProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-koku-dark to-koku-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-300 mb-8">
            With over {totalCounter.count.toFixed(0)} kWp of solar capacity across {allProjects.length}+ projects, we're ready to deliver your next solar solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact#contact"
              className="bg-koku-orange text-koku-dark px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all shadow-lg"
            >
              Start Your Project
            </a>
            <a
              href="/contact#contact"
              className="bg-transparent border-2 border-koku-orange text-koku-orange px-8 py-4 rounded-full font-semibold hover:bg-koku-orange hover:text-koku-dark transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
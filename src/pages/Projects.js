import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { ASSETS } from '../constants/assets';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const projects = [
    { id: 1, title: "Shiva's Residence", category: "Interiors", img: "https://architectureinfinity.com/wp-content/uploads/2023/01/TV-UNIT-720x720.jpg" },
    { id: 2, title: "Arjun Residence", category: "Interiors", img: "https://architectureinfinity.com/wp-content/uploads/2023/01/9-1-720x720.jpg" },
    { id: 3, title: "Mother's Nest", category: "Interiors", img: "https://architectureinfinity.com/wp-content/uploads/2023/01/01-720x720.jpg" },
    { id: 4, title: "Malaysia Inn", category: "Commercial", img: "https://architectureinfinity.com/wp-content/uploads/2023/01/luxury-1-1-720x720.png" },
    { id: 5, title: "Damro", category: "Commercial", img: "https://architectureinfinity.com/wp-content/uploads/2023/01/Exterior-03-Damro-01JUN20-720x720.jpg" },
    { id: 6, title: "Zaitun", category: "Commercial", img: "https://architectureinfinity.com/wp-content/uploads/2023/01/4-720x720.jpg" },
    { id: 7, title: "Café Cloud", category: "Commercial", img: "https://architectureinfinity.com/wp-content/uploads/2023/01/11.INDOOR-SEATING1-720x720.jpg" },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div>
      <PageHeader title="Projects" breadcrumb="Projects" bgImage={ASSETS.projectsHero} />
      
      <section className="py-20 container mx-auto px-4">
        <SectionTitle subtitle="[ Our Portfolio ]" title="Some of Our Works" centered />
        
        {/* Filters */}
        <div className="flex justify-center gap-8 mb-12 border-b border-gray-200 pb-4">
          {['All', 'Architecture', 'Commercial', 'Interiors'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`uppercase font-bold text-sm tracking-widest pb-4 -mb-[17px] border-b-2 transition-all ${
                filter === cat ? 'text-primary border-primary' : 'text-gray-400 border-transparent hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group relative overflow-hidden shadow-lg">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                <h4 className="text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h4>
                <span className="text-accent uppercase text-xs tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-accent text-white px-10 py-4 uppercase font-bold text-xs tracking-widest hover:bg-primary transition-colors">
            Load More
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;

import { Users, Briefcase, Layers, Home, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { ASSETS } from '../constants/assets';

const ServicesPage = () => {
  return (
    <div>
      <PageHeader title="Our Services" breadcrumb="Services" bgImage={ASSETS.servicesHero} />
      
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title and Description */}
          <div>
            <SectionTitle subtitle="[ Our Benefits ]" title="Ambitious Studio with Successful Concept & Ideas" />
            <p className="text-gray-600 mt-6 leading-relaxed">We pride ourselves on offering comprehensive architectural and design solutions that combine innovation with practical expertise.</p>
            <button className="bg-primary text-white px-8 py-4 uppercase font-bold text-xs tracking-widest hover:bg-accent transition-colors mt-8">
              View Projects
            </button>
          </div>
          
          {/* Right - Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Customer Focus", 
                desc: "Customers choose us for the simplicity of communication and an understanding of what it's necessary to receive in the end.", 
                icon: Users 
              },
              { 
                title: "Professionalism", 
                desc: "We develop a full cycle of project documentation: an outline sketch, a design project, working documentation.", 
                icon: Briefcase 
              },
              { 
                title: "Multi Experience", 
                desc: "We provide a wide range of services, we work in different styles, we project commercial and residential properties.", 
                icon: Layers 
              },
              { 
                title: "Author's Supervision", 
                desc: "We develop an attractive and convenient space for work and leisure time, working on units, selecting materials, manufacturers.", 
                icon: Home 
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <CheckCircle size={40} className="text-accent mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Professionalism</h4>
              <p className="text-gray-400 text-sm">Certified high-class specialists.</p>
            </div>
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <Briefcase size={40} className="text-accent mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Experience & Skills</h4>
              <p className="text-gray-400 text-sm">Years of successful practice.</p>
            </div>
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <Users size={40} className="text-accent mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Customer Focus</h4>
              <p className="text-gray-400 text-sm">Individual approach to every client.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

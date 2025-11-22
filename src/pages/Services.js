import { useState } from 'react';
import { Users, Briefcase, Home, CheckCircle, Lightbulb, HandCoins, Box, Waves, Globe, Ruler, LayoutTemplate, BrickWall } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { ASSETS } from '../constants/assets';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  // Services Data with Icons matched to screenshot
  const services = [
    { id: 0, name: 'Architecture', icon: Lightbulb, num: '01' },
    { id: 1, name: 'Interior', icon: HandCoins, num: '02' },
    { id: 2, name: 'Landscape', icon: Box, num: '03' },
    { id: 3, name: 'Construction', icon: BrickWall, num: '04' },
    { id: 4, name: 'Water proofing', icon: Waves, num: '05' }
  ];

  const serviceContent = [
    {
      name: 'Architecture',
      desc: 'Original design project of high quality raises profit – this is proved in practice by many of our customers. A professional approach will avoid of many common mistakes, minimize the cost of decoration materials and choose the best way to implement your ideas or direct your.'
    },
    {
      name: 'Interior',
      desc: 'Our interior design services focus on creating spaces that are functional, aesthetically pleasing, and reflective of your personal style. We work closely with you to understand your preferences and requirements.'
    },
    {
      name: 'Landscape',
      desc: 'Our landscape design services help you make the most of your outdoor spaces, creating beautiful and sustainable landscapes that are both functional and inviting.'
    },
    {
      name: 'Construction',
      desc: 'Our construction services ensure that every detail is taken care of, from project planning to execution, resulting in a seamless and stress-free construction process.'
    },
    {
      name: 'Water proofing',
      desc: 'We offer advanced and reliable waterproofing solutions to safeguard your spaces from water damage, ensuring durability and peace of mind.'
    }
  ];

  return (
    <div>
      <PageHeader title="Our Services" breadcrumb="Services" bgImage={ASSETS.servicesHero} />
      
      {/* Benefits Grid (Moved Up) */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {[
              { 
                title: "Customer Focus", 
                desc: "Customers choose us for the simplicity of communication and an understanding of what it's necessary to receive in the end.", 
                icon: Globe 
              },
              { 
                title: "Professionalism", 
                desc: "We develop a full cycle of project documentation: an outline sketch, a design project, working documentation.", 
                icon: Ruler 
              },
              { 
                title: "Multi Experience", 
                desc: "We provide a wide range of services, we work in different styles, we project commercial and residential properties.", 
                icon: Home 
              },
              { 
                title: "Author's Supervision", 
                desc: "We develop an attractive and convenient space for work and leisure time, working on units, selecting materials, manufacturers.", 
                icon: LayoutTemplate 
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-start">
                {/* Icon - Large, Outline Style */}
                <div className="mb-6 text-primary">
                  <item.icon size={48} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl text-primary font-normal mb-4">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DARK SERVICES SECTION (Screenshot Style) --- */}
      <section className="py-24 px-4 bg-dark text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[#1a1a1a] opacity-95"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
              <div className="w-12 h-0.5 bg-gray-500 mx-auto border-t-2 border-dotted border-gray-500"></div>
            </div>
          
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className="group relative flex flex-col items-center w-32"
                >
                  {/* Outlined Number - Moved Up */}
                  <div 
                      className="absolute -top-14 left-6 -translate-x-1/2 text-6xl font-bold z-0 transition-all duration-300 opacity-30 group-hover:opacity-50"
                      style={{ 
                          WebkitTextStroke: '1px rgba(255,255,255,0.5)', 
                          color: 'transparent',
                          fontFamily: 'sans-serif' 
                      }}
                  >
                      {service.num}
                  </div>

                  {/* Circle Icon */}
                  <div 
                      className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 border-2 
                      ${activeService === service.id 
                          ? 'bg-white border-white text-black scale-110' 
                          : 'bg-black border-transparent text-white group-hover:border-gray-600'
                      }`}
                  >
                    <service.icon size={40} strokeWidth={1.5} />
                  </div>

                  {/* Label */}
                  <div className="flex flex-col items-center">
                    <span className={`text-lg font-medium tracking-wide transition-colors duration-300 pb-4 ${
                        activeService === service.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}>
                      {service.name}
                    </span>
                    {/* Active Underline */}
                    <div className={`h-0.5 w-full transition-all duration-500 ${activeService === service.id ? 'bg-white' : 'bg-transparent'}`}></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-12"></div>

            {/* Description */}
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-gray-400 text-lg leading-relaxed animate-fade-in-up">
                  {serviceContent[activeService].desc}
                </p>
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

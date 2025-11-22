import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { ASSETS } from '../constants/assets';
import { Building, Palette, Trees, Hammer, Droplets } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const HomePage = ({ setActivePage }) => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    { id: 0, name: 'Architecture', icon: Building, num: '1' },
    { id: 1, name: 'Interior', icon: Palette, num: '2' },
    { id: 2, name: 'Landscape', icon: Trees, num: '3' },
    { id: 3, name: 'Construction', icon: Hammer, num: '4' },
    { id: 4, name: 'Water proofing', icon: Droplets, num: '5' }
  ];

  const serviceContent = [
    {
      name: 'Architecture',
      desc: 'Original design project of high quality raises profit – this is proved in practice by many of our customers. A professional approach will avoid of many common mistakes, minimize the cost of decoration materials and choose the best way to implement your ideas or direct your.'
    },
    {
      name: 'Interior',
      desc: 'Our interior design services focus on creating spaces that are functional, aesthetically pleasing, and reflective of your personal style. We work closely with you to understand your preferences and requirements, and our team of expert designers creates designs that not only meet but exceed your expectations.'
    },
    {
      name: 'Landscape',
      desc: 'Our landscape design services help you make the most of your outdoor spaces, creating beautiful and sustainable landscapes that are both functional and inviting. We work with you to understand your vision and preferences, and our team of landscape designers creates designs that are tailored to your specific needs.'
    },
    {
      name: 'Construction',
      desc: 'Our construction services ensure that every detail is taken care of, from project planning to execution, resulting in a seamless and stress-free construction process. We have a team of experienced contractors who are committed to delivering high-quality workmanship.'
    },
    {
      name: 'Water proofing',
      desc: 'We offer advanced and reliable waterproofing solutions to safeguard your spaces from water damage, ensuring durability and peace of mind. Our comprehensive range of products and services is designed to meet both residential and commercial needs.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] w-full bg-cover bg-center pt-24" style={{ backgroundImage: `url(${ASSETS.homeHero})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-xl md:text-2xl font-light tracking-[4px] uppercase mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>High-end Interior Design</h2>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>QUALITY<br/><span className="text-transparent" style={{ textShadow: '2px 2px 4px rgba(191,191,191,0.5)' }}>DESIGN</span></h1>
          <p className="max-w-2xl text-sm md:text-base text-gray-200 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision. Wanna work with us?
          </p>
          <button onClick={() => setActivePage('projects')} className="bg-white text-black px-8 py-4 uppercase font-bold text-xs tracking-widest hover:bg-accent hover:text-white transition-colors animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            View Projects
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img src={ASSETS.badge} alt="AI Badge" className="w-3/4 mx-auto animate-fade-in-up" />
          </div>
          <div className="lg:w-1/2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <SectionTitle subtitle="[ about company ]" title="Architecture Infinity" />
            <p className="text-gray-600 leading-relaxed mb-6">
              We offer a comprehensive range of architectural design services that cater to all your design needs. Our team of young and dynamic architects brings a fresh perspective and innovative ideas to every project.
            </p>
            <button onClick={() => setActivePage('about')} className="text-primary border-b-2 border-primary pb-1 font-bold uppercase text-xs hover:text-accent hover:border-accent transition-colors">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-2">Get Incredible Design Right Now!</h3>
            <p className="text-gray-400">At every stage, we supervise your project – controlling all details.</p>
          </div>
          <button onClick={() => setActivePage('contacts')} className="bg-accent text-white px-8 py-4 uppercase font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-colors">
            Get In Touch
          </button>
        </div>
      </section>

      {/* --- UPDATED SERVICES SECTION --- */}
      <section className="py-24 px-4 bg-neutral-900 text-white overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
             <span className="text-accent uppercase tracking-widest text-sm font-bold">[ Our Services ]</span>
             <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Our Services</h2>
          </div>
          
          {/* Service Icons Row */}
          <div className="flex flex-wrap justify-center md:justify-between items-start gap-8 md:gap-4 mb-16">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className="group relative flex flex-col items-center w-1/2 md:w-auto"
              >
                <div 
                    className="absolute -top-10 -left-4 md:-left-1 text-5xl md:text-6xl font-bold z-0 transition-all duration-300"
                    style={{ 
                        WebkitTextStroke: '2px rgba(255,255,255,0.6)', 
                        color: 'transparent',
                        fontFamily: 'sans-serif' 
                    }}
                >
                    {service.num}
                </div>

                {/* Circle Icon Container */}
                <div 
                    className={`relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center pt-2 justify-center mb-6 transition-all duration-300 border-2 
                    ${activeService === service.id 
                        ? 'bg-white border-white text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                        : 'bg-black border-neutral-700 text-white group-hover:border-white'
                    }`}
                >
                  <service.icon size={40} strokeWidth={1.5} />
                </div>

                {/* Label */}
                <span className={`text-lg font-medium tracking-wide transition-colors duration-300 ${
                    activeService === service.id ? 'text-white' : 'text-gray-500 group-hover:text-white'
                }`}>
                  {service.name}
                </span>
              </button>
            ))}
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

          {/* Service Description */}
          <div className="max-w-4xl mx-auto text-center">
             <div className="animate-fade-in-up">
                <p className="text-gray-400 text-lg leading-relaxed">
                  {serviceContent[activeService].desc}
                </p>
             </div>
          </div>
        </div>
      </section>
      {/* --- END UPDATED SERVICES SECTION --- */}


      {/* Project Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">
            <SectionTitle subtitle="[ our projects ]" title="Our Projects" centered />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Architecture', num: '01', img: 'https://architectureinfinity.com/wp-content/uploads/2020/05/cate1.jpg' },
              { name: 'Interior', num: '02', img: 'https://architectureinfinity.com/wp-content/uploads/2020/05/cate2.jpg' },
              { name: 'Commercial', num: '03', img: 'https://architectureinfinity.com/wp-content/uploads/2020/05/cate3.jpg' }
            ].map((category, idx) => (
              <div key={idx} className="relative group overflow-hidden h-64 rounded-lg shadow-md animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <img src={category.img} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-center items-center text-white">
                  <span className="text-5xl font-bold mb-2 opacity-30">{category.num}</span>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="[ what clients say ]" title="Testimonials" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { 
                name: 'Abishekh Abi', 
                review: 'Architecture Infinity has transformed my space beyond imagination. Their attention to detail and creative solutions are unmatched. Highly recommended!',
                rating: 5
              },
              { 
                name: 'Priya Palani', 
                review: 'Professional team with excellent communication. They understood our requirements perfectly and delivered exactly what we envisioned.',
                rating: 5
              },
              { 
                name: 'Madhan Raj', 
                review: 'Great experience working with Architecture Infinity. Their innovative designs and timely execution made our project a success.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{testimonial.review}"</p>
                <h4 className="font-bold text-primary">{testimonial.name}</h4>
                <p className="text-gray-400 text-xs">Client</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { num: 5, label: 'Years of Experience' },
            { num: 25, label: 'Clients' },
            { num: 6, label: 'Ongoing Projects' }
          ].map((stat, i) => (
            <div key={i} className="p-6 border border-gray-100 animate-fade-in-up hover:shadow-lg transition-shadow" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="text-5xl font-bold text-accent mb-2 flex justify-center items-baseline">
                <span className="text-xl align-top mr-1">[</span>
                {stat.num}
                <span className="text-xl align-top ml-1">+]</span>
              </div>
              <h6 className="uppercase font-bold text-sm tracking-wider">{stat.label}</h6>
            </div>
          ))}
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="[ trusted partners ]" title="Our Valued Clients" centered />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-12 items-center">
            {[
              { name: 'Zaitun', img: '/assets/clients/zaitun.png' },
              { name: 'Al-Medina', img: '/assets/clients/al-medina.png' },
              { name: 'RC', img: '/assets/clients/rc.png' },
              { name: 'Delice', img: '/assets/clients/delice.png' },
              { name: 'JV-Cafe', img: '/assets/clients/jv-cafe.png' },
              { name: 'ABI', img: '/assets/clients/abi.webp' },
              { name: 'Acorn', img: '/assets/clients/acorn.webp' },
              { name: 'Ark', img: '/assets/clients/ark.webp' }
            ].map((client, idx) => (
              <div key={idx} className="flex items-center justify-center h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 animate-fade-in-up" style={{ animationDelay: `${(idx % 4) * 0.1}s` }}>
                <img src={client.img} alt={client.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
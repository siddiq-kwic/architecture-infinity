import { Layers, CheckCircle, Users } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { ASSETS } from '../constants/assets';

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const philosophy = [
    { title: "Our Mission", icon: Layers, text: "Our mission is to create functional, sustainable, and aesthetically pleasing spaces that enrich the lives of our clients.", img: "https://architectureinfinity.com/wp-content/uploads/2020/05/support1.jpg" },
    { title: "Our Vision", icon: CheckCircle, text: "Architecture Infinity aims to be a leading architectural firm known for innovative designs and exceptional quality.", img: "https://architectureinfinity.com/wp-content/uploads/2020/05/support2.jpg" },
    { title: "Our Values", icon: Users, text: "We call our style 'live minimalism'. Live minimalism is not about a visual look. It refers to inner feelings.", img: "https://architectureinfinity.com/wp-content/uploads/2020/05/support3.jpg" }
  ];

  return (
    <div>
      <PageHeader title="About Us" breadcrumb="About Us" bgImage={ASSETS.aboutHero} />
      
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img src={ASSETS.badge} alt="Badge" className="w-full max-w-md mx-auto" />
          </div>
          <div className="lg:w-1/2">
            <SectionTitle subtitle="[ About Company ]" title="Architecture Infinity" />
            <p className="text-gray-600 mb-6">
              Architecture Infinity is a dynamic architectural firm located in Salem, Tamilnadu. Our team of talented young architects is driven by passion and innovation. Since our inception in 2017, we have completed a multitude of successful residential and commercial projects.
            </p>
            <p className="text-gray-600">
              At Architecture Infinity, we are dedicated to creating spaces that are both functional and aesthetically pleasing, reflecting the latest design trends and incorporating cutting-edge technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Flip Cards */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="[ Company Strategy ]" title="Our Philosophy" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {philosophy.map((item, idx) => (
              <div key={idx} className="group relative h-[400px]" style={{ perspective: '1000px' }}>
                <div className="relative w-full h-full transition-all duration-500" style={{ transformStyle: 'preserve-3d' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateY(180deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateY(0deg)'}>
                  {/* Front */}
                  <div className="absolute inset-0 bg-white p-8 flex flex-col items-center justify-center text-center shadow-lg" style={{ backfaceVisibility: 'hidden' }}>
                    <img src={item.img} alt={item.title} className="w-full h-48 object-cover mb-6 grayscale group-hover:grayscale-0" />
                    <item.icon size={32} className="text-accent mb-4" />
                    <h3 className="font-bold text-xl">{item.title}</h3>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-primary text-white p-8 flex flex-col items-center justify-center text-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <item.icon size={32} className="text-accent mb-4" />
                    <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle subtitle="[ HOW IT WORKS ]" title="From Sketch to Life" />
              <div className="mt-8 space-y-4">
                {[
                  {
                    question: "What is 3D design and how it works?",
                    answer: "3D design is a digital representation of a space or object that allows clients to visualize projects before construction. We use advanced rendering technology to create photorealistic models that showcase lighting, materials, textures, and spatial relationships. This enables you to make informed decisions and modifications early in the design process."
                  },
                  {
                    question: "How much does interior design cost?",
                    answer: "Interior design costs vary based on project scope, space size, and design complexity. We offer flexible pricing models including hourly consultations, fixed project fees, and cost-plus arrangements. Contact us for a detailed consultation to understand your specific needs and receive a customized quote."
                  },
                  {
                    question: "How much time will I spend on planning?",
                    answer: "The planning phase typically takes 4-8 weeks depending on project complexity. This includes initial consultation, concept development, 3D visualization, client feedback incorporation, and final design refinement. We work efficiently to maintain your timeline while ensuring every detail is perfected."
                  },
                  {
                    question: "Can I create custom design?",
                    answer: "Absolutely! Custom design is our specialty. We tailor every project to reflect your unique vision, lifestyle, and preferences. From concept to completion, our team collaborates closely with you to ensure the final design is truly personalized and exceeds your expectations."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-gray-300 pb-4">
                    <button 
                      onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                      className="w-full flex justify-between items-center py-2 hover:text-accent transition-colors font-semibold text-left"
                    >
                      <span>{item.question}</span>
                      <span className="text-accent text-2xl">{openIndex === idx ? '−' : '+'}</span>
                    </button>
                    {openIndex === idx && (
                      <p className="text-gray-600 text-sm mt-2 pb-2">{item.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Image */}
            <div className="flex justify-center">
              <img src="/assets/image2-aboutus.png" alt="How It Works" className="w-full max-w-lg rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="[ Our Professionals ]" title="Meet Our Skilled Team" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { name: 'Abbas', role: 'Principal Architect', img: "/assets/team/abbas.jpg" },
              { name: 'Harish', role: 'Chief Architect', img: "/assets/team/harish.jpg" },
              { name: 'Kowsalya', role: 'Interior Designer', img: "/assets/team/kowsalya.jpg" },
              { name: 'Priya', role: 'Senior Architect', img: "/assets/team/priya.jpg" },
              { name: 'Nandha', role: 'Architectural Technologist', img: "/assets/team/nandha.jpg" },
              { name: 'Asik Ahamed', role: 'Chief Engineer', img: "/assets/team/asik.png" }
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 w-full bg-white/90 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-accent">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

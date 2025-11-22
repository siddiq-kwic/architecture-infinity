import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { ASSETS } from '../constants/assets';

const ContactPage = () => {
  const socialLinks = [
    { Icon: Facebook, href: 'https://www.facebook.com/architectureinfinity.fb?mibextid=LQQJ4d' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/architecture-infinity-2514b417a/' },
    { Icon: Instagram, href: 'https://www.instagram.com/architectureinfinity/' },
    { Icon: Twitter, href: 'https://twitter.com/archinfinity01?s=11&t=zDwHxiKfK_yO_1Vd5zJalA' },
  ];

  return (
    <div>
      <PageHeader title="Contacts" breadcrumb="Contacts" bgImage={ASSETS.contactHero} />
      
      <section className="py-0">
        <div className="flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-gray-500 text-xs mb-12">Your email address will not be published. Required fields are marked *</p>
            
            <form className="flex flex-col gap-8">
              <div className="group">
                <input 
                  type="text" 
                  placeholder="YOUR NAME *" 
                  className="w-full border-b border-gray-300 py-3 focus:border-black focus:outline-none transition-colors bg-transparent placeholder-gray-500 text-sm" 
                  required 
                />
              </div>
              <div className="group">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL *" 
                  className="w-full border-b border-gray-300 py-3 focus:border-black focus:outline-none transition-colors bg-transparent placeholder-gray-500 text-sm" 
                  required 
                />
              </div>
              <div className="group">
                <textarea 
                  rows="4" 
                  placeholder="MESSAGE..." 
                  className="w-full border-b border-gray-300 py-3 focus:border-black focus:outline-none transition-colors bg-transparent placeholder-gray-500 text-sm resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-[#1a1a1a] text-white px-10 py-4 uppercase font-bold text-xs tracking-widest hover:bg-accent transition-colors self-start mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: Contact Details (Dark Background) */}
          <div className="lg:w-1/2 bg-[#1a1a1a] text-white p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
             {/* Background pattern overlay */}
             <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

             <div className="relative z-10">
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">[ OUR CONTACT DETAILS ]</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Let's Start a Project</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
                  Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
                </p>
                
                <div className="flex flex-col gap-8">
                  {/* Address */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h6 className="font-bold uppercase text-xs tracking-widest mb-2 text-white">Our Address:</h6>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Architecture Infinity, <br/>
                        No 145, First floor, VMN Complex,<br/>
                        Suramangalam, Salem - 636005,<br/>
                        Tamil Nadu, India.
                      </p>
                    </div>
                  </div>

                  {/* Mailbox */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h6 className="font-bold uppercase text-xs tracking-widest mb-2 text-white">Our Mailbox:</h6>
                      <a href="mailto:admin@architectureinfinity.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                        admin@architectureinfinity.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h6 className="font-bold uppercase text-xs tracking-widest mb-2 text-white">Our Phone:</h6>
                      <div className="flex flex-col text-gray-400 text-sm">
                        <a href="tel:+919944557832" className="hover:text-white transition-colors">+91 99445 57832</a>
                        <a href="tel:+919944557932" className="hover:text-white transition-colors">+91 99445 57932</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-12">
                  {socialLinks.map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <div className="w-full h-[450px] grayscale">
        <iframe 
          title="Architecture Infinity Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.361697280671!2d78.12734631412373!3d11.668760991720662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf10a15825229%3A0xfb5eda73f7f1980b!2sArchitecture%20Infinity!5e0!3m2!1sen!2sin!4v1675348899321!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
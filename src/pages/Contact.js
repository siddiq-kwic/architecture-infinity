import { MapPin, Mail, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { ASSETS } from '../constants/assets';

const ContactPage = () => {
  return (
    <div>
      <PageHeader title="Contacts" breadcrumb="Contacts" bgImage={ASSETS.contactHero} />
      
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <div className="lg:w-1/2 bg-white p-8 shadow-lg border border-gray-100">
            <SectionTitle title="Get in Touch" />
            <form className="flex flex-col gap-6">
              <input type="text" placeholder="Your Name *" className="w-full bg-light border-none p-4 focus:ring-1 focus:ring-accent" required />
              <input type="email" placeholder="Your Email *" className="w-full bg-light border-none p-4 focus:ring-1 focus:ring-accent" required />
              <textarea rows="5" placeholder="Message..." className="w-full bg-light border-none p-4 focus:ring-1 focus:ring-accent"></textarea>
              <button type="submit" className="bg-primary text-white px-8 py-4 uppercase font-bold text-xs tracking-widest hover:bg-accent transition-colors self-start">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:w-1/2">
            <SectionTitle subtitle="[ Our Contact Details ]" title="Let's Start a Project" />
            <p className="text-gray-600 mb-8">
              Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-light flex items-center justify-center text-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h6 className="font-bold uppercase text-sm mb-1">Our Address:</h6>
                  <p className="text-gray-600 text-sm">No 145, First floor, VMN Complex,<br/>Suramangalam, Salem - 636005.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-light flex items-center justify-center text-accent shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h6 className="font-bold uppercase text-sm mb-1">Our Mailbox:</h6>
                  <a href="mailto:admin@architectureinfinity.com" className="text-gray-600 hover:text-primary text-sm">admin@architectureinfinity.com</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-light flex items-center justify-center text-accent shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h6 className="font-bold uppercase text-sm mb-1">Our Phone:</h6>
                  <a href="tel:+91 99445 57832" className="text-gray-600 hover:text-primary text-sm block">+91 99445 57832</a>
                  <a href="tel:+91 99445 57932" className="text-gray-600 hover:text-primary text-sm">+91 99445 57932</a>
                </div>
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

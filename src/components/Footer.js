import { Facebook, Linkedin, Instagram, Twitter, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants/assets';

const Footer = ({ setActivePage }) => (
  <footer className="bg-dark text-lightGray pt-20 pb-10">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Col 1: Logo & Intro */}
      <div>
        <img src={ASSETS.logo} alt="Logo" className="w-40 mb-6" />
        <p className="mb-6 text-sm leading-relaxed">
          We provide a full range of interior design, architectural design.
        </p>
        <div className="flex gap-4">
          {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
            <button key={i} className="w-10 h-10 rounded-full bg-border flex items-center justify-center hover:bg-accent hover:text-white transition-all" aria-label="Social media link">
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>

      {/* Col 2: Contacts */}
      <div>
        <h4 className="text-white text-lg font-bold mb-6">Contacts</h4>
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex gap-3">
            <MapPin className="text-accent shrink-0" size={18} />
            <p>No 145, First floor, VMN Complex,<br/>Suramangalam, Salem - 636005,<br/>Tamil Nadu, India.</p>
          </div>
          <div className="flex gap-3">
            <Mail className="text-accent shrink-0" size={18} />
            <a href="mailto:admin@architectureinfinity.com" className="hover:text-white">admin@architectureinfinity.com</a>
          </div>
          <div className="flex gap-3">
            <Phone className="text-accent shrink-0" size={18} />
            <p>+91 99445 57832 <br/> +91-9944557932</p>
          </div>
        </div>
      </div>

      {/* Col 3: Latest Projects */}
      <div>
        <h4 className="text-white text-lg font-bold mb-6">Latest Projects</h4>
        <ul className="flex flex-col gap-3 text-sm">
          <li className="hover:text-accent cursor-pointer transition-colors">Stylish Family Appartment</li>
          <li className="hover:text-accent cursor-pointer transition-colors">Modern Villa in Belgium</li>
          <li className="hover:text-accent cursor-pointer transition-colors">Private House in Spain</li>
        </ul>
      </div>

      {/* Col 4: Subscribe */}
      <div>
        <h4 className="text-white text-lg font-bold mb-6">Subscribe</h4>
        <div className="relative mb-4">
          <input 
            type="email" 
            placeholder="YOUR EMAIL" 
            className="w-full bg-border border-none py-3 px-4 text-white placeholder-gray-500 focus:ring-1 focus:ring-accent"
          />
          <button className="absolute right-0 top-0 h-full px-4 text-accent hover:text-white">
            <ArrowRight size={18} />
          </button>
        </div>
        <p className="text-xs">Follow our newsletter to stay updated about agency.</p>
      </div>
    </div>
    
    <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
      <p>Copyright © 2023 <span className="text-white">Architecture Infinity</span>. All Rights Reserved.</p>
      <p>Powered by <span className="text-white">Nekhop Technology Services</span>.</p>
    </div>
  </footer>
);

export default Footer;

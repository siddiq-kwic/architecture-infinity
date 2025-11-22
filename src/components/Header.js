import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { ASSETS } from '../constants/assets';

const Header = ({ activePage, setActivePage, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Our Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contacts', id: 'contacts' },
  ];

  // Social Links populated from your provided list
  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/architectureinfinity.fb?mibextid=LQQJ4d' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/architecture-infinity-2514b417a/' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/architectureinfinity/' },
    { icon: 'fab fa-google-plus-g', href: 'https://www.google.com/maps?q=Architecture+Infinity,+Juntion,+145,+1st+floor,+VMN+Complex,+Suramangalam,+Salem,+Tamil+Nadu+636005&ftid=0x3babf10a15825229:0xfb5eda73f7f1980b&hl=en-IN&gl=in&entry=gps&lucs=karto&g_ep=CAISBjYuNDguMRgAIKzfASoFa2FydG9CAklO&g_st=iw' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com/archinfinity01?s=11&t=zDwHxiKfK_yO_1Vd5zJalA' },
  ];

  return (
    <>
      {/* Font Awesome for Social Icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="w-48 cursor-pointer" onClick={() => setActivePage('home')}>
          <img src={ASSETS.logo} alt="Architecture Infinity" className="w-full" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => setActivePage(link.id)}
                  className={`uppercase text-sm font-medium tracking-widest hover:text-accent transition-colors ${
                    activePage === link.id ? 'text-accent' : 'text-white'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-10 text-white pr-2">
          <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-accent transition-colors">
            {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
          </button>
          <button onClick={() => setSidePanelOpen(!sidePanelOpen)} className="hover:text-accent transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden text-white">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Search Bar - Desktop */}
      {searchOpen && (
        <div className="absolute top-20 right-16 w-80 bg-primary/95 backdrop-blur-sm border border-accent/30 p-6 z-50 shadow-2xl">
          <input
            type="text"
            placeholder="SEARCH..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none font-bold tracking-widest border-b border-accent pb-2"
            autoFocus
          />
        </div>
      )}

      {/* Side Panel - Width Increased Here */}
      {sidePanelOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 top-0" onClick={() => setSidePanelOpen(false)}></div>
          {/* Changed w-80 to w-full md:w-[480px] for more width */}
          <div className="fixed right-0 top-0 h-screen w-full md:w-[420px] bg-primary z-50 shadow-2xl overflow-y-auto text-white transition-all duration-300">
            <button
              onClick={() => setSidePanelOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-accent"
            >
              <X size={24} />
            </button>

            <div className="p-12">
              {/* Logo */}
              <div className="mb-10">
                <img src={ASSETS.logo} alt="Architecture Infinity" className="w-40 mb-6" />
              </div>

              {/* Gallery */}
              <div className="mb-10">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Our Gallery</h3>
                <div className="text-gray-400 italic">Gallery content coming soon...</div>
              </div>

              {/* Contact Info */}
              <div className="mb-10">
                <h3 className="font-bold text-xl mb-8 uppercase tracking-widest border-b border-white/10 pb-2">Contact Info</h3>

                {/* Address */}
                <div className="mb-8 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                    <i className="fas fa-map-pin text-lg"></i>
                  </div>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-widest text-accent mb-2">OUR ADDRESS:</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Architecture Infinity,<br />
                      No 145, First floor, VMN Complex,<br />
                      Suramangalam, Salem - 636005,<br />
                      Tamil Nadu, India.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-8 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                    <i className="fas fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-widest text-accent mb-2">OUR MAILBOX:</p>
                    <a href="mailto:admin@architectureinfinity.com" className="text-gray-300 hover:text-white text-sm transition-colors">
                      admin@architectureinfinity.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                    <i className="fas fa-phone text-lg"></i>
                  </div>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-widest text-accent mb-2">OUR PHONE:</p>
                    <a href="tel:+919944557832" className="text-gray-300 hover:text-white text-sm block mb-1 transition-colors">
                      +91 99445 57832
                    </a>
                    <a href="tel:+919944557932" className="text-gray-300 hover:text-white text-sm transition-colors">
                      +91 99445 57932
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-bold text-xl mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-primary text-white p-6 shadow-xl border-t border-white/10">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    setActivePage(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left uppercase text-sm font-bold tracking-widest py-2 ${
                    activePage === link.id ? 'text-accent' : 'text-white'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
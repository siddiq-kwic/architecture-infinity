import { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import { ASSETS } from "../constants/assets";
import {
  Lightbulb,
  HandCoins,
  Box,
  PaintRoller,
  Waves,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { useInView } from "../hooks/useInView";


const AnimatedBox = ({
  children,
  className = "",
  animation = "animate-fade-in-up",
  delay = "0s",
  threshold = 0.2,
}) => {
  const [ref, isInView] = useInView({ threshold });

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-700 ${
        isInView ? `${animation} opacity-100` : "opacity-0"
      }`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};


const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Ease-out cubic function for smooth effect
      const easeOut = 1 - Math.pow(1 - percentage, 3);

      setCount(Math.floor(easeOut * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it lands exactly on the number
      }
    };

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const HomePage = ({ setActivePage }) => {
  const [activeService, setActiveService] = useState(0);

  // --- Hero Slider State & Logic ---
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "assets/home/hero1.jpg",
      subtitle: "DESIGN",
      title: "New level of Interior",
      desc: "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
    },
    {
      id: 2,
      image: "assets/home/hero2.png",
      subtitle: "QUALITY",
      title: "New Level of Interior",
      desc: "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
    },
    {
      id: 3,
      image: "assets/home/hero3.jpg",
      subtitle: "STUDIO",
      title: "Best Furniture and Decor",
      desc: "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
    },
  ];

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Updated services based on the screenshot visual style
  const services = [
    { id: 0, name: "Architecture", icon: Lightbulb, num: "01" },
    { id: 1, name: "Interior", icon: HandCoins, num: "02" },
    { id: 2, name: "Landscape", icon: Box, num: "03" },
    { id: 3, name: "Construction", icon: PaintRoller, num: "04" },
    { id: 4, name: "Water proofing", icon: Waves, num: "05" },
  ];

  const serviceContent = [
    {
      name: "Architecture",
      desc: "Original design project of high quality raises profit – this is proved in practice by many of our customers. A professional approach will avoid of many common mistakes, minimize the cost of decoration materials and choose the best way to implement your ideas or direct your.",
    },
    {
      name: "Interior",
      desc: "Our interior design services focus on creating spaces that are functional, aesthetically pleasing, and reflective of your personal style. We work closely with you to understand your preferences and requirements.",
    },
    {
      name: "Landscape",
      desc: "Our landscape design services help you make the most of your outdoor spaces, creating beautiful and sustainable landscapes that are both functional and inviting.",
    },
    {
      name: "Construction",
      desc: "Our construction services ensure that every detail is taken care of, from project planning to execution, resulting in a seamless and stress-free construction process.",
    },
    {
      name: "Water proofing",
      desc: "We offer advanced and reliable waterproofing solutions to safeguard your spaces from water damage, ensuring durability and peace of mind.",
    },
  ];

  // Team Data based on your uploads
  const teamMembers = [
    {
      name: "Abbas",
      role: "Principal Architect",
      img: "/assets/team/abbas.jpg",
    },
    { name: "Harish", role: "Chief Architect", img: "/assets/team/harish.jpg" },
    {
      name: "Kowsalya",
      role: "Interior Designer",
      img: "/assets/team/kowsalya.jpg",
    },
    { name: "Priya", role: "Senior Architect", img: "/assets/team/priya.jpg" },
    {
      name: "Nandha",
      role: "Architectural Technologist",
      img: "/assets/team/nandha.jpg",
    },
    {
      name: "Asik Ahamed",
      role: "Chief Engineer",
      img: "/assets/team/asik.png",
    },
  ];

  // Social Links Data
  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/architectureinfinity.fb?mibextid=LQQJ4d",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/architecture-infinity-2514b417a/",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/architectureinfinity/",
    },
    {
      Icon: Twitter,
      href: "https://twitter.com/archinfinity01?s=11&t=zDwHxiKfK_yO_1Vd5zJalA",
    },
  ];

  return (
    <div>
      {/* --- HERO SECTION SLIDER --- */}
      <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4 pt-24">
              {/* Subtitle (Transparent with Border) */}
              <div
                className={`transform transition-all duration-1000 delay-100 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h2
                  className="text-6xl md:text-8xl font-semibold tracking-wider uppercase mb-4"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "0.2px white",
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  {slide.subtitle}
                </h2>
              </div>

              {/* Title (Solid White) */}
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h1 className="text-4xl md:text-6xl font-light mb-8 whitespace-pre-line leading-tight tracking-[4px]">
                  {slide.title}
                </h1>
              </div>

              {/* Description */}
              <div
                className={`transform transition-all duration-1000 delay-500 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <p className="max-w-2xl text-sm md:text-base text-gray-200 mb-10 leading-relaxed">
                  {slide.desc}
                </p>
              </div>

              {/* Button */}
              <div
                className={`transform transition-all duration-1000 delay-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <button
                  onClick={() => setActivePage("projects")}
                  className="bg-white text-black px-8 py-4 uppercase font-bold text-xs tracking-widest hover:bg-accent hover:text-white transition-colors"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center gap-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-transparent hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* --- END HERO SLIDER --- */}

      {/* About Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <AnimatedBox animation="animate-bounce-in">
              <img
                src={ASSETS.badge}
                alt="AI Badge"
                className="w-3/4 mx-auto"
              />
            </AnimatedBox>
          </div>
          <div className="lg:w-1/2 w-full">
            <AnimatedBox animation="animate-slide-in-left" delay="0.2s">
              <SectionTitle
                subtitle="[ about company ]"
                title="Architecture Infinity"
              />
            </AnimatedBox>
            <AnimatedBox animation="animate-slide-in-right" delay="0.4s">
              <p className="text-gray-600 leading-relaxed mb-6">
                We offer a comprehensive range of architectural design services
                that cater to all your design needs. Our team of young and
                dynamic architects brings a fresh perspective and innovative
                ideas to every project.
              </p>
              <button
                onClick={() => setActivePage("about")}
                className="text-primary border-b-2 border-primary pb-1 font-bold uppercase text-xs hover:text-accent hover:border-accent transition-colors"
              >
                Read More
              </button>
            </AnimatedBox>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary py-16 text-white overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-2/3">
            <AnimatedBox animation="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-2">
                Get Incredible Design Right Now!
              </h3>
              <p className="text-gray-400">
                At every stage, we supervise your project – controlling all
                details.
              </p>
            </AnimatedBox>
          </div>
          <div className="w-full md:w-1/3 flex justify-start md:justify-end">
            <AnimatedBox animation="animate-slide-in-right">
              <button
                onClick={() => setActivePage("contacts")}
                className="bg-accent text-white px-8 py-4 uppercase font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                Get In Touch
              </button>
            </AnimatedBox>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-neutral-900 text-white overflow-hidden">
        <div className="container mx-auto px-8">
          <AnimatedBox animation="animate-fade-in">
            <div className="text-center mb-16">
              <span className="text-accent uppercase tracking-widest text-sm font-bold">
                [ Our Services ]
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
                Our Services
              </h2>
            </div>
          </AnimatedBox>

          {/* Service Icons Row */}
          <AnimatedBox animation="animate-fade-in-up" delay="0.2s">
            <div className="flex flex-wrap justify-center md:justify-between items-start gap-8 md:gap-4 mb-16">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className="group relative flex flex-col items-center w-1/2 md:w-auto"
                >
                  <div
                    className="absolute -top-12 left-6 -translate-x-1/2 text-6xl font-bold z-0 transition-all duration-300 opacity-30 group-hover:opacity-50"
                    style={{
                      WebkitTextStroke: "1px rgba(255,255,255,0.5)",
                      color: "transparent",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {service.num}
                  </div>

                  <div
                    className={`relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center pt-2 justify-center mb-6 transition-all duration-300 border-2 
                      ${
                        activeService === service.id
                          ? "bg-white border-white text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                          : "bg-black border-neutral-700 text-white group-hover:border-white"
                      }`}
                  >
                    <service.icon size={40} strokeWidth={1.5} />
                  </div>

                  <span
                    className={`text-lg font-medium tracking-wide transition-colors duration-300 ${
                      activeService === service.id
                        ? "text-white"
                        : "text-gray-500 group-hover:text-white"
                    }`}
                  >
                    {service.name}
                  </span>
                </button>
              ))}
            </div>
          </AnimatedBox>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

          {/* Service Description */}
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedBox animation="animate-fade-in-up" delay="0.3s">
              <p className="text-gray-400 text-lg leading-relaxed">
                {serviceContent[activeService].desc}
              </p>
            </AnimatedBox>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedBox animation="animate-fade-in-down">
            <SectionTitle
              subtitle="[ our projects ]"
              title="Our Projects"
              centered
            />
          </AnimatedBox>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Architecture",
                num: "01",
                img: "https://architectureinfinity.com/wp-content/uploads/2020/05/cate1.jpg",
                anim: "animate-slide-in-left",
              },
              {
                name: "Interior",
                num: "02",
                img: "https://architectureinfinity.com/wp-content/uploads/2020/05/cate2.jpg",
                anim: "animate-fade-in-up",
              },
              {
                name: "Commercial",
                num: "03",
                img: "https://architectureinfinity.com/wp-content/uploads/2020/05/cate3.jpg",
                anim: "animate-slide-in-right",
              },
            ].map((category, idx) => (
              <AnimatedBox
                key={idx}
                animation={category.anim}
                delay={`${idx * 0.1}s`}
              >
                <div className="relative group overflow-hidden h-64 rounded-lg shadow-md">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-center items-center text-white">
                    <span className="text-5xl font-bold mb-2 opacity-30">
                      {category.num}
                    </span>
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </AnimatedBox>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              num: 5,
              label: "Years of Experience",
              anim: "animate-slide-in-left",
            },
            { num: 25, label: "Clients", anim: "animate-fade-in-up" },
            {
              num: 6,
              label: "Ongoing Projects",
              anim: "animate-slide-in-right",
            },
          ].map((stat, i) => (
            <AnimatedBox key={i} animation={stat.anim} delay="0.2s">
              <div className="p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-accent mb-2 flex justify-center items-baseline">
                  <span className="text-xl align-top mr-1">[</span>
                  <CountUp end={stat.num} />
                  <span className="text-xl align-top ml-1">+]</span>
                </div>
                <h6 className="uppercase font-bold text-sm tracking-wider">
                  {stat.label}
                </h6>
              </div>
            </AnimatedBox>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <AnimatedBox animation="animate-fade-in-down">
            <SectionTitle
              subtitle="[ our professionals ]"
              title="Meet Our Skilled Team"
              centered
            />
          </AnimatedBox>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-12">
            {teamMembers.map((member, idx) => (
              <AnimatedBox
                key={idx}
                animation="animate-fade-in-up"
                delay={`${idx * 0.1}s`}
              >
                <div className="group relative h-[400px] overflow-hidden cursor-pointer">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-white text-xl font-bold uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {member.name}
                    </h4>
                    <p className="text-accent text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      [ {member.role} ]
                    </p>
                  </div>
                </div>
              </AnimatedBox>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedBox animation="animate-fade-in">
            <SectionTitle
              subtitle="[ what clients say ]"
              title="Testimonials"
              centered
            />
          </AnimatedBox>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Abishekh Abi",
                review:
                  "Architecture Infinity has transformed my space beyond imagination. Their attention to detail and creative solutions are unmatched.",
                rating: 5,
              },
              {
                name: "Priya Palani",
                review:
                  "Professional team with excellent communication. They understood our requirements perfectly and delivered exactly what we envisioned.",
                rating: 5,
              },
              {
                name: "Madhan Raj",
                review:
                  "Great experience working with Architecture Infinity. Their innovative designs and timely execution made our project a success.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <AnimatedBox
                key={idx}
                animation="animate-fade-in-up"
                delay={`${idx * 0.15}s`}
              >
                <div className="bg-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    "{testimonial.review}"
                  </p>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">Client</p>
                </div>
              </AnimatedBox>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <AnimatedBox animation="animate-fade-in-down">
            <SectionTitle
              subtitle="[ trusted partners ]"
              title="Our Valued Clients"
              centered
            />
          </AnimatedBox>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-12 items-center">
            {[
              { name: "Zaitun", img: "/assets/clients/zaitun.png" },
              { name: "Al-Medina", img: "/assets/clients/al-medina.png" },
              { name: "RC", img: "/assets/clients/rc.png" },
              { name: "Delice", img: "/assets/clients/delice.png" },
              { name: "JV-Cafe", img: "/assets/clients/jv-cafe.png" },
              { name: "ABI", img: "/assets/clients/abi.webp" },
              { name: "Acorn", img: "/assets/clients/acorn.webp" },
              { name: "Ark", img: "/assets/clients/ark.webp" },
            ].map((client, idx) => (
              <AnimatedBox
                key={idx}
                animation="animate-fade-in-up"
                delay={`${(idx % 4) * 0.1}s`}
              >
                <div className="flex items-center justify-center h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </AnimatedBox>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (Matches attached image) */}
      <section className="py-0">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT: Contact Form (White Background) */}
          <div className="lg:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
            <AnimatedBox animation="animate-slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-500 text-xs mb-12">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <form className="flex flex-col gap-8 font-raleway">
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
                  className="bg-[#1a1a1a] text-white px-10 py-4 font-bold text-xs tracking-widest hover:bg-accent transition-colors self-start mt-4"
                >
                  SEND MESSAGE
                </button>
              </form>
            </AnimatedBox>
          </div>

          {/* RIGHT: Contact Details (Dark Background) */}
          <div className="lg:w-1/2 bg-[#1a1a1a] text-white p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
            {/* Background pattern overlay if needed, utilizing simple CSS for now */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <AnimatedBox animation="animate-slide-in-right" delay="0.2s">
              <div className="relative z-10">
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">
                  [ OUR CONTACT DETAILS ]
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Let's Start a Project
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
                  Give us a call or drop by anytime, we endeavour to answer all
                  enquiries within 24 hours on business days. We will be happy
                  to answer your questions.
                </p>

                <div className="flex flex-col gap-8">
                  {/* Address */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h6 className="font-bold uppercase text-xs tracking-widest mb-2 text-white">
                        Our Address:
                      </h6>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Architecture Infinity, <br />
                        No 145, First floor, VMN Complex,
                        <br />
                        Suramangalam, Salem - 636005,
                        <br />
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
                      <h6 className="font-bold uppercase text-xs tracking-widest mb-2 text-white">
                        Our Mailbox:
                      </h6>
                      <a
                        href="mailto:admin@architectureinfinity.com"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
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
                      <h6 className="font-bold uppercase text-xs tracking-widest mb-2 text-white">
                        Our Phone:
                      </h6>
                      <div className="flex flex-col text-gray-400 text-sm">
                        <a
                          href="tel:+919944557832"
                          className="hover:text-white transition-colors"
                        >
                          +91 99445 57832
                        </a>
                        <a
                          href="tel:+919944557932"
                          className="hover:text-white transition-colors"
                        >
                          +91 99445 57932
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-12">
                  {socialLinks.map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedBox>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
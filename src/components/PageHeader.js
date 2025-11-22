import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, breadcrumb, bgImage }) => (
  <div 
    className="relative h-[60vh] min-h-[400px] bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 text-center text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
      <div className="flex justify-center items-center gap-2 text-sm uppercase tracking-widest font-medium">
        <span className="opacity-70">Home</span>
        <ChevronRight size={14} />
        <span>{breadcrumb}</span>
      </div>
    </div>
  </div>
);

export default PageHeader;

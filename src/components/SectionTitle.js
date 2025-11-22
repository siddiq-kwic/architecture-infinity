const SectionTitle = ({ subtitle, title, centered = false, light = false }) => (
  <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
    {subtitle && (
      <span className="text-accent uppercase tracking-[4px] text-sm font-bold block mb-2">
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-primary'}`}>
      {title}
    </h2>
  </div>
);

export default SectionTitle;

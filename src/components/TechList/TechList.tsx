import "./TechList.styles.scss";

type TechListProps = {
  techList: string[];
  ariaLabel?: string;
};

const TechList = ({ techList, ariaLabel }: TechListProps) => {
  return (
    <div
      data-testid="TechList"
      className="TechList flex flex-wrap gap-2 mb-6"
      role="list"
      aria-label={ariaLabel || `Technologies used: ${techList.join(", ")}`}>
      {techList.map((tech, techIndex) => (
        <span
          key={techIndex}
          className="bg-slate-800 px-3 py-1 rounded-full text-sm"
          role="listitem"
          aria-label={`Technology: ${tech}`}>
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechList;

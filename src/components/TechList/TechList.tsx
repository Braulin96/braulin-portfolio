import "./TechList.styles.scss";

type TechListProps = {
  techList: string[];
};

const TechList = ({ techList }: TechListProps) => {
  return (
    <div data-testid="TechList" className="TechList flex flex-wrap gap-2 mb-6">
      {techList.map((tech, techIndex) => (
        <span
          key={techIndex}
          className="bg-slate-800 px-3 py-1 rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechList;

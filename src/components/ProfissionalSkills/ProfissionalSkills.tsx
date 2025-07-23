import "./ProfissionalSkills.styles.scss";
import Title from "components/Title/Title";

type ProfissionalSkillsProps = {
  skills: {
    name: string;
    level: number;
  }[];
};

const ProfissionalSkills = ({ skills }: ProfissionalSkillsProps) => {
  return (
    <div
      data-testid="ProfissionalSkills"
      className="ProfissionalSkills bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-primary-blue/20">
      <Title firstText="Professional Skills" customClass="mb-6" size="sm" />
      <ul className="space-y-4 ml-[20px]">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <div className="w-3 h-3 bg-primary-blue rounded-full mr-4 flex-shrink-0"></div>
            <span className="text-white">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfissionalSkills;

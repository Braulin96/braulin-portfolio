import Title from "components/Title/Title";

import "./ProfissionalSkills.styles.scss";

type ProfissionalSkillsProps = {
  skills: string[];
  ariaLabel?: string;
};

const ProfissionalSkills = ({ skills, ariaLabel }: ProfissionalSkillsProps) => {
  return (
    <div
      data-testid="ProfissionalSkills"
      className="ProfissionalSkills flex flex-col justify-center items-center h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-primary-blue/20"
      role="region"
      aria-label={ariaLabel || "Professional skills and competencies"}>
      <Title
        firstText="Professional Skills"
        customClass="mb-6"
        size="sm"
        headingLevel="h3"
        ariaLabel="Professional skills heading"
      />
      <ul
        className="ml-[20px] grid grid-cols-1 md:grid-cols-2 gap-4"
        role="list"
        aria-label="List of professional skills and competencies">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center mb-4" role="listitem">
            <div
              className="size-3 bg-primary-blue rounded-full mr-4 flex-shrink-0"
              role="presentation"
              aria-hidden="true"></div>
            <span
              className="text-slate-300"
              aria-label={`Professional skill: ${skill}`}>
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfissionalSkills;

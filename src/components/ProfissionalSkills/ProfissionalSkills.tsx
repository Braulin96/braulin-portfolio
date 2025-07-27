import Title from "components/Title/Title";
import SlideCarousel from "components/SlideCarousel/SlideCarousel";
import ToolsCard from "components/ToolsCard/ToolsCard";

import "./ProfissionalSkills.styles.scss";

type ProfissionalSkillsProps = {
  ariaLabel?: string;
  tools: {
    name: string;
    icon?: string;
    type?: string;
  }[];
};

const ProfissionalSkills = ({ ariaLabel, tools }: ProfissionalSkillsProps) => {
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

      <SlideCarousel
        variant="reverse"
        slides={tools}
        ariaLabel="Sliding carousel of development tools and programming technologies">
        {(tool, index) => <ToolsCard key={index} tool={tool} />}
      </SlideCarousel>
    </div>
  );
};

export default ProfissionalSkills;

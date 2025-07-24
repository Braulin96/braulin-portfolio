import "./Skills.styles.scss";

import ToolsBlock from "components/ToolsBlock/ToolsBlock";
import ProfissionalSkills from "components/ProfissionalSkills/ProfissionalSkills";

import { TollsCardData } from "constants/TollsCardData";

const Skills = () => {
  const professionalSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 88 },
    { name: "Team Collaboration", level: 87 },
    { name: "Project Management", level: 82 },
    { name: "Adaptability", level: 93 },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            My <span className="primary-blue">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ToolsBlock tools={TollsCardData} />
          <ProfissionalSkills skills={professionalSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;

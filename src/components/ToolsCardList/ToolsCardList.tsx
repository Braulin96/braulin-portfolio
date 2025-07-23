import ToolsCard from "components/ToolsCard/ToolsCard";

import "./ToolsCardList.styles.scss";

type ToolsCardListProps = {
  tools: {
    name: string;
    icon?: string;
    color?: string;
  }[];
};

const ToolsCardList = ({ tools }: ToolsCardListProps) => {
  return (
    <div
      data-testid="ToolsCardList"
      className="ToolsCardList flex flex-wrap justify-center gap-6">
      {tools.map((tool, index) => (
        <ToolsCard key={index} tool={tool} />
      ))}
    </div>
  );
};

export default ToolsCardList;

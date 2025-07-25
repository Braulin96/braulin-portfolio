import ToolsCardList from "components/ToolsCardList/ToolsCardList";
import Title from "components/Title/Title";

import "./ToolsBlock.styles.scss";

type ToolsBlockProps = {
  tools: {
    name: string;
    icon?: string;
    type?: string;
  }[];
};

const ToolsBlock = ({ tools }: ToolsBlockProps) => {
  return (
    <div data-testid="ToolsBlock" className="py-8 ToolsBlock">
      <Title
        firstText="Tools & Technologies"
        customClass="mb-6 text-center"
        size="sm"
      />
      <ToolsCardList tools={tools} />
    </div>
  );
};

export default ToolsBlock;

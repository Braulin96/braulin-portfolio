import { getColorClass } from "utils/getColorClass";

import "./ToolsCard.styles.scss";

type ToolsCardProps = {
  tool: {
    name: string;
    icon?: string;
    type?: string;
  };
};

const ToolsCard = ({ tool }: ToolsCardProps) => {
  const color = getColorClass(tool.type);
  return (
    <div
      data-testid="ToolsCard"
      className={`ToolsCard w-24 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-4 text-center border border-primary-blue/20 hover:border-primary-blue/40 transition-all`}>
      {tool.icon && (
        <img
          src={tool.icon}
          sizes="10px"
          className={`mb-1 size-[50px]`}
          alt={tool.name}
        />
      )}
      <span className={`text-sm ${color}`}>{tool.name}</span>
    </div>
  );
};

export default ToolsCard;

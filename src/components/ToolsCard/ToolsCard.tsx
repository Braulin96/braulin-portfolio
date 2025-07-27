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
      className={`ToolsCard w-[140px] h-[80px] rounded-2xl flex flex-col items-center justify-center p-4 text-center border border-primary-blue/20 hover:border-primary-blue/40 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900`}
      role="gridcell"
      aria-label={`${tool.name}${
        tool.type ? ` - ${tool.type}` : ""
      } technology`}
      tabIndex={0}>
      {tool.icon && (
        <img
          src={tool.icon}
          sizes="10px"
          className={`mb-1 size-[50px]`}
          alt=""
          role="presentation"
          aria-hidden="true"
        />
      )}
      <span
        className={`text-sm ${color}`}
        aria-label={`Technology name: ${tool.name}`}>
        {tool.name}
      </span>
    </div>
  );
};

export default ToolsCard;

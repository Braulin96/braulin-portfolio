import "./ToolsCard.styles.scss";

type ToolsCardProps = {
  tool: {
    name: string;
    icon?: string;
    color?: string;
  };
};

const ToolsCard = ({ tool }: ToolsCardProps) => {
  return (
    <div
      data-testid="ToolsCard"
      className={`ToolsCard size-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-4 border border-primary-blue/20 hover:border-primary-blue/40 transition-all`}>
      {tool.icon && (
        <img
          src={tool.icon}
          sizes="10px"
          className={`mb-1 size-[50px]`}
          alt={tool.name}
        />
      )}
      <span className={`text-sm text-${tool.color}`}>{tool.name}</span>
    </div>
  );
};

export default ToolsCard;

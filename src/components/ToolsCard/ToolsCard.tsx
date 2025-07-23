import "./ToolsCard.styles.scss";

type ToolsCardProps = {
  tool: {
    name: string;
    icon: string;
  };
};

const ToolsCard = ({ tool }: ToolsCardProps) => {
  return (
    <div
      data-testid="ToolsCard"
      className="ToolsCard size-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-4 border border-primary-blue/20 hover:border-primary-blue/40 transition-all">
      <img src={tool.icon} className={`mb-2`} alt={tool.name} />
      <span className="text-sm">{tool.name}</span>
    </div>
  );
};

export default ToolsCard;

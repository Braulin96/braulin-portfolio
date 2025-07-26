import "./TemplateName.styles.scss";

type TemplateNameProps = {
  children?: React.ReactNode;
};

const TemplateName = ({ children }: TemplateNameProps) => {
  return (
    <div data-testid="TemplateName" className="TemplateName">
      {children}
    </div>
  );
};

export default TemplateName;

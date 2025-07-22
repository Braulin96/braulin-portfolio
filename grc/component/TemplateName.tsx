import "./TemplateName.styles.scss";

type TemplateNameProps = {
  children?: React.ReactNode;
};

const TemplateName = ({}: TemplateNameProps) => {
  return (
    <div data-testid="TemplateName" className="TemplateName">
      TemplateName
    </div>
  );
};

export default TemplateName;

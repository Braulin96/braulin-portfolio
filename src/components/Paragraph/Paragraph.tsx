import "./Paragraph.styles.scss";

type ParagraphProps = {
  text: string;
  customClass?: string;
};

const Paragraph = ({ text, customClass }: ParagraphProps) => {
  return (
    <p
      data-testid="Paragraph"
      className={`Paragraph text-slate-300 md:text-lg text-md ${customClass}`}>
      {text}
    </p>
  );
};

export default Paragraph;

import "./Paragraph.styles.scss";

type ParagraphProps = {
  text: string;
  customClass?: string;
  ariaLabel?: string;
  role?: string;
};

const Paragraph = ({
  text,
  customClass = "",
  ariaLabel,
  role,
}: ParagraphProps) => {
  return (
    <p
      data-testid="Paragraph"
      className={`Paragraph text-slate-300 md:text-lg text-md ${customClass}`}
      aria-label={ariaLabel}
      role={role}>
      {text}
    </p>
  );
};

export default Paragraph;

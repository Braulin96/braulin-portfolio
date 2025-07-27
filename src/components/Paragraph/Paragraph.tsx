import "./Paragraph.styles.scss";

type ParagraphProps = {
  text: string;
  customClass?: string;
  ariaLabel?: string;
  role?: string;
  numberOfLines?: number; // Optional prop to limit the number of lines
};

const Paragraph = ({
  text,
  customClass = "",
  ariaLabel,
  role,
  numberOfLines = 0,
}: ParagraphProps) => {
  return (
    <p
      data-testid="Paragraph"
      style={{
        overflow: "hidden",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: numberOfLines,
      }}
      className={`Paragraph text-slate-300 md:text-lg text-md ${customClass}`}
      aria-label={ariaLabel}
      role={role}>
      {text}
    </p>
  );
};

export default Paragraph;

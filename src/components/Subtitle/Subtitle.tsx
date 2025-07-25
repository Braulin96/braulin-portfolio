import "./Subtitle.styles.scss";

type SubtitleProps = {
  firstText: string;
  secondText?: string;
  customClass?: string;
  ariaLabel?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Subtitle = ({
  firstText,
  secondText,
  customClass,
  ariaLabel,
  headingLevel = "h2",
}: SubtitleProps) => {
  const HeadingTag = headingLevel;

  return (
    <div data-testid="Subtitle" className={`Subtitle w-fit ${customClass}`}>
      <HeadingTag
        className="text-3xl font-bold mb-4"
        aria-label={ariaLabel || `${firstText} ${secondText || ""}`.trim()}>
        {firstText}
        {secondText && (
          <span
            className="text-primary-blue ml-2"
            aria-label={`highlighted text: ${secondText}`}>
            {secondText}
          </span>
        )}
      </HeadingTag>
      <div
        className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"
        role="presentation"
        aria-hidden="true"></div>
    </div>
  );
};

export default Subtitle;

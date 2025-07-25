import "./Title.styles.scss";

type TitleProps = {
  firstText: string;
  secondText?: string;
  customClass?: string;
  size?: "xs" | "sm" | "md" | "lg";
  ariaLabel?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const defaultClasses = {
  xs: "md:text-xl text-lg",
  sm: "md:text-2xl text-xl",
  md: "text-2xl md:text-4xl ",
  lg: "text-4xl md:text-6xl ",
};

const Title = ({
  firstText,
  secondText,
  customClass,
  size = "md",
  ariaLabel,
  headingLevel = "h1",
}: TitleProps) => {
  const HeadingTag = headingLevel;

  return (
    <div data-testid="Title" className={`Title ${customClass}`}>
      <HeadingTag
        className={`${defaultClasses[size]} font-bold`}
        aria-label={ariaLabel || `${firstText} ${secondText || ""}`.trim()}>
        {firstText}
        {secondText && (
          <span
            className={`ml-[12px] ${
              size === "lg"
                ? "primary-blue"
                : "bg-gradient-to-r from-primary-blue to-secondary-purple text-transparent bg-clip-text"
            }`}
            aria-label={`emphasized text: ${secondText}`}>
            {secondText}
          </span>
        )}
      </HeadingTag>
    </div>
  );
};

export default Title;

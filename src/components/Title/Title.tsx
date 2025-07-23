import "./Title.styles.scss";

type TitleProps = {
  firstText: string;
  secondText?: string;
  customClass?: string;
  size?: "sm" | "md" | "lg";
};

const defaultClasses = {
  sm: "md:text-2xl text-xl",
  md: "text-2xl md:text-4xl ",
  lg: "text-4xl md:text-6xl ",
};

const Title = ({
  firstText,
  secondText,
  customClass,
  size = "md",
}: TitleProps) => {
  return (
    <div data-testid="Title" className={`Title ${customClass}`}>
      <h1 className={`${defaultClasses[size]} font-bold`}>
        {firstText}
        {secondText && (
          <span
            className={`ml-[12px] ${
              size === "lg"
                ? "primary-blue"
                : "bg-gradient-to-r from-primary-blue to-secondary-purple text-transparent bg-clip-text"
            }`}>
            {secondText}
          </span>
        )}
      </h1>
    </div>
  );
};

export default Title;

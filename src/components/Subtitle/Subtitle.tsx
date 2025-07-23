import "./Subtitle.styles.scss";

type SubtitleProps = {
  firstText: string;
  secondText?: string;
  customClass?: string;
};

const Subtitle = ({ firstText, secondText, customClass }: SubtitleProps) => {
  return (
    <div data-testid="Subtitle" className={`Subtitle w-fit ${customClass}`}>
      <h2 className="text-3xl font-bold mb-4">
        {firstText} <span className="text-primary-blue">{secondText}</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
    </div>
  );
};

export default Subtitle;

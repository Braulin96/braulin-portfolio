import "./Asset.styles.scss";

type AssetProps = {
  image?: string;
  customClass?: string;
  variant?: "default" | "fullRounded" | "flexible";
  specialization?: string;
  alt?: string;
  ariaLabel?: string;
};

const Asset = ({
  image,
  customClass = "",
  specialization,
  variant = "default",
  alt = "Profile image",
  ariaLabel,
}: AssetProps) => {
  // Dynamic sizing based on variant
  const getSizeClasses = () => {
    switch (variant) {
      case "flexible":
        return "w-full h-full min-h-[300px]";
      case "fullRounded":
        return "rounded-2xl size-[300px] md:size-[350px] lg:mr-[80px] border-4";
      default:
        return "size-[300px] lg:size-[400px]";
    }
  };

  return (
    <div className="relative ">
      <figure
        data-testid="Asset"
        className={`Asset group relative bg-transparent border-2 border-white/50  ${customClass}`}
        role="img"
        style={{
          animation:
            variant === "default" ? "smoothFloat 3s ease-in-out infinite" : "",
        }}
        aria-label={ariaLabel || alt}>
        <div className={`relative overflow-hidden ${getSizeClasses()}`}>
          <div
            style={{
              height: "100%",
            }}
            className="">
            {image && (
              <img
                src={image}
                alt={alt}
                className={`transition-transform duration-500 not-only-of-type:w-full h-full object-cover`}
                loading="lazy"
              />
            )}
          </div>
        </div>
      </figure>
      {specialization && (
        <figcaption
          className="absolute text-center min-w-[300px] -bottom-6 py-4 px-5 right-1/2 transform translate-x-1/2 bg-white text-primary-blue shadow-lg hover:shadow-indigo-500/30 rounded-full text-sm font-bold "
          aria-label={`Technology stack: ${specialization}`}>
          {specialization}
        </figcaption>
      )}
    </div>
  );
};

export default Asset;
